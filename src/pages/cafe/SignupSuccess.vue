<script setup lang="ts">
import Logo from "@/components/layout/Logo.vue";
import UiText from "@/components/ui/UiText.vue";
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
      <!-- 로고 -->
      <div class="flex justify-center">
        <Logo title="카페 관리 시스템" />
      </div>
      <div>
        <UiText size="xl" class="mb-2"><h2>회원가입 성공✅</h2></UiText>
        <UiText color="text-emerald-600"
          ><p class="m-0">회원가입이 성공적으로 완료되었습니다.</p></UiText
        >
      </div>

      <div class="text-center text-sm text-gray-500">
        <router-link to="/login" class="hover:underline">
          로그인 페이지로
        </router-link>
      </div>
    </div>
  </div>
</template>
