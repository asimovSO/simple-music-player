<template>
  <div
    class="flex items-center pl-2 gap-2 h-fit my-2 w-full border-[5px] border-transparent text-side-card card cursor-pointer"
    :class="activeTrack"
  >
    <div class="poster w-12 h-12">
      <img :src="cover" alt="" srcset="" />
    </div>
    <div class="track-info flex flex-col justify-between h-full">
      <h6 class="font-medium block">{{ trackname }}</h6>
      <p class="font-normal text-lg text-gray-400">{{ trackauthor }}</p>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useTracksStore } from '../stores/useTracksStore';
const props = defineProps({
  trackname: String,
  trackauthor: String,
  cover: String,
});
const store = useTracksStore()
const activeTrack = computed(() => {
  if(props.trackname == store.selectedTrack.trackname){
    return 'active'
  }else{
    return ''
  }
})
</script>

<style>
.card.active {
  border-left: 5px solid var(--primary-color);
}
.card.active h6{
  color: var(--primary-color);
}
</style>
