<template>
  <div class="flex items-center space-x-3">
    <template v-if="user">
      <span class="text-gray-700 font-medium">{{ user?.name }}</span>
      <span>
        <UiButton @click="logout"> 로그아웃 </UiButton>
      </span>
    </template>
    <template v-else>
      <UiButton @click="goLogin"> 로그인 </UiButton>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import UiButton from "../ui/UiButton.vue";
import { fetchCurrentUser, logoutUser } from "@/api/auth";

interface User {
  name: string;
  avatar: string;
}
const user = ref<User | null>(null);
const router = useRouter();

const fetchUser = async () => {
  const res = await fetchCurrentUser();
  user.value = res.data;
};

onMounted(() => {
  fetchUser();
});

const goLogin = () => {
  router.push("/login");
};

const logout = async () => {
  await logoutUser();
  user.value = null;
  router.push("/login");
};
</script>
