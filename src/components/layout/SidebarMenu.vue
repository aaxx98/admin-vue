<template>
  <nav class="flex flex-col p-4 space-y-2">
    <router-link
      v-for="item in menuItems"
      :key="item.name"
      :to="item.path"
      class="px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
      active-class="bg-blue-100 font-semibold text-blue-600"
    >
      {{ item.name }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

export interface MenuItem {
  name: string;
  path: string;
}

const props = defineProps<{
  menuItems: MenuItem[];
}>();
</script>
