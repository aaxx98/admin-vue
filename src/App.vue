<template>
  <div class="min-h-screen bg-gray-50">
    <router-view />
    <!-- 페이지 렌더링 -->
    <GlobalMessageModal />
  </div>
</template>
<script setup>
import GlobalMessageModal from "@/components/common/GlobalMessageModal.vue";
</script>
