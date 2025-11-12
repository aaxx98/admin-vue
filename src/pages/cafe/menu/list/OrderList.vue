<template>
  <CommonTableWrapper
    apiUrl="http://localhost:8080/api/orders"
    :columns="[
      { key: 'id', label: 'ID' },
      { key: 'status', label: '주문 상태' },
      { key: 'totalQuantity', label: '상품 개수' },
      { key: 'totalPrice', label: '가격 합계' },
    ]"
    :pageSize="20"
  >
    <template #default="{ row, col }">
      {{ row[col.key] }}
    </template>
  </CommonTableWrapper>
</template>

<script setup lang="ts">
import CommonTableWrapper from "@/components/common/CommonTableWrapper.vue";
</script>
