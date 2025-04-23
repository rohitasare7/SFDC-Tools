<script setup>
useSeoMeta({
    title: 'Debug Log Parser',
    ogTitle: 'Debug Log Parser',
    description: 'Get more from your Debug Logs.',
    ogDescription: 'Get more from your Debug Logs.',
});
import { ref, reactive, computed, watch, shallowRef, onMounted } from 'vue';
// Vue3 Easy DataTable
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
//codemirror
import { Codemirror } from 'vue-codemirror';
import { java } from '@codemirror/lang-java';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from 'codemirror';

//CodeMirror Data
const extensions = [java(), oneDark, EditorView.lineWrapping];
// Codemirror EditorView instance ref
const view = shallowRef()
const handleReady = (payload) => {
    view.value = payload.view
}

const viewDebugLoading = ref(false);
const debugLogBody = ref(null);
let debugLogListMain = ref([]);
const searchField = ['time', 'action', 'variable', 'data'];
const searchValue = ref('');

const sortBy = "StartTime";
const sortType = "desc";

const headers = [
    { text: "Time", value: "time" },
    { text: "Action", value: "action" },
    { text: "Line Number", value: "variable" }, //width: 200
    { text: "Value", value: "data" },
];

const logData = ref('');
const parsedData = ref([]);
const actionTypes = [
    { type: 'FATAL_ERROR', default: true },
    { type: 'EXCEPTION_THROWN', default: true },
    { type: 'SOQL_EXECUTE_BEGIN', default: true },
    { type: 'VARIABLE_ASSIGNMENT', default: false },
    { type: 'USER_DEBUG', default: true }
];

// Checkbox state for each action type with default values
const selectedActionTypes = reactive(
    actionTypes.reduce((obj, { type, default: defaultValue }) => {
        // Set default values based on the array of objects
        obj[type] = defaultValue;
        return obj;
    }, {})
);

// Computed property to filter the data based on selectedActionTypes
const filteredData = computed(() => {
    return parsedData.value.filter(entry => selectedActionTypes[entry.action]);
});

// // Watcher to log selected action types when they change
// watch(selectedActionTypes, (newVal) => {
//     //console.log('Selected Action Types:', Object.keys(newVal).filter(type => newVal[type]));
// });

watch(logData, (newVal) => {
    if (newVal) {
        parseLogData();
    }
});

const parseLogData = () => {
    // Check if there is at least one selected action type
    if (!Object.values(selectedActionTypes).some(value => value)) {
        console.warn('Please select at least one action type.');
        return;
    }
    parsedData.value = parseLogs(logData.value);
    //console.log(parsedData.value);
};

const parseLogs = (logs) => {
    //console.log('logs --> ' + JSON.stringify(logs));
    if (Array.isArray(logs) && logs[0]?.errorCode == 'INVALID_CROSS_REFERENCE_KEY') {
        //console.log('inside array' + JSON.stringify(logs[0].message));
        addToast('Error : Invalid cross reference id, please contact admin.', 'Error');
        return;
    }
    const parsedData = [];
    const lines = logs.split('\n');

    lines.forEach(line => {
        const timeMatch = line.match(/^(\d+:\d+:\d+\.\d+)/);
        const time = timeMatch ? timeMatch[1] : '';

        actionTypes.forEach(({ type: actionType }) => {
            if (line && line.includes(`|${actionType}|`) && selectedActionTypes[actionType]) {
                const info = line.split(`|${actionType}|`)[1]?.trim();
                const entry = { time, action: actionType };

                if (info) {
                    if (actionType === 'EXCEPTION_THROWN' || actionType === 'VARIABLE_ASSIGNMENT') {
                        const lineNumberMatch = info.match(/\[\d+\]/);
                        if (lineNumberMatch) {
                            const lineNumber = lineNumberMatch[0];
                            const data = actionType === 'EXCEPTION_THROWN' ? info.split('|')[1]?.trim() : info.split('|')[1]?.trim() + ' : ' + info.split('|')[2]?.trim();
                            entry.variable = lineNumber;
                            entry.data = data;
                            parsedData.push(entry);
                        }
                    } else if (actionType === 'SOQL_EXECUTE_BEGIN') {
                        const lineNumber = info.match(/\[\d+\]/)?.[0];
                        const query = info.split('SELECT')[1]?.trim();
                        entry.variable = lineNumber;
                        entry.data = query;
                        parsedData.push(entry);
                    } else if (actionType === 'USER_DEBUG') {
                        const debugInfo = line.split('|USER_DEBUG|')[1].trim();
                        const lineNumber = debugInfo.match(/\[\d+\]/)?.[0] || ''; // Extract line number if present
                        const lastValue = debugInfo.split('|').pop().trim();
                        // Only add if lastValue is present
                        if (lastValue) {
                            parsedData.push({ time, action: 'USER_DEBUG', variable: lineNumber, data: lastValue });
                        }
                    } else {
                        entry.data = info;
                        parsedData.push(entry);
                    }
                }
            }
        });
    });

    return parsedData;
};

// Add new data property for filtered data output
const filteredDataOutput = ref("");

