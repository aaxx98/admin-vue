<template>
  <div class="overflow-x-auto">
    <table class="min-w-full border border-gray-200 divide-y divide-gray-200">
      <thead class="bg-indigo-50">
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
              <span>
                {{ row[col.key] }}
              </span>
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
export interface Column {
  key: string;
  label: string;
}

interface Props {
  columns: Column[];
  rows: Record<string, any>[];
}

const props = defineProps<Props>();
</script>
