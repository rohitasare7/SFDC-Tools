<script setup>
import { ref, computed, watch } from "vue";
import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
    modelValue: Object,
    options: {
        type: Array,
        default: () => [],
    },
    loadOptions: Function,
    createOption: Function,
});

const options = ref(props.options);
const isLoading = ref(false);

const queryOption = computed(() => {
    return query.value === ""
        ? null
        : {
            missing: true,
            label: query.value,
        };
});

let query = ref("");
watch(
    query,
    q => {
        if (props.loadOptions) {
            isLoading.value = true;
            props.loadOptions(q, results => {
                options.value = results;

                if (
                    props.modelValue &&
                    !options.value.some(o => {
                        return o.value === props.modelValue?.value;
                    })
                ) {
                    options.value.unshift(props.modelValue);
                }

                isLoading.value = false;
            });
        }
    },
    { immediate: true }
);



let filteredOptions = computed(() =>
    query.value === ""
        ? options.value
        : options.value.filter(option =>
            option.label
                .toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.value.toLowerCase().replace(/\s+/g, ""))
        )
);

function handleUpdateModelValue(selected) {
    emit("update:modelValue", selected);
}
</script>

<template>
    <Combobox by="value" :model-value="props.modelValue" @update:model-value="handleUpdateModelValue">
        <div class="relative mt-1 z-50">
            <div class="relative w-full cursor-default text-left sm:text-sm">
                <ComboboxInput
                    class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm w-full py-2 px-2 border outline-indigo-500 dark:outline-none"
                    :displayValue="option => option.label" @change="query = $event.target.value" />
                <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </ComboboxButton>
            </div>
            <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                @after-leave="query = ''">
                <ComboboxOptions
                    class="absolute z-[9999] mt-1 max-h-36 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <!-- {{ query.length }} -->
                    <div v-if="filteredOptions.length === 0 &&
                        !isLoading &&
                        !queryOption &&
                        !props.createOption
                    " class="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                    </div>
                    <div v-if="query.length < 4" class="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Please enter more than 4 characters
                    </div>
                    <div v-if="isLoading && query.length >= 4"
                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Loading...
                    </div>

                    <!-- <div v-else>test</div> -->

                    <template v-if="!isLoading">
                        <ComboboxOption v-if="queryOption && !filteredOptions.length && props.createOption
                        " as="template" :value="queryOption" v-slot="{ active }">
                            <li class="relative cursor-pointer select-none py-2 pl-10 pr-4" :class="{
                                'bg-indigo-600 text-white': active,
                                'text-gray-900': !active,
                            }">
                                No User Found
                            </li>
                        </ComboboxOption>
                        <ComboboxOption v-for="option in filteredOptions" as="template" :key="option.value"
                            :value="option" v-slot="{ selected, active }">
                            <li class="relative cursor-pointer select-none py-2 pl-10 pr-4" :class="{
                                'bg-indigo-600 text-white': active,
                                'text-gray-900': !active,
                            }">
                                <span class="block truncate"
                                    :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                    {{ option.label }}
                                </span>
                                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                                    :class="{ 'text-white': active, 'text-indigo-600': !active }">
                                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                </span>
                            </li>
                        </ComboboxOption>
                    </template>
                </ComboboxOptions>
            </TransitionRoot>
        </div>
    </Combobox>
</template>
