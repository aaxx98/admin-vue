<template>
  <div class="min-h-screen bg-gray-50 p-10 space-y-12">
    <h1 class="text-3xl font-bold mb-8">🎨 Design System</h1>

    <Colors />
    <Typography />
    <Buttons />
    <Cards />
    <FormInput />
    <!-- Cards / Divs -->
  </div>
</template>

<script setup>
import Buttons from "../components/system/Buttons.vue";
import Cards from "../components/system/Cards.vue";
import Colors from "../components/system/Colors.vue";
import FormInput from "../components/system/FormInput.vue";
import Typography from "../components/system/Typography.vue";
</script>
