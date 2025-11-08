<template>
  <button
    :class="[
      baseClass,
      sizeClasses[size || 'md'],
      typeClasses[type || 'primary'],
      roundedClasses[rounded || 'md'],
      disabled ? 'opacity-50 cursor-not-allowed' : '',
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  disabled?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["click"]);

const baseClass =
  "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2";

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const roundedClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const typeClasses = {
  primary: "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-400",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300",
  ghost:
    "bg-transparent text-indigo-500 hover:bg-indigo-100 focus:ring-indigo-200",
  danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
};
</script>
