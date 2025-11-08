<template>
  <div :class="computedClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  shadow?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg";
  border?: boolean;
  bgColor?: string; // Tailwind bg- color class
}

const props = defineProps<Props>();

const computedClass = computed(() => {
  const shadowClass = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  }[props.shadow || "md"];

  const roundedClass = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  }[props.rounded || "md"];

  const borderClass = props.border ? "border border-gray-200" : "";
  const bgClass = props.bgColor || "bg-white";
  const padding = "p-4";

  return [bgClass, shadowClass, roundedClass, borderClass, padding].join(" ");
});
</script>
