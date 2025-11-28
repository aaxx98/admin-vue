<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
      <!-- 로고 -->
      <div class="flex justify-center">
        <Logo title="카페 관리 시스템" />
      </div>
      <div>
        <UiText size="xl"><h2>시스템 회원가입</h2></UiText>
        <UiText
          ><p class="m-0">
            카페 관리 시스템에 사용할 회원 정보를 입력해주세요.
          </p></UiText
        >
      </div>
      <!-- 입력 폼 -->
      <form @submit.prevent="handleSignup" class="space-y-4">
        <UiInput
          v-model="form.email"
          placeholder="Email"
          label="Email"
          size="md"
          state="default"
          required
        />

        <UiInput
          v-model="form.name"
          placeholder="이름"
          label="이름"
          size="md"
          state="default"
          required
        />

        <UiInput
          v-model="form.password"
          placeholder="Password"
          label="Password"
          type="password"
          size="md"
          state="default"
          required
        />
        <br />
        <UiButton type="primary" size="md" class="w-full"> 회원가입 </UiButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Logo from "@/components/layout/Logo.vue";
import UiButton from "@/components/ui/UiButton.vue";
import UiInput from "@/components/ui/UiInput.vue";
import UiText from "@/components/ui/UiText.vue";
import { useRouter } from "vue-router";
import { registerUser } from "@/api/auth";

const router = useRouter();

const form = reactive({
  email: "",
  name: "",
  password: "",
});

const handleSignup = async () => {
  try {
    await registerUser({
      email: form.email,
      name: form.name,
      password: form.password,
    });
    router.push("/signup-success");
  } catch (err: any) {
    console.error("회원가입 실패:", err.response?.data?.message || err.message);
  }
};
</script>
