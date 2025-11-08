<script setup lang="ts">
import UiCard from "../ui/UiCard.vue";
import UiText from "../ui/UiText.vue";
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">Containers & Cards</h2>

    <section class="space-y-10">
      <!-- Grid Layout -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Cards - Grid Layout</h2>
        <div class="grid grid-cols-3 gap-6">
          <UiCard shadow="sm" rounded="md">Shadow Sm</UiCard>
          <UiCard shadow="md" rounded="md">Shadow Md</UiCard>
          <UiCard shadow="lg" rounded="md">Shadow Lg</UiCard>
        </div>
        <div class="grid grid-cols-3 gap-6 mt-6">
          <UiCard shadow="sm" rounded="md" bg-color="bg-emerald-100"
            ><UiText color="text-emerald-600">Success</UiText></UiCard
          >
          <UiCard shadow="md" rounded="md" bg-color="bg-amber-100"
            ><UiText color="text-amber-600">Warning</UiText></UiCard
          >
          <UiCard shadow="lg" rounded="md" bg-color="bg-red-100"
            ><UiText color="text-red-600">Error!</UiText></UiCard
          >
        </div>
      </div>

      <!-- Vertical / Block Layout -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Cards - Block Layout</h2>
        <div class="space-y-6">
          <UiCard shadow="md" rounded="sm" bg-color="bg-indigo-100"
            >Rounded Sm</UiCard
          >
          <UiCard shadow="md" rounded="md" bg-color="bg-indigo-100"
            >Rounded Md</UiCard
          >
          <UiCard shadow="md" rounded="lg" bg-color="bg-indigo-100"
            >Rounded Lg</UiCard
          >
        </div>
      </div>
    </section>
  </section>
</template>
