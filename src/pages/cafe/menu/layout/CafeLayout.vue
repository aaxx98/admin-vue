<template>
  <AppLayout title="카페 관리 시스템" :menuItems="menuItems">
    <router-view />
  </AppLayout>
</template>
<script setup lang="ts">
import AppLayout from "@/components/layout/AppLayout.vue";

const menuItems = [
  { name: "Dashboard", path: "/main" },
  { name: "상품 관리", path: "/product" },
  { name: "재고 관리", path: "/stock" },
  { name: "주문 관리", path: "/order" },
];
</script>
