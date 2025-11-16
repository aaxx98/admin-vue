<template>
  <CommonTableWrapper
    apiUrl="/api/products"
    :initialPageSize="5"
    :columns="[
      { key: 'id', label: 'ID' },
      { key: 'name', label: '상품명' },
      { key: 'price', label: '가격' },
      { key: 'quantity', label: '수량' },
      { key: 'totalPrice', label: '총 가격' },
    ]"
  >
    <template #default="{ row, col }">
      <span v-if="col.key == 'quantity'" class="flex items-center space-x-2">
        <UiButton size="sm" @click="changeQty(row.id, -1)">-</UiButton>
        <span>{{ quantities[row.id] ?? 0 }}</span>
        <UiButton size="sm" @click="changeQty(row.id, 1)">+</UiButton>
      </span>
      <span v-else-if="col.key == 'totalPrice'">
        {{ ((row.price ?? 0) * (quantities[row.id] ?? 0)).toLocaleString() }}
      </span>
      <span v-else>
        {{ row[col.key] }}
      </span>
    </template>
  </CommonTableWrapper>
</template>
<script setup lang="ts">
import CommonTableWrapper from "@/components/common/CommonTableWrapper.vue";
import UiButton from "@/components/ui/UiButton.vue";
import { computed, ref } from "vue";
import { reactive } from "vue";
const quantities = reactive<Record<number, number>>({});

// 수량 변경
const changeQty = (id: number, diff: number) => {
  const current = quantities[id] ?? 0;
  const next = current + diff;
  if (next <= 0) {
    delete quantities[id];
  } else {
    quantities[id] = next;
  }
};

// 주문 리스트
const orderList = computed(() => {
  return Object.entries(quantities)
    .map(([id, qty]) => ({
      productId: Number(id),
      quantity: qty,
    }))
    .filter((item) => item.quantity > 0);
});

defineExpose({ orderList });
</script>
