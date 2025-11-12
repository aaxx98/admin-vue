<template>
  <div :class="computedClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: string;
}

const props = defineProps<Props>();

const computedClass = computed(() => {
  const sizeClass = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  }[props.size || "base"];

  const weightClass = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }[props.weight || "normal"];

  const colorClass = props.color || "text-gray-800";

  return `${sizeClass} ${weightClass} ${colorClass}`;
});
</script>
