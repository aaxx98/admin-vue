<script setup lang="ts">
import UiText from "../ui/UiText.vue";
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
      <UiText size="3xl" weight="semibold">Heading 1 - 3xl SemiBold</UiText>
      <UiText size="2xl" weight="semibold">Heading 2 - 2xl SemiBold</UiText>
      <UiText size="2xl" weight="medium">Heading 3 - 2xl Medium</UiText>
      <UiText size="xl">Body Large - xl Regular</UiText>
      <UiText size="base" weight="bold">Body Base - base Bold</UiText>
      <UiText size="base" weight="semibold">Body Base - base SemiBold</UiText>
      <UiText size="base" weight="medium">Body Base - base Medium</UiText>
      <UiText size="base">Body Base - base Regular</UiText>
      <UiText size="sm" color="text-gray-600">Caption - sm Gray</UiText>

      <UiText size="sm" color="text-indigo-600"
        >Body Base - sm indigo-600</UiText
      >
      <UiText size="sm" color="text-emerald-600"
        >Body Base - sm emerald-600</UiText
      >
      <UiText size="sm" color="text-red-600">Body Base - sm red-600</UiText>
    </div>
  </section>
</template>
