<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
    icon: '',
    color: {
        type: String,
        default: '', // You can set a default color if needed
    },
    isSquare: false,
});
</script>

<template>
    <button :type="type"
        class="inline-flex items-center p-2 border rounded-full shadow font-semibold text-xs focus:outline-none disabled:opacity-25 transition ease-in-out duration-300"
        :class="{
            'bg-rose-100 hover:bg-rose-200 border-rose-200 dark:bg-rose-700 dark:hover:bg-rose-600 dark:border-rose-900 ': color == 'red',
            'bg-green-100 hover:bg-green-200 border-green-200 dark:bg-green-700 dark:hover:bg-green-600 dark:border-green-900 ': color == 'green',
            'bg-blue-100 hover:bg-blue-200 border-blue-200 dark:bg-blue-700 dark:hover:bg-blue-600 dark:border-blue-900 ': color == 'blue',
            'bg-gray-100 hover:bg-gray-200 border-gray-200 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:border-gray-800 ': color == 'gray',
            '!rounded-md': isSquare,
        }">
        <component class="w-5 h-5 stroke-2 transition duration-75" :is="icon" :class="{
            'text-red-600 hover:text-red-700 dark:text-red-100': color == 'red',
            'text-teal-600 hover:text-teal-700 dark:text-teal-100': color == 'green',
            'text-blue-600 hover:text-blue-700 dark:text-blue-100': color == 'blue',
            'text-gray-600 hover:text-gray-700 dark:text-gray-100': color == 'gray',
        }"></component>
        <slot />
    </button>
</template>
