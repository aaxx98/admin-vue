<template>
  <CommonTableWrapper
    apiUrl="http://localhost:8080/api/products"
    :columns="[
      { key: 'id', label: 'ID' },
      { key: 'name', label: '상품명' },
      { key: 'category', label: '카테고리' },
      { key: 'price', label: '가격' },
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
