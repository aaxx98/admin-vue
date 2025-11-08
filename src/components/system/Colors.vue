<template>
  <section>
    <InfoHeader
      title="Colors"
      link="https://tailwindcss.com/docs/colors"
      info="tailwindcss: colors"
    />
    <div class="flex gap-4 flex-wrap">
      <div>
        <ColorBox color="bg-indigo-100" label="indigo-100" />
        <ColorBox color="bg-indigo-400" label="indigo-400" />
        <ColorBox color="bg-indigo-500" label="indigo-500" />
        <ColorBox color="bg-indigo-600" label="indigo-600" />
      </div>
      <div>
        <ColorBox color="bg-emerald-100" label="emerald-100" />
        <ColorBox color="bg-emerald-400" label="emerald-400" />
        <ColorBox color="bg-emerald-500" label="emerald-500" />
        <ColorBox color="bg-emerald-600" label="emerald-600" />
      </div>
      <div>
        <ColorBox color="bg-amber-100" label="amber-100" />
        <ColorBox color="bg-amber-400" label="amber-400" />
        <ColorBox color="bg-amber-500" label="amber-500" />
        <ColorBox color="bg-amber-600" label="amber-600" />
      </div>
      <div>
        <ColorBox color="bg-red-100" label="red-100" />
        <ColorBox color="bg-red-400" label="red-400" />
        <ColorBox color="bg-red-500" label="red-500" />
        <ColorBox color="bg-red-600" label="red-600" />
      </div>
      <div>
        <ColorBox color="bg-gray-50" label="gray-50" />
        <ColorBox color="bg-gray-200" label="gray-200" />
        <ColorBox color="bg-gray-400" label="gray-400" />
        <ColorBox color="bg-gray-800" label="gray-800" />
      </div>
    </div>
  </section>
</template>
<script setup>
import ColorBox from "./ColorBox.vue";
import InfoHeader from "./InfoHeader.vue";
</script>
