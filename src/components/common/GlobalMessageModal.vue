<template>
  <UiModal
    :visible="state.visible"
    title="알림"
    :show-cancel="false"
    :show-confirm="true"
    confirm-text="확인"
    @close="hideGlobalMessage"
    @confirm="hideGlobalMessage"
  >
    <p class="whitespace-pre-line">{{ state.message }}</p>
  </UiModal>
</template>

<script setup>
import UiModal from "../ui/UiModal.vue";
import { hideGlobalMessage, useGlobalMessage } from "@/stores/globalMessage";

const state = useGlobalMessage();
</script>
