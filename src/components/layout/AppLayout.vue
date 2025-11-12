<!-- AppLayout.vue -->
<template>
  <div class="flex flex-col h-screen bg-gray-50">
    <header class="h-16 bg-white shadow flex items-center justify-between px-6">
      <Logo :title="title" />
      <UserInfo :user="currentUser" />
    </header>

    <div class="flex flex-1 overflow-hidden">
      <aside class="w-64 bg-white border-r shadow-sm overflow-y-auto">
        <SidebarMenu :menuItems="menuItems" />
      </aside>

      <main class="flex-1 overflow-y-auto p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/components/layout/Logo.vue";
import UserInfo from "@/components/layout/UserInfo.vue";
import SidebarMenu, { MenuItem } from "@/components/layout/SidebarMenu.vue";

const props = defineProps<{
  title: String;
  menuItems: MenuItem[];
}>();

const currentUser = {
  name: "Hyejin",
  avatar: "/avatar.png",
};
</script>
