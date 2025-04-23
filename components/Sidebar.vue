<script setup>
import menuItems from "~/utils/data/menu";
//import SidebarNavItem from "./SidebarNavItem.vue";
import SidebarNavItem from "~/components/SidebarNavItem.vue";

const props = defineProps({
    isSidebarVisible: Boolean,
});

let isBackDropOn = ref(props.isSidebarVisible);
const emit = defineEmits(['toggleSidebar']);
const toggleSidebar = () => {
    isBackDropOn = !isBackDropOn;
    emit('toggleSidebar');
};

</script>
<template>
    <aside :class="{
        'hidden lg:flex': !isSidebarVisible,
        'flex lg:flex': isSidebarVisible,
    }" id="logo-sidebar"
        class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full font-normal lg:flex transition duration-150 ease-in-out"
        aria-label="Sidebar">
        <div
            class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div
                class="flex flex-col flex-1 pt-5 pb-4 overflow-y-scroll no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                <!-- overflow-y-auto -->
                <div class="flex-1 px-3 space-y-1 bg-white  dark:bg-gray-800 ">
                    <SidebarNavItem :item="item" v-for="item in menuItems.navItems" :key="item.label" />
                </div>
            </div>
        </div>
    </aside>

    <div :class="{
        hidden: !isSidebarVisible,
        'lg:block': isSidebarVisible,
    }" class="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop" @click="toggleSidebar">
    </div>
</template>
