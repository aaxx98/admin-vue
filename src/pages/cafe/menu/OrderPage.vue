<template>
  <UiText size="xl" weight="semibold" class="mb-6">
    <h1>Order Page</h1>
  </UiText>
  <div class="py-2 px-4 flex justify-end">
    <UiButton
      type="custom"
      class="bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-400"
      @click="openNew(true)"
      >주문 추가
    </UiButton>
  </div>
  <OrderList />
  <UiModal
    :visible="isOpenNew"
    title="주문 추가"
    @confirm="saveOrder"
    @cancel="openNew(false)"
    @close="openNew(false)"
  >
    <div class="w-[600px] overflow-y-auto max-h-[70vh]">
      <NewOrderForm ref="newFormRef" />
    </div>
  </UiModal>
</template>

<script setup lang="ts">
import UiText from "@/components/ui/UiText.vue";
import OrderList from "./list/OrderList.vue";
import UiButton from "@/components/ui/UiButton.vue";
import UiModal from "@/components/ui/UiModal.vue";
import NewOrderForm from "./form/NewOrderForm.vue";
import { ref } from "vue";
import axios from "axios";

const newFormRef = ref();
const listRef = ref();

const isOpenNew = ref(false);
const openNew = (isOpen: boolean) => {
  isOpenNew.value = isOpen;
};

const saveOrder = async () => {
  console.log("저장", newFormRef.value.orderList);
  try {
    await axios.post(
      "/api/orders",
      {
        orderItems: newFormRef.value.orderList,
      },
      { withCredentials: true }
    );
    openNew(false);
    listRef.value?.fetchTableData();
  } catch (err: any) {
    console.log(
      "주문 생성 실패... ",
      err.response?.data?.message || err.message
    );
  }
};
</script>
