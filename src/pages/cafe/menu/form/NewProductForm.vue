<template>
  <div class="space-y-4">
    <UiInput
      v-model="form.name"
      placeholder="상품명"
      label="상품명"
      size="md"
      state="default"
      required
    />

    <UiInput
      v-model="form.category"
      placeholder="카테고리"
      label="카테고리"
      size="md"
      state="default"
      required
    />

    <UiInput
      v-model="form.price"
      placeholder="1000"
      label="가격"
      type="number"
      size="md"
      state="default"
      required
    />
    <UiCheckbox v-model="form.stockManage"> 재고 관리 </UiCheckbox>
  </div>
</template>
<script setup lang="ts">
import UiCheckbox from "@/components/ui/UiCheckbox.vue";
import UiInput from "@/components/ui/UiInput.vue";
import { reactive } from "vue";

const form = reactive({
  name: "",
  category: "",
  price: "",
  stockManage: false,
});

const setFormValues = (data: Partial<typeof form> = {}) => {
  form.name = data.name || "";
  form.category = data.category || "";
  form.price = data.price?.toString() || "";
  form.stockManage = Boolean(data.stockManage);
};

const resetForm = () => {
  setFormValues();
};

defineExpose({ form, setFormValues, resetForm });
</script>
