<script setup lang="ts">
import UiText from "@/components/ui/UiText.vue";
import OrderList from "./list/OrderList.vue";
</script>

<template>
  <UiText size="xl" weight="semibold" class="mb-6">
    <h1>Order Page</h1>
  </UiText>
  <OrderList />
</template>
