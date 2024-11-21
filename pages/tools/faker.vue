<script setup>
useSeoMeta({
  title: 'Random Data Generator',
  ogTitle: 'Random Data Generator',
  description: 'Random Data Generator creates realistic mock data instantly, streamlining testing and development workflows.',
  ogDescription: 'Random Data Generator creates realistic mock data instantly, streamlining testing and development workflows.',
});

import { ref, computed, onMounted } from 'vue';
import { faker, allFakers, allLocales } from '@faker-js/faker';
import { LOCALE_NAMES } from '~/utils/data/localeConstants';
import RandExp from 'randexp';
import SaveIcon from '../../components/icons/SaveIcon.vue';

const localeOptions = computed(() => {
  const options = {};
  for (const locale in allLocales) {
    const fakerInstance = allFakers[locale];
    const localeName = LOCALE_NAMES[locale] || locale;
    options[locale] = { name: localeName, fakerInstance };
  }
  return options;
});

// Added exception check to avoid data issues
const getValue = (method, params = []) => {
  try {
    const parts = method.split('.');
    let result = fakerInstance.value;
    for (const part of parts) {
      result = result[part];
    }
    return result(...params);
  } catch (error) {
    console.error("Error generating random value:", error.message);
    //addToast('Error : '+ error.message.replace("If you think this is a bug, please report it at: https://github.com/faker-js/faker", ""),'Error');
    return 'N/A'; // Return a placeholder value
  }
};

const selectedLocale = ref('en_IN');

const fakerInstance = computed(() => {
  if (selectedLocale.value) {
    if (selectedLocale.value == 'base') {
      selectedLocale.value = 'en';
    }
    return localeOptions.value[selectedLocale.value].fakerInstance;
  }
  return faker;
});

// Identity Section
// Generate a random string based on the provided regular expression pattern
const generateRandomString = (pattern) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === 'A') {
      // Append a random uppercase letter
      result += characters.charAt(Math.floor(Math.random() * 26));
    } else if (pattern[i] === '0') {
      // Append a random digit
      result += characters.charAt(Math.floor(Math.random() * 36) + 26);
    } else {
      // Append the character from the pattern
      result += pattern[i];
    }
  }
  return result;
};

const randomData = ref({});
const selectedGender = ref('male');

const updateRandomData = () => {
  //Define Constants
  const gender = getValue('person.sex');
  const firstName = getValue('person.firstName', [gender]);//fakerInstance.value.person.firstName();
  const lastName = getValue('person.lastName');//fakerInstance.value.person.lastName();
  const middleName = getValue('person.firstName', ['male']);
  const companyAddress = `${getValue('location.buildingNumber')}, ${getValue('location.city')}, ${getValue('location.state')}`
  const email = getValue('internet.email', [{ firstName: firstName, lastName: lastName, provider: 'test.example.com' }]);

  const licenseState = new RandExp(/^[A-Z]{2}$/).gen();
  const licenseRng = new RandExp(/^[1-9]{4}$/).gen();
  const randomnumber = Math.floor(Math.random() * 10)
  const today = new Date();
  const licenseYear = today.getFullYear() - randomnumber;

  const data = {
    person: {
      fullName: `${firstName} ${middleName} ${lastName}`,
      firstName,
      lastName,
      middleName,
      //gender,
      email,
      phone: getValue('phone.number', [{ style: 'national' }]),
    },
    address: {
      buildingNumber: getValue('location.secondaryAddress'),
      streetAddress: getValue('location.streetAddress'), //fakerInstance.value.location.streetAddress(),
      city: getValue('location.city'), //fakerInstance.value.location.city(),
      state: getValue('location.state'),
      zipCode: getValue('location.zipCode'),
      gpsCoordinate: getValue('location.nearbyGPSCoordinate').toString(),
    },
    personalIdentity: {
      panCard: new RandExp(/[A-Z]{5}[0-9]{4}[A-Z]{1}/).gen(),
      voterId: new RandExp(/[A-Z]{3}[0-9]{6}/).gen(),
      passportNumber: new RandExp(/^[A-Z][0-9]{7}$/).gen(),
      aadharCard: new RandExp(/^[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$/).gen(),
      socialSecurityNumber: new RandExp(/[1-9]{3}-[1-9]{2}-[1-9]{4}/).gen(),
      drivingLicense: licenseState + licenseYear + '000' + licenseRng,
    },
    company: {
      jobType: getValue('person.jobType'),
      jobProfile: getValue('person.jobTitle'),
      companyName: getValue('company.name'),//fakerInstance.value.company.name(),
      companyAddress,//fakerInstance.value.company.catchPhrase(),
      ZipCode: getValue('location.zipCode'),
    },

    // Add more items as needed
  }
  randomData.value = data;
}

const formatDisplayName = (text) => {
  const formattedText = text.replace(/([a-z])([A-Z])/g, '$1 $2')
  return formattedText.charAt(0).toUpperCase() + formattedText.slice(1)
}

//Load Initial Data
onMounted(() => {


  const storedLocale = localStorage.getItem('selectedLocale');
  if (storedLocale && storedLocale in localeOptions.value) {
    selectedLocale.value = storedLocale;
  } else {
    selectedLocale.value = 'en_IN'; // Default value if not found in localStorage
  }

  updateRandomData();
  addToast('Data has been loaded');

}
);

// Method to save the selected locale to browser storage
const saveLocaleToStorage = () => {
  localStorage.setItem('selectedLocale', selectedLocale.value);
  addToast('Locale saved sucessfully.');
};


</script>

<template>


  <!-- Top Container Starts-->
  <div class="container mx-auto p-4">
    <PageTitle class="text-2xl font-bold ">Random Data Generator</PageTitle>
    <InputLabel class="text-normal font-thin ">Generates random data for your Unit Testing</InputLabel>
    <div class="flex mt-8 justify-start items-center">
      <InputLabel value="Select Locale" class="mx-0 mr-2 md:mr-4" />
      <select id="locale-select" v-model="selectedLocale" @change="updateRandomData"
        class="w-56 md:w-72 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 !outline-none">
        <option value="" disabled>Select a locale</option>
        <option v-for="(option, locale) in localeOptions" :key="locale" :value="locale">
          {{ option.name }}
        </option>
      </select>
      <SVGIconButton @click="saveLocaleToStorage" :icon="SaveIcon" :isSquare="false" color="blue" title="Save Locale"
        class="ml-4" />
      <PrimaryButton @click="updateRandomData" class="ml-4">
        Generate Data
      </PrimaryButton>
    </div>
  </div>
  <!-- Top Container Ends-->

  <div class="container mx-auto pb-4">

    <!-- Main Random Data Container Starts -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-0 mt-2">
      <div v-for="(item, key) in randomData" :key="key"
        class="p-6 bg-gray-100 border border-gray-200 rounded-lg dark:shadow-2xl dark:bg-gray-900/30 dark:border-gray-700">
        <h3 class="text-lg font-bold mb-2 text-gray-700 dark:text-gray-300">{{ formatDisplayName(key) }}</h3>
        <div v-for="(subItem, subKey) in item" :key="subKey" class="text-gray-700">
          <!-- <template v-if="subKey == 'fullName'">
          </template> -->
          <InputLabel :value="formatDisplayName(subKey)" class="my-1 text-sm" />
          <TextInputCopyBtn :value="subItem" :displayCopyBtn="true" class="mb-4 w-full py-1.5" />
        </div>
      </div>
    </div>

  </div>

</template>