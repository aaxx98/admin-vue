<template>
  <div class="font-bold text-xl text-blue-600">{{ title }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: String;
}>();
</script>
