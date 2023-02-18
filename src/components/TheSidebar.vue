<template>
  <div class="px-8 py-6 border-r-2 h-full overflow-auto w-[400px]">
    <div class="text-3xl mb-4">Your tracks</div>
    <div class="overflow-hidden pr-4">
      <ShortTrackCard v-for="{trackname, trackauthor, cover} in store.trackList" :key="trackname" 
        :cover="cover" :trackauthor="trackauthor" :trackname="trackname"
      />
    </div>
  </div>
</template>
<script setup>
import ShortTrackCard from "./ShortTrackCard.vue";
import { useTracksStore } from "../stores/useTracksStore"

const store = useTracksStore()

</script>
<style></style>
