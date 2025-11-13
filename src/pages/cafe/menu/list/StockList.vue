<template>
  <CommonTableWrapper
    apiUrl="/api/stocks"
    :columns="[
      { key: 'productName', label: '상품명' },
      { key: 'quantity', label: '현재 재고' },
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
