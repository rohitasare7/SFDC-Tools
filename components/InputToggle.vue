<script setup>
defineProps({
    value: String,
    isChecked: {
        type: Boolean,
        default: false,
    }
});
</script>

<template>
    <label class="relative inline-flex items-center mr-5 cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" :checked="isChecked">
        <div
            class="w-11 h-6 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        </div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" v-if="value">{{ value }}</span>
        <span v-else>
            <slot />
        </span>
    </label>
</template>
