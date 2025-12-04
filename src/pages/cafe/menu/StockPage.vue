<script setup lang="ts">
import UiText from "@/components/ui/UiText.vue";
import StockList from "./list/StockList.vue";
import UiInput from "@/components/ui/UiInput.vue";
import UiButton from "@/components/ui/UiButton.vue";
import { ref } from "vue";

const inputStr = ref("");
const keyword = ref("");

const searchStock = () => {
  keyword.value = inputStr.value;
};

const reset = () => {
  inputStr.value = "";
  keyword.value = "";
};
</script>

<template>
  <UiText size="xl" weight="semibold" class="mb-6">
    <h1>Stock Page</h1>
  </UiText>

  <div class="p-4 flex">
    <div class="flex-1">
      <UiInput
        placeholder="상품명 검색"
        v-model="inputStr"
        class="bg-white"
        @keyup.enter="searchStock"
      ></UiInput>
    </div>
    <UiButton class="ml-2" @click="searchStock">검색</UiButton>
    <UiButton type="secondary" class="ml-2" @click="reset">초기화</UiButton>
  </div>

  <StockList :keyword="keyword" />
</template>
