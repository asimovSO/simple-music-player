<template>
  <div class="w-full h-full justify-center items-center flex flex-col gap-6" v-if="selectedTrack">
    <PlayerCover :img_src="selectedTrack.cover"/>
    <div class="track-info text-center">
      <h2 class="text-track-name font-semibold">{{ selectedTrack.trackname }}</h2>
      <p class="text-track-author font-normal">{{ selectedTrack.trackauthor }}</p>
    </div>
    <PlayerSlider />
    <PlayerControlButtons />
   
  </div>
</template>
<script setup>
import PlayerCover from "./PlayerCover.vue";
import PlayerSlider from "./PlayerSlider.vue";
import PlayerControlButtons from "./PlayerControlButtons/index.vue";
import { useTracksStore } from "../stores/useTracksStore";
import { storeToRefs } from "pinia";

const store = useTracksStore()
const { selectedTrack } = storeToRefs(store)

</script>
