<template>
  <div>
    <!-- 테이블 -->
    <CommonTable :columns="columns" :rows="rows">
      <template #default="{ row, col }">
        <!-- 이메일 컬럼은 링크, 나머지는 일반 텍스트 -->
        <span v-if="col.key === 'email'">
          <a :href="`mailto:${row[col.key]}`" class="text-indigo-500">{{
            row[col.key]
          }}</a>
        </span>
        <span v-else>{{ row[col.key] }}</span>
      </template>
    </CommonTable>

    <!-- 페이징 -->
    <CommonPagination
      v-model:page="page"
      v-model:pageSize="pageSize"
      :totalPages="totalPages"
      :pageSizes="[5, 10, 20, 50, 100]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import CommonTable from "@/components/common/CommonTable.vue";
import CommonPagination from "@/components/common/CommonPagination.vue";

interface Column {
  key: string;
  label: string;
}

interface Props {
  apiUrl: string;
  columns: Column[];
  initialPage?: number;
  initialPageSize?: number;
}

const props = defineProps<Props>();

const rows = ref<any[]>([]);
const page = ref(props.initialPage || 1);
const pageSize = ref(props.initialPageSize || 20);
const totalPages = ref(1);

const fetchData = async () => {
  try {
    const res = await axios.get(props.apiUrl, {
      params: {
        page: page.value,
        pageSize: pageSize.value,
      },
    });

    // API 응답에 맞춰 rows와 totalPages 설정
    rows.value = res.data.list || [];
    totalPages.value = res.data.totalPages || 1;
    page.value = res.data.currentPage || page.value; // API가 현재 페이지를 반환하면 동기화
  } catch (err) {
    console.error("API fetch error:", err);
    rows.value = [];
    totalPages.value = 1;
  }
};

// 페이지나 페이지 사이즈 변경 시 fetchData 호출
watch([page, pageSize], fetchData);

onMounted(fetchData);
</script>
