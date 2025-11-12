<template>
  <div class="flex flex-col">
    <label v-if="label" class="mb-1 text-sm font-medium text-gray-700">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>

    <input
      v-bind="$attrs"
      :value="modelValue"
      :required="required"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :placeholder="placeholder"
      :class="[computedClass, $attrs.class]"
      :disabled="disabled"
    />
  </div>

  <p v-if="message" :class="messageClass" class="text-sm">
    {{ message }}
  </p>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  label?: string;
  modelValue?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  state?: "default" | "valid" | "warning" | "error";
  message?: string;
  disabled?: boolean;
  required?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const stateClass = computed(() => {
  switch (props.state) {
    case "valid":
      return "border-emerald-500 focus:ring-emerald-400";
    case "warning":
      return "border-amber-500 focus:ring-amber-400";
    case "error":
      return "border-red-500 focus:ring-red-400";
    default:
      return "border-gray-300 focus:ring-indigo-400";
  }
});

const messageClass = computed(() => {
  switch (props.state) {
    case "valid":
      return "text-emerald-600";
    case "warning":
      return "text-amber-600";
    case "error":
      return "text-red-600";
    default:
      return "text-gray-500";
  }
});

const computedClass = computed(() => {
  const base = "border rounded-md px-3 py-2 focus:outline-none focus:ring-2";
  const sizeClass = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }[props.size || "md"];
  const disabledClass = props.disabled ? "opacity-50 cursor-not-allowed" : "";
  return [base, sizeClass, stateClass.value, disabledClass].join(" ");
});
</script>
