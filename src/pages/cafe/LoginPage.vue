<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
      <!-- 로고 -->
      <div class="flex justify-center">
        <Logo title="카페 관리 시스템" />
      </div>

      <!-- 입력 폼 -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <UiInput
          v-model="email"
          placeholder="Email"
          size="md"
          state="default"
          required
        />

        <UiInput
          v-model="password"
          placeholder="Password"
          type="password"
          size="md"
          state="default"
          required
        />

        <UiButton type="primary" size="md" class="w-full"> Login </UiButton>
      </form>

      <!-- 기타 링크 -->
      <div class="text-center text-sm text-gray-500">
        <router-link to="/signup" class="hover:underline">
          회원 가입
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import Logo from "@/components/layout/Logo.vue";
import UiButton from "@/components/ui/UiButton.vue";
import UiInput from "@/components/ui/UiInput.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  console.log("로그인 시도:", email.value, password.value);
  try {
    const res = await axios.post(
      "/api/auth/login",
      {
        email: email.value,
        password: password.value,
      },
      { withCredentials: true }
    );
    router.push("/main");
  } catch (err: any) {
    console.error("로그인 실패:", err.response?.data?.message || err.message);
  }
};
</script>
