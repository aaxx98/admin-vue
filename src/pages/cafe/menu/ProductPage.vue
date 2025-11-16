<template>
  <UiText size="xl" weight="semibold" class="mb-6">
    <h1>Product Page</h1>
  </UiText>
  <div class="p-4 flex">
    <div class="flex-1">
      <UiInput
        placeholder="상품명, 카테고리 검색"
        v-model="inputStr"
        class="bg-white"
        @keyup.enter="searchProduct"
      ></UiInput>
    </div>
    <UiButton class="ml-2" @click="searchProduct">검색</UiButton>
    <UiButton type="secondary" class="ml-2" @click="reset">초기화</UiButton>
  </div>
  <div class="py-2 px-4 flex justify-end">
    <UiButton
      type="custom"
      class="bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-400"
      @click="openNew(true)"
      >상품 추가</UiButton
    >
  </div>
  <ProductList :keyword="keyword" ref="listRef" />
  <UiModal
    :visible="isOpenNew"
    title="상품 추가"
    @confirm="saveProduct"
    @cancel="openNew(false)"
    @close="openNew(false)"
  >
    <div class="w-[450px]"><NewProductForm ref="newFormRef" /></div>
  </UiModal>
</template>

<script setup lang="ts">
import UiText from "@/components/ui/UiText.vue";
import ProductList from "./list/ProductList.vue";
import UiInput from "@/components/ui/UiInput.vue";
import UiButton from "@/components/ui/UiButton.vue";
import { ref } from "vue";
import UiModal from "@/components/ui/UiModal.vue";
import NewProductForm from "./form/NewProductForm.vue";
import axios from "axios";

const inputStr = ref(""); // 입력 중인 검색어
const keyword = ref(""); // 실제 검색에 사용되는 키워드
const newFormRef = ref();
const listRef = ref();

const isOpenNew = ref(false);
const openNew = (isOpen: boolean) => {
  isOpenNew.value = isOpen;
};

const searchProduct = () => {
  keyword.value = inputStr.value;
};
const reset = () => {
  inputStr.value = "";
  keyword.value = "";
};

const saveProduct = async () => {
  console.log("저장", newFormRef.value.form);
  try {
    await axios.post(
      "/api/products",
      {
        ...newFormRef.value.form,
      },
      { withCredentials: true }
    );
    openNew(false);
    listRef.value?.fetchTableData();
  } catch (err: any) {
    console.log(
      "상품 생성 실패... ",
      err.response?.data?.message || err.message
    );
  }
};
</script>
