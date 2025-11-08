<script setup lang="ts">
import UiButton from "../ui/UiButton.vue";
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">Buttons</h2>
    <section>
      <div class="flex gap-4 flex-wrap mb-6">
        <UiButton type="primary">저장</UiButton>
        <UiButton type="secondary">취소</UiButton>
        <UiButton type="ghost">더보기</UiButton>
        <UiButton type="danger">삭제</UiButton>
        <UiButton type="primary" :disabled="true">비활성</UiButton>
      </div>
      <div class="flex gap-4 flex-wrap mb-6 items-center">
        <UiButton type="primary" rounded="none">None</UiButton>
        <UiButton type="primary" rounded="sm">Small</UiButton>
        <UiButton type="primary" rounded="md">Medium</UiButton>
        <UiButton type="primary" rounded="lg">Large</UiButton>
        <UiButton type="primary" rounded="full">Full</UiButton>
      </div>
      <div class="flex gap-4 flex-wrap mb-6 items-center">
        <UiButton type="primary" size="sm">Small</UiButton>
        <UiButton type="primary" size="md">Medium</UiButton>
        <UiButton type="primary" size="lg">Large</UiButton>
      </div>
    </section>
  </section>
</template>
