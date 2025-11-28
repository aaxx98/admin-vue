<template>
  <div class="space-y-4">
    <div>
      <UiText weight="semibold" size="lg">주문 정보</UiText>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <UiText class="col-span-2"
        ><div>주문 일자: {{ orderData.order.orderDate }}</div>
      </UiText>
      <UiText
        ><div>주문 번호: {{ orderData.order.id }}</div></UiText
      >
      <UiText
        ><div>주문 상태: {{ orderData.order.status }}</div></UiText
      >
      <UiText
        ><div>합산 금액: {{ orderData.order.totalPrice }}</div></UiText
      >
      <UiText
        ><div>총 수량: {{ orderData.order.totalQuantity }}</div></UiText
      >
    </div>
    <div class="mt-4">
      <UiText weight="semibold" size="lg">주문 목록</UiText>
    </div>
    <CommonTable
      :columns="[
        { key: 'no', label: 'no.' },
        { key: 'quantity', label: '주문 개수' },
        { key: 'name', label: '상품명' },
        { key: 'category', label: '카테고리' },
        { key: 'price', label: '가격' },
        { key: 'totalPrice', label: '합계' },
      ]"
      :rows="rows"
    >
      <template #default="{ row, col }">
        <span v-if="col.key == 'no'">
          <UiText size="sm" color="text-indigo-400">{{ row.no }} </UiText>
        </span>
        <span v-else-if="col.key == 'name' || col.key == 'totalPrice'">
          <UiText size="sm" weight="semibold">{{ row[col.key] }} </UiText>
        </span>
        <span v-else>{{ row[col.key] }}</span>
      </template>
    </CommonTable>
  </div>
</template>
<script setup lang="ts">
import CommonTable from "@/components/common/CommonTable.vue";
import UiText from "@/components/ui/UiText.vue";
import { fetchOrderDetail } from "@/api/orders";
import { onMounted, reactive, ref } from "vue";

const props = defineProps({
  orderId: { type: Number, default: 0 },
});
const rows = ref<any[]>([]);

const orderData = reactive({
  order: {
    id: 0,
    totalQuantity: 0,
    totalPrice: 0,
    orderDate: "",
    status: "",
  },
  list: [] as any[],
});

onMounted(() => {
  if (props.orderId) {
    fetchDetailData(props.orderId);
  }
});

const fetchDetailData = async (orderId: number) => {
  try {
    const res = await fetchOrderDetail(orderId);

    orderData.order = res.data.order;
    orderData.list = res.data.list;
    rows.value =
      res.data.list.map((l, i) => {
        return {
          no: i + 1,
          quantity: l.quantity,
          name: l.product.name,
          category: l.product.category,
          price: l.product.price,
          totalPrice: l.product.price * l.quantity,
        };
      }) || [];
  } catch (err) {
    rows.value = [];
    console.error(err);
  }
};
</script>
