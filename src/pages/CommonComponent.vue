<template>
  <CommonTableWrapper
    apiUrl="http://localhost:8080/posts"
    :columns="[
      { key: 'id', label: 'ID' },
      { key: 'title', label: '제목' },
      { key: 'authorId', label: '작성자Id' },
      { key: 'address', label: '주소' },
      { key: 'detailAddress', label: '상세 주소' },
      { key: 'createdAt', label: '생성일' },
      { key: 'deletedAt', label: '삭제일' },
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
