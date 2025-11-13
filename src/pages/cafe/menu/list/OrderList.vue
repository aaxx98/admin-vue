<template>
  <CommonTableWrapper
    apiUrl="/api/orders"
    :columns="[
      { key: 'id', label: 'ID' },
      { key: 'status', label: '주문 상태' },
      { key: 'totalQuantity', label: '상품 개수' },
      { key: 'totalPrice', label: '가격 합계' },
      { key: 'delete', label: '삭제' },
    ]"
    :pageSize="20"
    ref="tableRef"
  >
    <template #default="{ row, col }">
      <span v-if="col.key == 'delete'">
        <UiButton
          size="sm"
          type="danger"
          @click="openDeleteModal(true, row.id)"
        >
          삭제
        </UiButton>
      </span>
      <span v-else-if="col.key == 'id'">
        <UiButton size="sm" type="ghost" @click="openShowModal(true, row.id)">{{
          row.id
        }}</UiButton>
      </span>
      <span v-else>{{ row[col.key] }}</span>
    </template>
  </CommonTableWrapper>

  <UiModal
    :visible="deleteOpen"
    :title="`주문 삭제 [${dataId}]`"
    @confirm="deleteRow"
    @cancel="openDeleteModal(false)"
    @close="openDeleteModal(false)"
  >
    <div class="w-[450px]">
      <p>
        주문 번호
        <UiText weight="semibold" class="inline-block">{{ dataId }}</UiText
        >의 내용을 삭제 하시겠어요?
      </p>
    </div>
  </UiModal>

  <UiModal
    :visible="showOpen"
    :title="`주문 상세 [${dataId}]`"
    :showCancel="false"
    :showConfirm="false"
    @close="openShowModal(false)"
  >
    <div class="w-full w-[650px]">
      <OrderDetail :orderId="dataId" />
    </div>
  </UiModal>
</template>

<script setup lang="ts">
import CommonTableWrapper from "@/components/common/CommonTableWrapper.vue";
import axios from "axios";
import { ref } from "vue";
import UiButton from "@/components/ui/UiButton.vue";
import UiModal from "@/components/ui/UiModal.vue";
import UiText from "@/components/ui/UiText.vue";
import OrderDetail from "../detail/OrderDetail.vue";

const tableRef = ref<InstanceType<typeof CommonTableWrapper>>();
const deleteOpen = ref(false);
const showOpen = ref(false);
const dataId = ref(0);

const openDeleteModal = (isOpen: boolean, id?: number) => {
  deleteOpen.value = isOpen;
  if (isOpen && id) {
    dataId.value = id;
  }
};
const openShowModal = (isOpen: boolean, id?: number) => {
  showOpen.value = isOpen;
  if (isOpen && id) {
    dataId.value = id;
  }
};

const deleteRow = async () => {
  try {
    await axios.delete(`/api/orders/${dataId.value}`, {
      withCredentials: true,
    });

    tableRef.value?.fetchData(); // 삭제 후 데이터 갱신
    openDeleteModal(false);
  } catch (err) {
    console.error(err);
  }
};
</script>
