<template>
  <div
    class="flex flex-col items-center cursor-pointer select-none"
    @click="copyColor"
  >
    <div
      :class="[
        'w-20 h-20 rounded transition-all duration-200',
        color == 'bg-gray-50' ? `${color} border` : color,
      ]"
    >
      <transition name="fade-scale">
        <span
          v-if="copied"
          class="text-xs text-white bg-green-500 px-2 py-0.5 rounded mt-1 shadow-sm"
        >
          Copied!
        </span>
      </transition>
    </div>
    <span class="mb-2 text-sm text-gray-700">{{ label }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  color: String,
  label: String,
});

const copied = ref(false);

function copyColor() {
  navigator.clipboard.writeText(props.label).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000); // 2초 후 메시지 숨김
  });
}
</script>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.2s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
