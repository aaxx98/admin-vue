<template>
  <div class="flex items-center space-x-3">
    <template v-if="user">
      <span class="text-gray-700 font-medium">{{ user?.name }}</span>
    </template>
    <template v-else>
      <UiButton @click="goLogin"> 로그인 </UiButton>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import UiButton from "../ui/UiButton.vue";

interface User {
  name: string;
  avatar: string;
}
const user = ref<User | null>(null);
const router = useRouter();

const fetchUser = async () => {
  try {
    const res = await axios.get("/api/auth/me", {
      withCredentials: true,
    });
    user.value = res.data;
  } catch (err: any) {
    if (err.response?.status === 401) {
      console.log("로그인 필요 - 로그인 모달 띄우기 가능");
      // TODO: 로그인 모달 보여주는 로직
    } else {
      console.error("유저 정보 가져오기 실패:", err);
    }
  }
};

onMounted(() => {
  fetchUser();
});

const goLogin = () => {
  router.push("/login");
};
</script>
