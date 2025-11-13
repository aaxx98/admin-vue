<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-black/20 z-50"
    @click="closeModal"
  >
    <div class="bg-white rounded-2xl shadow-lg p-6 max-w-[90%]" @click.stop>
      <!-- 제목 -->
      <h2 v-if="title" class="text-lg font-semibold mb-4">{{ title }}</h2>

      <!-- 내용 -->
      <div class="mb-6">
        <slot />
      </div>

      <!-- 버튼 -->
      <div class="flex justify-end space-x-2">
        <UiButton
          type="secondary"
          v-if="showCancel"
          class="px-4 py-2"
          @click="$emit('cancel')"
        >
          {{ cancelText }}
        </UiButton>
        <UiButton
          type="primary"
          v-if="showConfirm"
          class="px-4 py-2"
          @click="$emit('confirm')"
        >
          {{ confirmText }}
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiButton from "./UiButton.vue";

const props = defineProps({
  visible: { type: Boolean, required: true },
  title: { type: String, default: "" },
  showCancel: { type: Boolean, default: true },
  showConfirm: { type: Boolean, default: true },
  cancelText: { type: String, default: "취소" },
  confirmText: { type: String, default: "확인" },
});

const emit = defineEmits(["cancel", "confirm", "close"]);

const closeModal = () => {
  emit("close");
};
</script>
