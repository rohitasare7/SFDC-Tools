<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import { computed } from "vue";
const route = useRoute();

const props = defineProps({
    item: Object,
});

const hasActiveChild = computed(() => {
    function hasActiveItem(items) {
        return items.some(item => item.active || hasActiveItem(item.children));
    }
    return hasActiveItem(props.item.children);
});

const isActiveItem = computed(() => {
    // Check if the current item is active
    if (props.item.active) {
        console.log('active');
        return true;
    }

    // Check if any child has the current route
    function hasActiveChild(items) {
        return items.some((item) => item.route && item.route == route.path);
    }

    return hasActiveChild(props.item.children);
});

</script>
<template>
    <ClientOnly>
        <NuxtLink v-if="!item.children.length" :href="item.route"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition ease-out duration-100"
            :class="{ 'bg-purple-100 dark:bg-gray-700 font-semibold ': route.path == item.route }">
            <component :is="item.icon"
                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="ml-3 dark:text-white">{{ item.name }}</span>
            <span v-if="item.label"
                class="shadow-md dark:bg-purple-200 dark:border dark:border-gray-800 inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:text-gray-800">{{
                    item.label }}</span>
        </NuxtLink>

        <Disclosure v-else v-slot="{ open }" :default-open="isActiveItem">
            <DisclosureButton :class="[
                'group flex w-full items-center border-none rounded-md py-2 px-3 text-left text-sm',
                'hover:bg-gray-100 dark:hover:bg-gray-700 ',
                open ? 'font-semibold text-gray-800' : 'font-medium text-gray-700',
            ]">
                <component :class="[
                    'mr-2 h-6 w-6 shrink-0 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white',
                    open ? 'text-gray-700' : 'text-gray-500',
                ]" :is="item.icon" v-if="item.icon"></component>
                <span class="flex-1 dark:text-white">{{ item.name }}</span>
                <ChevronDownIcon :class="[
                    'h-6 w-6 shrink-0',
                    open ? '-rotate-180 text-gray-700 dark:text-gray-400' : 'text-gray-400 dark:text-gray-400',
                ]" />
            </DisclosureButton>
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-75"
                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-2">
                <!-- Child Items -->
                <DisclosurePanel class="ml-4 border-none">
                    <div v-for="child in item.children" :item="child" :key="child.label">
                        <NuxtLink :href="child.route"
                            :class="{ 'bg-purple-100 dark:bg-gray-700 font-semibold ': route.path == child.route }"
                            class="flex items-center p-2 mt-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition ease-out duration-100">
                            <component :is="child.icon" :class="{ 'text-gray-700 ': route.path == child.route }"
                                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="ml-3">{{ child.name }}</span>
                            <span v-if="child.label"
                                class="shadow-md dark:border dark:border-gray-800 inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-800">{{
                                    child.label }}</span>
                        </NuxtLink>
                    </div>
                </DisclosurePanel>
            </transition>
        </Disclosure>
    </ClientOnly>
</template>
