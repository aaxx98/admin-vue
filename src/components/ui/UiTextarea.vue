<template>
  <textarea
    v-bind="$attrs"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :placeholder="placeholder"
    :class="[computedClass, $attrs.class]"
    :disabled="disabled"
  ></textarea>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  resize?: "none";
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
  const resize = props.resize ? "resize-none" : "";
  const disabledClass = props.disabled ? "opacity-50 cursor-not-allowed" : "";
  return [base, sizeClass, resize, disabledClass].join(" ");
});
</script>
