<template>
  <div>
    <!-- 테이블 -->
    <CommonTable :columns="columns" :rows="rows">
      <template v-slot="slotProps">
        <slot v-bind="slotProps" />
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
import { fetchListData } from "@/api/common";
import CommonTable, { Column } from "@/components/common/CommonTable.vue";
import CommonPagination from "@/components/common/CommonPagination.vue";

interface Props {
  apiUrl: string;
  columns: Column[];
  initialPage?: number;
  initialPageSize?: number;
  keyword?: String;
}

const props = defineProps<Props>();

const rows = ref<any[]>([]);
const page = ref(props.initialPage || 1);
const pageSize = ref(props.initialPageSize || 20);
const totalPages = ref(1);
const data = ref<any[]>([]);

const fetchData = async () => {
  try {
    const res = await fetchListData(props.apiUrl, {
      page: page.value,
      pageSize: pageSize.value,
      keyword: props.keyword,
    });

    // API 응답에 맞춰 rows와 totalPages 설정
    rows.value = res.data.list || [];
    totalPages.value = res.data.totalPages || 1;
    page.value = res.data.currentPage || page.value; // API가 현재 페이지를 반환하면 동기화
    data.value = res.data.list || [];
  } catch (err) {
    console.error("API fetch error:", err);
    rows.value = [];
    totalPages.value = 1;
  }
};

// keyword가 변경되면 1페이지로 리셋하고 데이터 fetch
watch(
  () => props.keyword,
  () => {
    page.value = 1;
    fetchData();
  }
);
// 페이지나 페이지 사이즈 변경 시 fetchData 호출
watch([page, pageSize], fetchData);

onMounted(fetchData);

defineExpose({
  data,
  fetchData,
});
</script>
