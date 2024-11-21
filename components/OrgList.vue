<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue';
import { BookmarkIcon } from '@heroicons/vue/24/solid';
import InputLabel from '~/components/InputLabel.vue';
import IconButton from '~/components/IconButton.vue';
import type { OrgData } from '~/utils/data/types';
import { updateSessionDataAPI } from "~/utils/sessionManager";

//const { update, session } = await useSession();

// Org Data
const orgList = ref<OrgData[]>([]);
const selectedOrg = ref<OrgData | null>(null);
const emits = defineEmits(['defaultOrgSelected']);
// Define a method to fetch the Salesforce token
const fetchOrgList = async () => {
    try {
        orgList.value = fetchAllData(); // Import it this didn't work
        let defaultOrg = getDefaultOrg();
        if (orgList.value.length > 0) {
            const defaulOrg = orgList.value.find(item => item.instance_url === defaultOrg);
            if (defaulOrg) {
                selectedOrg.value = defaulOrg;
            }
            else {
                selectedOrg.value = orgList.value.length > 0 ? orgList.value[0] : null;
            }
            await saveDefaultOrg(false); //emit event only
        }
        else {
            addToast('No orgs found', 'Error');
        }
    } catch (error) {
        addToast('Error Occured while fetching data, check console', 'Error'); // Assuming addToast is defined elsewhere
        console.error('errorToastMsg', error);
    }
};

const saveDefaultOrg = async (permaSave: boolean) => {
    //await fetchOrgList();
    console.log('selectedOrg.value?.instance_url --> '+selectedOrg.value?.instance_url);
    await updateSessionDataAPI({ selectedOrg: selectedOrg.value });
    if (permaSave) {
        setDefaultOrg(selectedOrg.value?.instance_url!);
        addToast('Default org has been set.', 'Success');
    }
    else {
        emits('defaultOrgSelected', selectedOrg.value);
    }
    //idk why i wrote this below logic
    // if (session.value?.selectedOrg?.instance_url == selectedOrg.value?.instance_url) {
    //     //do nothing
    // }
    // else {
    //     await update({ selectedOrg: selectedOrg.value });
    //     console.log('org added to session');
    // }

    //addToast('Default org set successfully!','Success');
}

const setDefaultOrg = (defaultOrg: string) => {
    localStorage.setItem('default_org', defaultOrg);
}

const getDefaultOrg = () => {
    const data = localStorage.getItem('default_org');
    return data ? data : null;
};

onMounted(() => {
    fetchOrgList();
    //saveDefaultOrg(false);
});
</script>

<template>
    <div class="flex items-center justify-center" v-show="orgList.length > 0">
        <div class="flex flex-col items-center">
            <div>
                <InputLabel>Set Default Org</InputLabel>
            </div>
            <div class="relative mt-2 flex items-center justify-center">
                <div class="flex min-w-fit justify-end"><span data-slot="control"
                        class="group relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:has-[[data-focus]]:ring-2 sm:after:has-[[data-focus]]:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none">
                        <select v-model="selectedOrg" @change="saveDefaultOrg(false)"
                            class="bg-gray-50 relative block w-full appearance-none rounded-lg py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] pl-[calc(theme(spacing[3.5])-1px)] pr-[calc(theme(spacing.10)-1px)] sm:pl-[calc(theme(spacing.3)-1px)] sm:pr-[calc(theme(spacing.9)-1px)] [&amp;_optgroup]:font-semibold text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20  dark:bg-white/5 dark:*:bg-zinc-800 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-600 data-[invalid]:data-[hover]:dark:border-red-600 data-[disabled]:border-zinc-950/20 data-[disabled]:opacity-100 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]">
                            <option v-for="org in orgList" :value="org" :key="org.instance_url">
                                {{ org.instance_url }}
                            </option>
                        </select><span
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><svg
                                class="size-5 stroke-zinc-500 group-has-[[data-disabled]]:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]"
                                viewBox="0 0 16 16" aria-hidden="true" fill="none">
                                <path d="M5.75 10.75L8 13L10.25 10.75" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M10.25 5.25L8 3L5.75 5.25" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg></span></span></div>
                <!-- <select v-model="selectedOrg" @change="saveDefaultOrg(false)"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="org in orgList" :value="org" :key="org.instance_url">
                        {{ org.instance_url }}
                    </option>
                </select> -->
                <IconButton :icon="BookmarkIcon" :color="'green'" @click="saveDefaultOrg(true)" class="ml-4"
                    title="Save Default Org" />
            </div>
        </div>
    </div>
</template>
