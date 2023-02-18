<template>
  <div class="flex items-center gap-2 h-fit my-2 w-full border-2 text-side-card">
    <div class="poster w-12 h-12 ">
      <img :src="cover" alt="" srcset="">
    </div>
    <div class="track-info flex flex-col justify-between h-full">
      <h6 class=" font-medium block">{{ trackname }}</h6>
      <p class=" font-normal text-lg text-gray-800">{{ trackauthor }}</p>
    </div>
  </div>
</template>
<script setup>

defineProps({
  trackname: String,
  trackauthor: String,
  cover: String
})
</script>