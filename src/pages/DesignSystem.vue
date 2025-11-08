<template>
  <div class="min-h-screen bg-gray-50 p-10 space-y-12">
    <h1 class="text-3xl font-bold mb-8">🎨 Design System</h1>

    <Colors />
    <Typography />

    <!-- Buttons -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Buttons</h2>
      <div class="flex gap-4 flex-wrap">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Primary
        </button>
        <button
          class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          Secondary
        </button>
        <button
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Danger
        </button>
        <button
          class="px-4 py-2 border border-gray-300 text-gray-800 rounded hover:bg-gray-100"
        >
          Outline
        </button>
      </div>
    </section>

    <!-- Cards / Divs -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Containers & Cards</h2>
      <div class="grid grid-cols-3 gap-6">
        <div class="p-4 bg-white shadow rounded-lg">Card 1</div>
        <div class="p-4 bg-white shadow-lg rounded-lg">Card 2 (Lg shadow)</div>
        <div class="p-4 bg-white shadow-md rounded-md border border-gray-200">
          Card 3 (Border + Shadow)
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Colors from "../components/system/Colors.vue";
import Typography from "../components/system/Typography.vue";
</script>
