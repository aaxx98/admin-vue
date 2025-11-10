<template>
  <div class="overflow-x-auto">
    <table class="min-w-full border border-gray-200 divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="col in columns"
            :key="col.key"
            class="px-4 py-2 text-left text-sm font-semibold text-gray-700"
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td
            v-for="col in columns"
            :key="col.key"
            class="px-4 py-2 text-sm text-gray-700"
          >
            <slot :row="row" :col="col">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
interface Column {
  key: string; // 데이터 키
  label: string; // 컬럼 헤더
}

interface Props {
  columns: Column[];
  rows: Record<string, any>[];
}

const props = defineProps<Props>();
</script>
