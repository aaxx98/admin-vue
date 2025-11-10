<template>
  <button
    type="button"
    :class="[
      'w-12 h-6 rounded-full transition-colors',
      modelValue ? 'bg-indigo-500' : 'bg-gray-300',
    ]"
    @click="toggle"
  >
    <span
      :class="[
        'block w-5 h-5 bg-white rounded-full shadow transform transition-transform',
        modelValue ? 'translate-x-6' : 'translate-x-1',
      ]"
    ></span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(["update:modelValue"]);

function toggle() {
  emit("update:modelValue", !props.modelValue);
}
</script>
