<template>
  <select
    :value="modelValue"
    @change="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :class="computedClass"
    :disabled="disabled"
  >
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  options: string[];
  modelValue?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const computedClass = computed(() => {
  const base =
    "border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400";
  const sizeClass = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }[props.size || "md"];
  const disabledClass = props.disabled ? "opacity-50 cursor-not-allowed" : "";
  return [base, sizeClass, disabledClass].join(" ");
});
</script>
