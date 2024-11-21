<script setup>
import { ref, watch } from "vue";
import Combobox from "./Combobox.vue";

const emit = defineEmits();

const props = defineProps({
    sfdcAuthUser: { type: Object, default: () => ({ value: '', label: '' }) },
    orgData: Object,
});

const user = ref();
const loadUser = ref(props.sfdcAuthUser);

async function loadUsers(query, setOptions) {
    if (query.length >= 4) {
        try {
            //const response = await fetch(route('search.users', { key: query }));
            const data = await hitAPI('User_QueryByName', query);
            const options = data.records.map(user => {
                return {
                    value: user.Id,
                    label: user.Name,
                };
            });
            // Pass the options to setOptions
            setOptions(options);
        } catch (error) {
            console.error('Error loading users:', error);
        }
    }
}

//const debouncedLoadUsers = debounce(loadUsers, 500);
const debouncedGetUserInfo = debounce(loadUsers, 500);

function createUser(option, setSelected) {
    console.log('do nothing');
}

watch(loadUser, () => {
    // You can add additional logic here if needed
    //console.log('new data --> ' + JSON.stringify(loadUser.value));
    if (!loadUser.value.value) {
        console.log('user not found');
    }
    else {
        emit('userDataChanged', loadUser.value);
    }
});

// Main API Trigger Method
const hitAPI = async (sfdcAction, recordId) => {
    // const instance_url = props.orgData?.instance_url ?? '';
    // const access_token = props.orgData?.access_token ?? '';
    // if (!instance_url || !access_token) {
    //     addToast('Please select org to continue or refresh page', 'Error');
    //     return;
    // }
    try {
        //const { data } = await useFetch<SFDCResponse>('/api/sfdc/hitAPI', {
        const data = await $fetch('/api/sfdc/hitSFAPI', {
            query: { sfdcAction, recordId },
        });
        //console.log('data for : ' + sfdcAction + ' --> ' + JSON.stringify(data));
        if (data?.success) {
            //When Status == 204 but no response body - scenario apex log body
            if (!data.response) {
                //addToast('No response received but operation was successful', 'Success');
                return 'apiSuccessNoResponse';
            }
            //return response to be handled
            return data.response;
        }
        //Handle success == false 
        else {
            addToast('Auhentication failed, please re-authenticate.', 'Error');
            if (data.response?.errorCode == 'INVALID_SESSION_ID') {
                return 'authError';
            }
            else {
                return 'unknownError';
            }
        }
    }
    catch (error) {
        console.log('error --> ' + error);
        addToast(error, 'Error');
    }
};
</script>

<template>
    <Combobox :load-options="debouncedGetUserInfo" :create-option="createUser" v-model="loadUser" />

    <!-- <Combobox
    :options="options"
    v-model="user"
  /> -->
</template>
