<script setup lang="ts">
import { defineProps } from 'vue';
import { DocumentDuplicateIcon } from '@heroicons/vue/24/outline';

// import SVGIconButton from './SVGIconButton.vue';
import IconButton from './IconButton.vue';

const props = defineProps(['copyValue']);
// const buttonLabel = ref('');

const copyToClipboardMain = () => {
    copyToClipboard(props.copyValue, true);
}

</script>
<template>
    <IconButton :icon="DocumentDuplicateIcon" :isSquare="false" :color="'blue'" @click="copyToClipboardMain"
        title="Copy to Clipboard">
        <slot />
    </IconButton>
</template>
