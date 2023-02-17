<template>
  <div class="px-8 py-6 border-r-2 h-full overflow-auto w-[400px]">
    <div class="text-3xl mb-4">Your tracks</div>
    <div class="overflow-hidden pr-4">
      <ShortTrackCard v-for="(item, index) in 24" :key="index" />
    </div>
  </div>
</template>
<script setup>
import ShortTrackCard from "./ShortTrackCard.vue";
</script>
<style></style>
