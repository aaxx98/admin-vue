<script setup lang="ts">
import InfoHeader from "./InfoHeader.vue";
</script>

<template>
  <section>
    <InfoHeader
      title="Typography"
      link="https://tailwindcss.com/docs/font-size"
      info="tailwindcss: font-size"
    />
    <div class="space-y-2">
      <p class="text-4xl font-bold">Heading 1 - 4xl Bold</p>
      <p class="text-3xl font-semibold">Heading 2 - 3xl SemiBold</p>
      <p class="text-2xl font-medium">Heading 3 - 2xl Medium</p>
      <p class="text-xl">Body Large - xl Regular</p>
      <p class="text-base">Body Base - base Regular</p>
      <p class="text-sm text-gray-600">Caption - sm Gray</p>
    </div>
  </section>
</template>
