<template>
  <div class="px-8 py-6 border-r-2 border-r-main-gray/40 h-full overflow-auto w-[400px] bg-bg-sidebar">
    <div class="text-3xl mb-4">Your tracks</div>
    <div class="overflow-hidden pr-4">
      <ShortTrackCard
        v-for="(track, index) in store.trackList"
        :key="track.trackname"
        :cover="track.cover"
        :trackauthor="track.trackauthor"
        :trackname="track.trackname"
        @click="store.playCurrTrack(track)"
      />
    </div>
  </div>
</template>
<script setup>
import ShortTrackCard from "./ShortTrackCard.vue";
import { useTracksStore } from "../stores/useTracksStore";

const store = useTracksStore();
</script>
<style></style>
