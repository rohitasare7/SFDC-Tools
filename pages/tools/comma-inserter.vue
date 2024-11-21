<script setup>
import { ref } from "vue";
import CopyIcon from '../../components/icons/CopyIcon.vue';
import ResetIcon from '../../components/icons/ResetIcon.vue';
//codemirror start
import { Codemirror } from 'vue-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from 'codemirror';
import { json } from '@codemirror/lang-json';

const extensions = [json(), oneDark, EditorView.lineWrapping];
const view = shallowRef()
const handleReady = (payload) => {
    view.value = payload.view
}
//codemirror end
const prefix = ref("");
const inputData = ref("");
const outputData = ref("");

const processData = () => {
    const uniqueList = [];
    const uniqueIDs = inputData.value.split("\n");
    uniqueIDs.forEach((id) => {
        if (id.trim().length > 0) {
            const prefixedId = prefix.value
                ? `${prefix.value}${id.trim()}`
                : id.trim();
            uniqueList.push(`'${prefixedId}'`);
        }
    });
    outputData.value = uniqueList.join(", ");
};

const handleInputChange = () => {
    processData();
}


const resetFields = () => {
    inputData.value = "";
    outputData.value = "";
    prefix.value = "";
};

const copyData = async () => {
    if (outputData.value) {
        copyToClipboard(outputData.value, true);
    }
};

</script>

<template>

    <PageTitle class="text-2xl font-bold">SOQL IN Clause Comma Inserter</PageTitle>
    <InputLabel class="text-normal font-thin">Enter values one after another on separate line to get proper formatted data.</InputLabel>
    <div class="space-y-4 mt-6">
        <!-- Input Section -->
        <div>
            <InputLabel for="prefixInput" class="text-md font-medium">Add Prefix (Optional)</InputLabel>
            <TextInput v-model="prefix" type="text" id="prefixInput" placeholder="Add Prefix Here"
                class="mt-2 p-2 border rounded w-46" v-on:change="handleInputChange" />
        </div>


        <!-- Editors Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Input Editor -->
            <div>

                <div class="flex justify-between items-center mb-2">
                    <InputLabel class="text-md font-medium">Input Data (Line by Line)</InputLabel>
                    <SVGIconButton @click="resetFields" :icon="ResetIcon" :isSquare="false" color="red"
                        title="Reset Data" />
                </div>

                <div class="dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden">
                    <codemirror v-model="inputData" placeholder="Enter your data line by line"
                        @update="handleInputChange"
                        :style="{ height: '200px', borderRadius: '5px', overflow: 'hidden' }" :autofocus="true"
                        :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady" />
                </div>
            </div>

            <!-- Output Editor -->
            <div>
                <div class="flex justify-between items-center mb-2">
                    <InputLabel class="text-md font-medium">Output</InputLabel>
                    <SVGIconButton @click="copyData" :icon="CopyIcon" :isSquare="false" color="green"
                        title="Learn How to Debug OmniScript" />
                </div>
                <div class="dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden">
                    <codemirror v-model="outputData" placeholder="Your output will appear here"
                        :style="{ height: '200px', borderRadius: '5px', overflow: 'hidden' }" :autofocus="true"
                        :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady" />
                </div>

            </div>
        </div>
        <!-- <InputLabel class="text-sm font-thin">If you have excel sheet / items in a column then paste in input to get
            comma separated values for IN clause in SOQL
            <br>For example, you can convert below items :
            <br>1236
            <br>9683
            <br>to : '1236', '9683'
        </InputLabel> -->
    </div>

</template>