// Method to display filtered data in the textarea
const displayFilteredData = () => {
    const filteredLines = logData.value.split('\n').filter(line => {
        return line.includes('USER_DEBUG') || line.includes('FATAL_ERROR') || line.includes('EXCEPTION_THROWN');
    });
    filteredDataOutput.value = filteredLines.join("\n");
};

// Method to handle file upload
const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            // Store the content of the log file in logData
            logData.value = reader.result;
        };
        // Read the content of the log file
        reader.readAsText(file);

        // parseLogData();
    }

};

const parseLogDataOnChange = () => {
    //console.log('parseLogDataOnChange');
}

const resetData = () => {
    logData.value = '';
    parsedData.value = [];
    searchValue.value = '';
}

//add color to actions
//work on urls
</script>


<template>

    <div class="flex justify-between">
        <div class="flex flex-col">
            <PageTitle>Debug Logs Parser</PageTitle>
            <PageDescription>Read debug log data easily.</PageDescription>
        </div>

    </div>

    <div class="main_container">
        <div class="flex items-center space-x-4">
            <!-- Left side -->
            <div class="w-52">
                <InputLabel class="font-semibold my-4">Upload Log File</InputLabel>
                <input @change="handleFileUpload" accept=".log"
                    class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-md border border-solid border-gray-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-gray-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-gray-100 file:px-3 file:py-[0.32rem] file:text-gray-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-gray-200 focus:border-primary focus:text-gray-700 focus:shadow-te-primary focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:file:bg-gray-700 dark:file:text-gray-100 dark:focus:border-primary"
                    id="file_input" type="file">
            </div>

            <!-- Right side -->
            <div class="flex items-center space-x-4">
                <div>
                    <!-- InputLabel for Select Action Type -->
                    <InputLabel class="font-semibold my-4">Select Action Type</InputLabel>

                    <!-- Checkboxes for Action Types -->
                    <div class="flex items-center space-x-2">
                        <InputLabel v-for="(item) in actionTypes" :key="item.type" class="cursor-pointer mr-2">
                            <input type="checkbox" v-model="selectedActionTypes[item.type]" class="mr-1 mb-1 " />
                            <span>{{ item.type }}</span>
                        </InputLabel>
                    </div>
                </div>
            </div>
        </div>

        <!-- <textarea v-model="logData" class="w-full h-40 p-2 border rounded-md mt-4"
                placeholder="Paste log data here"></textarea> -->

        <InputLabel class="font-semibold mt-6">Or paste your debug log here</InputLabel>
        <div class="dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden">
            <codemirror v-model="logData" placeholder="Your data will appear here"
                :style="{ height: '100px', borderRadius: '5px', overflow: 'hidden', marginTop: '7px' }"
                :autofocus="true" :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady"
                @change="parseLogDataOnChange" />
        </div>

        <div class="flex items-center">
            <div class="flex items-center space-x">
                <PrimaryButton @click="parseLogData" class="mr-4">Submit</PrimaryButton>
                <TextInput v-model="searchValue" type="text" class="my-4 mr-4 !px-2 !py-1"
                    placeholder="Search any string.." />
            </div>
            <div class="ml-auto">
                <PrimaryButton @click="resetData" class="mr-4" :isRed="true">Reset</PrimaryButton>
            </div>
        </div>

        <Vue3EasyDataTable :headers="headers" :items="filteredData" :search-field="searchField" :rows-per-page="50"
            header-text-direction="center" :search-value="searchValue" :sort-by="sortBy" :sort-type="sortType"
            :no-hover="true" :theme-color="'#312e3d'"
            table-class-name="tableCSS mb-12 rounded-lg border dark:border-gray-700 shadow-md">
            <template #item-action="{ action }">
                <p class="text-center" :class="{
                    'text-red-600': action === 'FATAL_ERROR',
                    'text-orange-600': action === 'EXCEPTION_THROWN',
                    'text-yellow-600': action === 'SOQL_EXECUTE_BEGIN',
                    'text-gray-800': action === 'VARIABLE_ASSIGNMENT',
                    'text-green-600': action === 'USER_DEBUG'
                }">{{ action }}</p>
            </template>
        </Vue3EasyDataTable>

        <!-- <button @click="displayFilteredData" class="mt-4 bg-green-500 text-white py-2 px-4 rounded">Show Textarea
                Output</button>
                <div class="dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden mt-4">
                <codemirror v-model="filteredDataOutput" placeholder="Your data will appear here"
                    :style="{ height: '100px', borderRadius: '5px', overflow: 'hidden', marginTop: '7px' }"
                    :autofocus="true" :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady" />
                </div>
            <textarea v-model="filteredDataOutput" class="w-full h-40 p-2 border rounded-md mt-4" readonly></textarea> -->

    </div>

</template>

<style scoped>
.tableCSS {
    --easy-table-header-font-size: 0.880rem;
    --easy-table-header-background-color: #f3f4f6;
    --easy-table-body-row-font-size: 0.875rem;
    --easy-table-footer-height: 40px;
    --easy-table-rows-per-page-selector-z-index: 9999;
}
</style>
