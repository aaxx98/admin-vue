<template>
  <CommonTableWrapper
    ref="tableRef"
    apiUrl="/api/stocks"
    :columns="[
      { key: 'productName', label: '상품명' },
      { key: 'quantity', label: '현재 재고' },
      { key: 'actions', label: '재고 변경' },
    ]"
    :pageSize="20"
    :keyword="props.keyword"
  >
    <template #default="{ row, col }">
      <span v-if="col.key === 'actions'">
        <UiButton size="sm" type="secondary" @click="openAdjustModal(row)">
          변경
        </UiButton>
      </span>
      <span v-else>{{ row[col.key] }}</span>
    </template>
  </CommonTableWrapper>

  <UiModal
    :visible="isAdjustModalOpen"
    :title="modalTitle"
    @confirm="submitAdjust"
    @cancel="closeAdjustModal"
    @close="closeAdjustModal"
  >
    <div class="w-[420px] space-y-4">
      <p class="text-sm text-gray-600">
        상품명: <span class="font-semibold">{{ selectedRow?.productName }}</span>
      </p>
      <p class="text-sm text-gray-600">
        현재 재고: <span class="font-semibold">{{ selectedRow?.quantity }}</span>
      </p>
      <div class="flex space-x-4">
        <UiRadio v-model="adjustType" name="adjustType" value="increase">
          재고 추가
        </UiRadio>
        <UiRadio v-model="adjustType" name="adjustType" value="decrease">
          재고 감소
        </UiRadio>
      </div>
      <UiInput
        type="number"
        v-model="adjustAmount"
        placeholder="변경할 수량을 입력하세요"
      />
    </div>
  </UiModal>
</template>

<script setup lang="ts">
import CommonTableWrapper from "@/components/common/CommonTableWrapper.vue";
import UiButton from "@/components/ui/UiButton.vue";
import UiInput from "@/components/ui/UiInput.vue";
import UiModal from "@/components/ui/UiModal.vue";
import UiRadio from "@/components/ui/UiRadio.vue";
import { updateProductStock } from "@/api/products";
import { computed, ref } from "vue";

interface Props {
  keyword: string;
}
const props = defineProps<Props>();

const tableRef = ref<InstanceType<typeof CommonTableWrapper>>();
const isAdjustModalOpen = ref(false);
const selectedRow = ref<Record<string, any> | null>(null);
const adjustType = ref<"increase" | "decrease">("increase");
const adjustAmount = ref("");

const modalTitle = computed(
  () => `재고 변경 - ${selectedRow.value?.productName || "상품"}`
);

const openAdjustModal = (row: Record<string, any>) => {
  selectedRow.value = row;
  adjustType.value = "increase";
  adjustAmount.value = "";
  isAdjustModalOpen.value = true;
};

const closeAdjustModal = () => {
  isAdjustModalOpen.value = false;
};

const submitAdjust = async () => {
  if (!selectedRow.value) return;

  const amount = Number(adjustAmount.value);
  if (!amount || amount <= 0) return;

  const productId = selectedRow.value.productId || selectedRow.value.id;
  if (!productId) return;

  const addValue = adjustType.value === "increase" ? amount : -amount;

  try {
    await updateProductStock(productId, addValue);
    await tableRef.value?.fetchData();
    closeAdjustModal();
  } catch (error) {
    console.error("재고 변경 실패", error);
  }
};
</script>
