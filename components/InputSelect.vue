<template>

    <div class="flex min-w-fit justify-end"><span data-slot="control"
            class="group relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:has-[[data-focus]]:ring-2 sm:after:has-[[data-focus]]:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none">
            <select ref="input"
                class="bg-gray-50 relative block w-full appearance-none rounded-lg py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] pl-[calc(theme(spacing[3.5])-1px)] pr-[calc(theme(spacing.10)-1px)] sm:pl-[calc(theme(spacing.3)-1px)] sm:pr-[calc(theme(spacing.9)-1px)] [&amp;_optgroup]:font-semibold text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20  dark:bg-white/5 dark:*:bg-zinc-800 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-600 data-[invalid]:data-[hover]:dark:border-red-600 data-[disabled]:border-zinc-950/20 data-[disabled]:opacity-100 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]"
                :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
                <!-- <option :value="getOptionValue(option)" v-for="option in props.options" :key="getOptionValue(option)">{{
                    getOptionLabel(option) }}</option> -->
                <slot></slot>

            </select><span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><svg
                    class="size-5 stroke-zinc-500 group-has-[[data-disabled]]:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]"
                    viewBox="0 0 16 16" aria-hidden="true" fill="none">
                    <path d="M5.75 10.75L8 13L10.25 10.75" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    <path d="M10.25 5.25L8 3L5.75 5.25" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg></span></span></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>