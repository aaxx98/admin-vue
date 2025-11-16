<template>
  <label class="inline-flex items-center">
    <input
      v-bind="$attrs"
      type="checkbox"
      :checked="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
      :disabled="disabled"
      :class="[
        'form-checkbox h-4 w-4 accent-indigo-500 rounded border-gray-300',
        $attrs.class,
      ]"
    />
    <span class="ml-2"><slot /></span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: boolean;
  disabled?: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);
</script>
