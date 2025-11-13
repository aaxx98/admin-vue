<script setup lang="ts">
import InfoHeader from "./InfoHeader.vue";
</script>

<template>
  <InfoHeader title="참고를 위한 tailwindcss 레이아웃"></InfoHeader>
  <div class="p-6 space-y-6">
    <!-- 1. Flex 한 줄 배치 -->
    <div class="flex bg-gray-100 p-4">
      <div class="flex-1 bg-white p-2">왼쪽(남는 공간 전부 차지)</div>
      <div class="ml-2 bg-white p-2">오른쪽</div>
    </div>

    <!-- 2. 중앙 정렬 -->
    <div class="flex justify-center items-center h-32 bg-gray-200">
      중앙 컨텐츠
    </div>

    <!-- 3. Grid 2열 / 3열 -->
    <div class="grid grid-cols-2 gap-4 bg-gray-100 p-4">
      <div class="bg-white p-2">1</div>
      <div class="bg-white p-2">2</div>
    </div>
    <div class="grid grid-cols-3 gap-4 bg-gray-100 p-4">
      <div class="bg-white p-2">1</div>
      <div class="bg-white p-2">2</div>
      <div class="bg-white p-2">3</div>
    </div>

    <!-- 4. 카드 레이아웃 -->
    <div class="bg-white p-4 rounded-lg shadow-md max-w-sm">카드 내용</div>

    <!-- 5. 버튼 + Input 붙이기 -->
    <div class="flex">
      <input
        type="text"
        placeholder="검색"
        class="flex-1 p-2 border rounded-l"
      />
      <button class="p-2 bg-blue-500 text-white rounded-r">검색</button>
    </div>

    <!-- 6. Margin / Padding -->
    <div class="m-4 p-4 bg-gray-200">마진 + 패딩</div>

    <!-- 7. 반응형 Grid -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-100 p-4"
    >
      <div class="bg-white p-2">1</div>
      <div class="bg-white p-2">2</div>
      <div class="bg-white p-2">3</div>
      <div class="bg-white p-2">4</div>
    </div>

    <!-- 8. Overflow + 스크롤 -->
    <div class="overflow-x-auto bg-gray-100 p-4">
      <div class="min-w-[600px] bg-white p-2">가로 스크롤 컨텐츠</div>
    </div>

    <!-- 9. 숨김 / 보이기 -->
    <div class="hidden md:block bg-gray-200 p-2">md 이상에서만 보임</div>
  </div>
</template>
