<script setup>
useSeoMeta({
  title: 'OmniScript Input JSON Formatter',
  ogTitle: 'OmniScript Input JSON Formatter',
  description: 'OmniScript Input JSON Formatter formats JSON for OmniScript, ensuring seamless Salesforce configuration and testing.',
  ogDescription: 'OmniScript Input JSON Formatter formats JSON for OmniScript, ensuring seamless Salesforce configuration and testing.',
});

import { ref, shallowRef } from 'vue';
//icons
import CopyIcon from '~/components/icons/CopyIcon.vue';
import ResetIcon from '~/components/icons/ResetIcon.vue';
//helper
import { getActionData } from '~/utils/data/omniScriptData';

//codemirror start
import { Codemirror } from 'vue-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from 'codemirror';
import { json } from '@codemirror/lang-json';
import { java } from '@codemirror/lang-java';

const extensions = [json(), oneDark, EditorView.lineWrapping];
const outputext = [java(), oneDark, EditorView.lineWrapping];
const view = shallowRef()
const handleReady = (payload) => {
  view.value = payload.view
}
//codemirror end


// Actual Formatting starts
const jsonInput = ref('');
const jsonOutput = ref('');
const actionType = ref('');
const actionName = ref('');
const actionElementLabel = ref('');

// format code
const formatCode = () => {
  jsonInput.value = JSON.stringify(JSON.parse(jsonInput.value), null, 4);
}
const beautifyJson = () => {
  if (jsonInput.value == '') {
    return;
  }
  try {
    // Parse the input JSON
    formatCode();
    const parsedJson = JSON.parse(jsonInput.value);
    // Extract the value from actions.params.params.input
    const rawJson = parsedJson?.actions[0]?.params?.params?.input;

    // Replace all \" with regular " or remove \
    const cleanedJson = rawJson.replace(/\\"/g, '"').replace(/\\/g, '');

    // Parse the cleaned JSON string and beautify it
    jsonOutput.value = JSON.stringify(JSON.parse(cleanedJson), null, 4);
    //Get Action Data
    const actionTypeStr = parsedJson?.actions[0]?.params?.params?.sClassName;
    actionName.value = parsedJson?.actions[0]?.params?.params?.sMethodName; // check this for diff things
    if (actionTypeStr) {
      const actionItem = getActionData(actionTypeStr);
      actionType.value = actionItem.actionLabel;
      actionElementLabel.value = actionItem.elementLabel;
    }

  } catch (error) {
    console.error('error -->' + error)
    jsonOutput.value = 'Invalid JSON or incorrect structure. Please check the input.';
  }
};

//reset editors
const resetData = () => {
  jsonInput.value = '';
  jsonOutput.value = '';
}

const copyOutput = () => {
  copyToClipboard(jsonOutput.value, true);
}

</script>

<template>

  <PageTitle class="text-2xl font-bold">OmniScript Input JSON Formatter</PageTitle>
  <InputLabel class="text-normal font-thin">Get your OmniScript Action/Event details - <NuxtLink class="text-blue-800 dark:text-blue-300 underline" to="https://www.linkedin.com/pulse/how-debug-omniscript-runtime-mode-rohitkumar-asare-im9sf/" target="_blank">Refer How to Debug OmniScript in Runtime Mode</NuxtLink> </InputLabel>
  <!-- Top Container Starts-->

  <div v-if="actionType || actionName" class="flex gap-4 mt-6">
    <div class="flex flex-col">
      <InputLabel value="You are calling : " class="mb-2" />
      <TextInputCopyBtn :value="actionType" :readonly="true" :displayCopyBtn="false" />
    </div>

    <div class="flex flex-col">
      <InputLabel :value="actionElementLabel + ' Name : '" class="mb-2" />
      <TextInputCopyBtn :value="actionName" :readonly="true" />
    </div>
  </div>

  <div class="flex gap-4 mt-4">
    <div class="w-1/2">

      <div class="flex justify-between items-center mb-4">
        <InputLabel value="Input JSON" class="mt-2"></InputLabel>
        <SVGIconButton @click="resetData" :icon="ResetIcon" :isSquare="false" color="red" title="Reset Data"
          class="mr-2" />
      </div>


      <div class="dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden">
        <codemirror v-model="jsonInput" placeholder="Enter your data line by line" @update="beautifyJson"
          :style="{ height: '600px', borderRadius: '5px', overflow: 'hidden' }" :autofocus="true"
          :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady" />
      </div>
    </div>

    <div class="w-1/2">
      <div class="flex justify-between items-center mb-4">
        <InputLabel value="Output JSON" class="mt-2"></InputLabel>
        <SVGIconButton @click="copyOutput" :icon="CopyIcon" :isSquare="false" color="blue" title="Copy Output JSON"
          class="mr-2" />
      </div>


      <div class="dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden">
        <codemirror v-model="jsonOutput" placeholder="Enter your data line by line"
          :style="{ height: '600px', borderRadius: '5px', overflow: 'hidden' }" :autofocus="true"
          :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady" />
      </div>
    </div>
  </div>

  <!-- Top Container Ends-->

</template>