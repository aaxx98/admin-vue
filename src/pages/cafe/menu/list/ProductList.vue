<template>
  <CommonTableWrapper
    ref="tableRef"
    apiUrl="/api/products"
    :columns="[
      { key: 'id', label: 'ID' },
      { key: 'name', label: '상품명' },
      { key: 'category', label: '카테고리' },
      { key: 'price', label: '가격' },
      { key: 'delete', label: '삭제' },
    ]"
    :keyword="props.keyword"
  >
    <template #default="{ row, col }">
      <span v-if="col.key == 'delete'">
        <UiButton size="sm" type="danger" @click="openDeleteModal(true, row)">
          삭제
        </UiButton>
      </span>
      <span v-else>{{ row[col.key] }}</span>
    </template>
  </CommonTableWrapper>

  <UiModal
    :visible="deleteOpen"
    :title="`상품 삭제 [${infoData.id}]`"
    @confirm="deleteRow"
    @cancel="openDeleteModal(false)"
    @close="openDeleteModal(false)"
  >
    <div class="w-[450px]">
      <p>
        (id: {{ infoData.id }})
        <UiText weight="semibold" class="inline-block">{{
          infoData.name
        }}</UiText
        >의 내용을 삭제 하시겠어요?
      </p>
    </div>
  </UiModal>
</template>

<script setup lang="ts">
import CommonTableWrapper from "@/components/common/CommonTableWrapper.vue";
import UiButton from "@/components/ui/UiButton.vue";
import UiModal from "@/components/ui/UiModal.vue";
import UiText from "@/components/ui/UiText.vue";
import { deleteProduct } from "@/api/products";
import { defineExpose, ref, watch } from "vue";

interface Props {
  keyword: string;
}
const props = defineProps<Props>();

const tableRef = ref<InstanceType<typeof CommonTableWrapper>>();
const deleteOpen = ref(false);
const infoData = ref<Record<string, any>>({});

const openDeleteModal = (isOpen: boolean, rowData?: Record<string, any>) => {
  deleteOpen.value = isOpen;
  if (isOpen && rowData) {
    infoData.value = rowData;
  }
};

const deleteRow = async () => {
  try {
    await deleteProduct(infoData.value.id);

    tableRef.value?.fetchData(); // 삭제 후 데이터 갱신
    openDeleteModal(false);
  } catch (err) {
    console.error(err);
  }
};

const fetchTableData = () => {
  tableRef.value?.fetchData();
};
defineExpose({ fetchTableData });
</script>
