<template>
  <div class="mb-4">
    <h2 class="text-2xl font-semibold">{{ title }}</h2>
    <span class="text-base" v-if="info">
      다음 내용을 참고하세요.
      <a :href="link" target="_blank" class="text-blue-500 underline">
        {{ info }}
      </a>
    </span>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  link: String,
  info: String,
});
</script>
