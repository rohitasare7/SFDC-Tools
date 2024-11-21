<script setup lang="ts">
// @ts-nocheck
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { nextTick, onMounted, onUnmounted, ref } from "vue";
import SVGIconButton from "./SVGIconButton.vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
    searchTable: String,
    searchQuery: String,
    routePath: String,
    isIcon: {
        type: Boolean,
        default: false
    },
    searchParams: Object
});

const isAppleOS = () => {
    const platform = navigator?.userAgentData?.platform || navigator?.platform || "unknown";
    return /(Mac|iPhone|iPod|iPad)/i.test(platform);
}

const keyboardShortcut = isAppleOS() ? "⌘/" : "Ctrl+/";
const isOpen = ref(false);

const onKeyDown = (event: any) => {
    if (isOpen.value) return;

    if ((event.metaKey || event.ctrlKey) && event.key === '/') {
        isOpen.value = true;
    }
};

const results = ref([]);
const resultsRefs = ref([]);
const selectedIndex = ref(0);

//const debouncedGetUserInfo = debounce(loadUsers, 500);
const search = debounce(async (term: string) => {
    const data = await getSupabaseData(term, props?.searchParams);
    results.value = data;
    await nextTick();
    resultsRefs.value = [];
}, 250);

const navigateResults = (event: any) => {
    switch (event.code) {
        case 'ArrowDown':
            if (selectedIndex.value === results.value.length - 1) {
                selectedIndex.value = 0;
            } else {
                selectedIndex.value += 1;
            }
            break;
        case 'ArrowUp':
            if (selectedIndex.value === 0) {
                selectedIndex.value = results.value.length - 1;
            } else {
                selectedIndex.value -= 1;
            }
            break;
    }
    resultsRefs.value[selectedIndex.value]?.scrollIntoView(false);
}

const onTermKeydown = (event: any) => {
    if (['ArrowUp', 'ArrowDown'].includes(event.code)) {
        event.preventDefault();
    }
}

const onSubmit = () => {
    if (results.value[selectedIndex.value]) {
        window.location = results.value[selectedIndex.value].url;
    }
}

const selectResult = (result: any) => {
    fetchRecord(result.id);
};

const router = useRouter();
const route = useRoute();

// fetch Record
const fetchRecord = async (recId: number) => {
    if (recId == route.params.id) {
        isOpen.value = false;
        addToast('Already on the same record, please refresh if any error occured.', 'Success');
    }
    else {
        router.push(`/${props.routePath}/${recId}`); // /tools/executeApex/
    }
};
/* 
* sample params 
paramObj = {
        table: 'tool_executeApex',
        fields: 'id,name',
        filter: {
            compareTo: 'user',
            CompareValue: userData.value?.id,
        },
        like: {
            searchColumn: 'name',
        }
    };
*/
const getSupabaseData = async (searchTerm: string, paramObj: any) => {
    console.log('search params --> ' + JSON.stringify(paramObj));
    if (!paramObj) {
        addToast('No user found for searching record.', 'Error')
        return;
    }
    const params = {
        table: paramObj?.table, //'tool_executeApex',
        fields: paramObj?.fields,
        filter: paramObj?.filter,
        like: {
            searchColumn: paramObj?.like?.searchColumn,
            searchTerm: searchTerm,
        },
        orStatement: paramObj?.orStatement
    };

    const resp = await hitsupabaseAPI(params);
    // console.log('hitsupabaseAPI resp --> ' + JSON.stringify(resp));
    if (resp.length > 0) {
        //return results
        return resp;
    }
    else {
        return [];
    }
}

onMounted(() => {
    window.addEventListener('keydown', onKeyDown);
    //search(); on load fetch all data
});
onUnmounted(() => window.removeEventListener('keydown', onKeyDown));

</script>

<template>

    <button @click="isOpen = true" v-bind="$attrs" v-if="!isIcon"
        class="flex items-center space-x-2 border border-gray-900/10 px-3 py-1.5 hover:border-gray-300 focus:outline-none focus:border-gray-300 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-gray-700 dark:hover:bg-gray-700/70 dark:border-gray-600 hover:shadow-md transition duration-300 ease-in-out">

        <MagnifyingGlassIcon
            class="flex-none w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        <span class="text-sm text-gray-500 dark:text-gray-400 flex-1 text-left" :class="{}">{{ props.searchQuery ?
            props.searchQuery :
            'Search...' }}</span>
        <span class="flex-none text-xs font-semibold text-gray-500 dark:text-gray-400">{{ keyboardShortcut }}</span>
    </button>

    <SVGIconButton :icon="MagnifyingGlassIcon" :color="'blue'" @click="isOpen = true" v-bind="$attrs" v-else>

    </SVGIconButton>

    <TransitionRoot :show="isOpen" as="template">
        <Dialog @keydown="navigateResults" class="fixed inset-0 z-50 flex justify-center items-start" :open="isOpen"
            @close="isOpen = false">
            <TransitionChild enter="duration-200 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0" as="template">
                <DialogOverlay class="fixed inset-0 bg-black bg-opacity-70"></DialogOverlay>
            </TransitionChild>

            <TransitionChild enter="duration-200 ease-out" enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95" as="template">
                <div
                    class="flex flex-col overflow-hidden z-0 w-full max-w-2xl bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-lg mx-4 max-h-[80vh] mt-[10vh] relative shadow-xl">
                    <form @submit.prevent="onSubmit" class="relative flex items-center" action="#">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-700 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input @keydown="onTermKeydown"
                            @input="(e) => search((e.target as HTMLInputElement)?.value || '')"
                            class="w-full py-4 pl-12 border-b border-gray-100 focus:border-gray-300 outline-none focus:outline-none focus:ring-0 placeholder-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                            type="text" placeholder="Search...">

                        <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                            <button @click="isOpen = false"
                                class="flex items-center p-1.5 uppercase font-semibold tracking-wider text-gray-700 rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 text-xs bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700/80"
                                type="button">Esc
                            </button>
                        </div>
                    </form>

                    <div class="overflow-auto">
                        <ul v-if="results.length > 0" class="divide-y divide-gray-100 dark:divide-gray-700">
                            <li v-for="(item, index) in results" :key="index" :ref="el => { resultsRefs[index] = el }"
                                :class="selectedIndex === index ? 'bg-gray-100 dark:bg-gray-700' : ''"
                                @mousemove="selectedIndex = index" @click="selectResult(item)"
                                class="flex items-center px-4 py-2.5 relative cursor-pointer">

                                <div class="ml-3">
                                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                                        {{ item.key ? item.key : item.name }}
                                    </div>
                                    <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                        {{ item.id }}
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <p v-if="results.length === 0" class="p-10 text-lg text-center text-gray-500 ">
                            No Results...
                        </p>
                    </div>
                </div>
            </TransitionChild>
        </Dialog>
    </TransitionRoot>
</template>
