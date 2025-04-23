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
  <div class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 font-Figtree">
    <!-- Mobile Sidebar Toggle (uncomment if needed) -->
    <!-- <Navbar @toggle-sidebar="toggleSidebar" /> -->

    <div class="flex flex-col lg:flex-row flex-1">
      <Sidebar :isSidebarVisible="isSidebarVisible" class="lg:fixed lg:inset-y-0 lg:left-0" />

      <!-- Main Content Area -->
      <div id="main-content" class="flex-1 lg:ml-64 transition-all duration-300">
        <main class="z-10 bg-white dark:bg-gray-800 rounded-lg p-6 m-6 border dark:border-gray-700">
          <slot />
        </main>


      </div>
    </div>
    <Footer class="z-10 bg-white dark:bg-gray-800 rounded-lg p-6 border dark:border-gray-700" />
  </div>

</template>