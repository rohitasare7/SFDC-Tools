<script setup>
import { defineEmits } from 'vue';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/vue/24/solid';


import Dropdown from "~/components/Dropdown.vue";
import DropdownLink from "~/components/DropdownLink.vue";
const userData = await useFetch('/api/userData');

const emit = defineEmits();
const toggleSidebar = () => {
    emit('toggleSidebar');
    console.log('inside toggleSidebar');
};

//console.log('userData --> '+JSON.stringify(userData.data.value));
</script>
<template>

    <nav class="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3 max-w-7xl mx-auto">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <button id="toggleSidebarMobile" @click="toggleSidebar"
                        class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <Bars3CenterLeftIcon class="w-6 h-6" />
                        <XMarkIcon class="hidden w-6 h-6" />
                    </button>
                </div>
                <!-- Logo -->
                <div class="flex items-center">

                    <NuxtLink href="/" class="ml-8">
                        <logo
                            class="block h-9 w-auto stroke-orange-600 dark:stroke-gray-100 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full p-0.5" />
                    </NuxtLink>
                </div>
                <!-- Nav Items -->
                <div class="flex items-center">
                    <ToggleLightDarkMode />
                    <!-- Profile -->
                    <!-- <div class="ml-2 sm:ml-4 relative">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <button v-if="userData.data.value?.user?.image"
                                    class="flex text-sm rounded-full transition shadow-2xl">
                                    <img class="h-8 w-8 rounded-full object-cover shadow-2xl"
                                        :src="userData.data.value?.user?.image">
                                </button>

                                <span v-else class="inline-flex rounded-md">
                                    <button type="button"
                                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150">
                                        {{ userData.data.value?.user?.name }}

                                        <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </span>
                            </template>

                            <template #content>
                               
                                <div v-if="userData.data.value?.user?.name"
                                    class="block px-4 py-2 text-xs text-gray-400">
                                    {{ userData.data.value?.user?.name }}
                                </div>

                                <DropdownLink href="/settings/orgs">
                                    Settings
                                </DropdownLink>
                                <div class="border-t border-gray-200 dark:border-gray-600" />
                                
                                <ClientOnly>
                                    <DropdownLink as="button">
                                        Log Out
                                    </DropdownLink>
                                </ClientOnly>
                            </template>
                        </Dropdown>
                    </div> -->
                </div>
            </div>
        </div>
    </nav>
</template>
