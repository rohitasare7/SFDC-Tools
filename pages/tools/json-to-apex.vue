<script setup>
import { ref, watch } from 'vue';
import CopyIcon from '../../components/icons/CopyIcon.vue';
import ResetIcon from '../../components/icons/ResetIcon.vue';
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

const inpClassName = ref('MainClass');
const testClassName = ref(`${inpClassName.value}Test`);
const jsonInput = ref('');
const mainClassOutput = ref('');
const testClassOutput = ref('');

const resetFields = () => {
  inpClassName.value = '';
  testClassName.value = '';
  jsonInput.value = '';
  mainClassOutput.value = '';
  testClassOutput.value = '';
};

watch(inpClassName, (newValue) => {
  testClassName.value = `${newValue}Test`;
});

const generateClasses = () => {
  if (jsonInput.value == '') {
    console.log('null value');
    return;
  }
  if (!inpClassName.value.trim()) {
    inpClassName.value = 'MainWrapperClass';
  }
  if (!testClassName.value.trim()) {
    testClassName.value = `${inpClassName.value}Test`;
  }

  try {
    const obj = JSON.parse(jsonInput.value);
    const className = inpClassName.value;
    mainClassOutput.value = `/*
Class Info Here
*/

public class ${className} {
`;

    const c = {};
    const append = (line, cls) => {
      if (!cls) {
        mainClassOutput.value += `    ${line}\n`;
      } else {
        c[cls] = c[cls] || [];
        c[cls].push(line);
      }
    };

    const processObject = (o, parent) => {
      for (const key in o) {
        const value = o[key];
        switch (typeof value) {
          case 'object':
            const isArray = Array.isArray(value);
            const childClassName = `cls_${key}`;
            append(`public ${isArray ? `List<${childClassName}>` : childClassName} ${key};`, parent);
            if (isArray) {
              processObject(value[0], key);
            } else {
              processObject(value, key);
            }
            break;
          case 'string':
            append(`public String ${key};`, parent);
            break;
          case 'number':
            append(`public ${Number.isInteger(value) ? 'Integer' : 'Double'} ${key};`, parent);
            break;
          case 'boolean':
            append(`public Boolean ${key};`, parent);
            break;
        }
      }
    };

    processObject(obj, '');

    for (const key in c) {
      mainClassOutput.value += `    public class cls_${key} {\n`;
      c[key].forEach((line) => {
        mainClassOutput.value += `        ${line}\n`;
      });
      mainClassOutput.value += '    }\n';
    }

    mainClassOutput.value += `
    public static ${className} parse(String json) {
        return (${className}) System.JSON.deserialize(json, ${className}.class);
    }
}`;
    testClassOutput.value = `/*
Test Class for ${className}
Additional Info Here
*/

@isTest
public class ${testClassName.value} {

    @isTest
    public static void wrapperTestMethod() {
        String json = ${JSON.stringify(jsonInput.value)};
        ${className} obj = ${className}.parse(json);
        System.assert(obj != null);
    }
}`;
  } catch (error) {
    console.error('error --> ' + error);
    mainClassOutput.value = 'Invalid Input JSON';
    testClassOutput.value = 'Invalid Input JSON';
    //alert('Invalid JSON');
  }
};

const copyData = async (type) => {
  if (type == 'MainClass') {
    copyToClipboard(mainClassOutput.value, true);
  }
  else if (type == 'TestClass') {
    copyToClipboard(testClassOutput.value, true);
  }
};

</script>

<template>
  <PageTitle class="text-2xl font-bold">JSON To Apex</PageTitle>
  <InputLabel class="text-normal font-thin">Convert your JSON into Apex Wrapper Class</InputLabel>

  <div class="flex gap-4 mt-6 mb-4">
    <div class="mr-4">
      <InputLabel for="inpClassName" class="text-md font-medium">Enter Wrapper Class Name</InputLabel>
      <TextInput v-model="inpClassName" type="text" id="inpClassName" placeholder="Enter Wrapper Class Name"
        class="mt-2 p-2 border rounded w-46" v-on:change="generateClasses" />
    </div>
    <div>
      <InputLabel for="testClassName" class="text-md font-medium">Change Test Class Name</InputLabel>
      <TextInput v-model="testClassName" type="text" id="testClassName" placeholder="Enter Test Class Name"
        class="mt-2 p-2 border rounded w-46" v-on:change="generateClasses" />
    </div>
  </div>

  <div class="flex w-full gap-4">
    <div class="w-1/2">

      <div class="flex justify-between items-center mb-2">
        <InputLabel class="text-md font-medium">Paste Your JSON Here</InputLabel>
        <SVGIconButton @click="resetFields" :icon="ResetIcon" :isSquare="false" color="red" title="Reset Data"
          class="mr-4" />
      </div>
      <div class="dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden">
        <codemirror v-model="jsonInput" placeholder="Enter your data line by line" @update="generateClasses"
          :style="{ height: '600px', borderRadius: '5px', overflow: 'hidden' }" :autofocus="true"
          :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady" />
      </div>
    </div>

    <div class="w-1/2">

      <div class="flex justify-between items-center mb-2">
        <InputLabel class="text-md font-medium">Wrapper Apex Class</InputLabel>
        <SVGIconButton @click="copyData('MainClass')" :icon="CopyIcon" :isSquare="false" color="green"
          title="Copy Main Wrapper Class" />
      </div>
      <div class="dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden">
        <codemirror v-model="mainClassOutput" placeholder="Enter your data line by line"
          :style="{ height: '300px', borderRadius: '5px', overflow: 'hidden' }" :autofocus="true"
          :indent-with-tab="true" :tab-size="2" :extensions="outputext" @ready="handleReady" />
      </div>

      <div>

        <div class="flex justify-between items-center mb-2 mt-4">
          <InputLabel class="text-md font-medium">Test Class</InputLabel>
          <SVGIconButton @click="copyData('TestClass')" :icon="CopyIcon" :isSquare="false" color="green"
            title="Copy Test Class" />
        </div>
        <div class="dark:border-gray-700 dark:shadow-xl dark:border rounded-lg overflow-hidden">
          <codemirror v-model="testClassOutput" placeholder="Enter your data line by line"
            :style="{ height: '235px', borderRadius: '5px', overflow: 'hidden' }" :autofocus="true"
            :indent-with-tab="true" :tab-size="2" :extensions="outputext" @ready="handleReady" />
        </div>
      </div>
    </div>
  </div>

</template>
