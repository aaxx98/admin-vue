<template>
  <div class="flex items-center justify-between mt-4 space-x-2">
    <!-- 페이지 사이즈 선택 -->
    <div>
      <label>
        Rows per page:
        <select
          v-model.number="localPageSize"
          class="ml-1 border rounded px-2 py-1"
        >
          <option v-for="size in pageSizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </label>
    </div>

    <!-- 페이지 버튼 -->
    <div class="flex items-center space-x-1">
      <button
        @click="goToPage(1)"
        :disabled="page === 1"
        class="px-2 py-1 border rounded"
      >
        &laquo;
      </button>

      <button
        @click="goToPage(page - 1)"
        :disabled="page === 1"
        class="px-2 py-1 border rounded"
      >
        &lt;
      </button>

      <button
        v-for="p in pageNumbers"
        :key="p"
        @click="goToPage(p)"
        :class="[
          'px-2 py-1 border rounded',
          { 'bg-indigo-500 text-white': p === page },
        ]"
      >
        {{ p }}
      </button>

      <button
        @click="goToPage(page + 1)"
        :disabled="page === totalPages"
        class="px-2 py-1 border rounded"
      >
        &gt;
      </button>

      <button
        @click="goToPage(totalPages)"
        :disabled="page === totalPages"
        class="px-2 py-1 border rounded"
      >
        &raquo;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from "vue";

interface Props {
  page: number;
  totalPages: number;
  pageSize: number;
  pageSizes?: number[];
}

const props = defineProps<Props>();
const emit = defineEmits(["update:page", "update:pageSize"] as const);

const localPageSize = ref(props.pageSize);
const page = ref(props.page);

watch(page, (val) => emit("update:page", val));
watch(localPageSize, (val) => emit("update:pageSize", val));
watch(
  () => props.page,
  (val) => (page.value = val)
);

const pageSizes = props.pageSizes || [5, 10, 20, 50];

// 현재 페이지 기준으로 버튼 범위 계산 (최대 5개)
const pageNumbers = computed(() => {
  const total = props.totalPages;
  const current = page.value;
  let start = Math.max(current - 2, 1);
  let end = Math.min(start + 4, total);

  // start 조정
  start = Math.max(end - 4, 1);

  const nums = [];
  for (let i = start; i <= end; i++) nums.push(i);
  return nums;
});

const goToPage = (p: number) => {
  if (p < 1) p = 1;
  if (p > props.totalPages) p = props.totalPages;
  page.value = p;
};
</script>
