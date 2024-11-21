<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import ToastList from '~/components/ToastList.vue';
const isSidebarVisible = ref(false);

const toggleSidebar = () => {
  console.log('Inside auth layout');
  isSidebarVisible.value = !isSidebarVisible.value;
}

</script>
<template>
  <ToastList />
  <Navbar @toggle-sidebar="toggleSidebar" @clickedaa="console.log('test')" />
  <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 font-Figtree">
    <Sidebar :isSidebarVisible="isSidebarVisible" />
    <!-- Main Page Content -->
    <div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 ">
      <main
        class="z-10 bg-white dark:bg-gray-800 overflow-hidden shadow-xl rounded-lg p-8 m-10 border dark:border-gray-700">
        <slot />
      </main>
      <Footer
        class="z-10 bg-white dark:bg-gray-800 overflow-hidden shadow-xl rounded-lg p-8 m-10 border dark:border-gray-700" />
    </div>
  </div>
</template>