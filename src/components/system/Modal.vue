<template>
  <InfoHeader title="Modal" />

  <!-- 모달 열기 버튼 -->
  <UiButton type="ghost" class="px-4 py-2" @click="openModal"
    >모달 열기</UiButton
  >

  <!-- UiModal -->
  <UiModal
    :visible="isModalVisible"
    title="모달 제목"
    @confirm="handleConfirm"
    @cancel="handleCancel"
    @close="isModalVisible = false"
  >
    <div class="w-[450px]">
      <p>이곳에 모달 내용을 넣으면 됩니다.</p>
      <UiText size="sm" color="text-red-600"
        >모달의 바깥 영역을 누르면 닫힙니다.</UiText
      >
    </div>
  </UiModal>
</template>
<script setup lang="ts">
import { ref } from "vue";
import UiModal from "../ui/UiModal.vue";
import UiButton from "../ui/UiButton.vue";
import InfoHeader from "./InfoHeader.vue";
import UiText from "../ui/UiText.vue";

const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
};

const handleConfirm = () => {
  isModalVisible.value = false; // 모달 닫기
};

const handleCancel = () => {
  isModalVisible.value = false; // 모달 닫기
};
</script>
