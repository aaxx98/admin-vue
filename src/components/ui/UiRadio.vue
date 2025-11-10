<template>
  <label class="inline-flex items-center space-x-2">
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
      :disabled="disabled"
      class="form-radio h-4 w-4 accent-indigo-500 rounded border-gray-300"
    />
    <span><slot /></span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number;
  value: string | number;
  name?: string;
  disabled?: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);
</script>
