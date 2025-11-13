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
  </div>
  <ProductList :keyword="keyword" />
</template>

<script setup lang="ts">
import UiText from "@/components/ui/UiText.vue";
import ProductList from "./list/ProductList.vue";
import UiInput from "@/components/ui/UiInput.vue";
import UiButton from "@/components/ui/UiButton.vue";
import { ref } from "vue";

const inputStr = ref(""); // 입력 중인 검색어
const keyword = ref(""); // 실제 검색에 사용되는 키워드

const searchProduct = () => {
  keyword.value = inputStr.value;
};
</script>
