<script setup>
import { computed } from "vue";
import { useTracksStore } from "../stores/useTracksStore";

const store = useTracksStore();

const formatPosition = computed(() => {
  let pos_seconds = Math.floor(store.position)
  if(pos_seconds < 10){
    return '0:0' + pos_seconds
  }else if(pos_seconds < 60){
    return '0:' + pos_seconds
  }else{
    let minutes = Math.floor(pos_seconds / 60)
    let seconds = pos_seconds % 60 < 10
      ? "0" + Number(pos_seconds % 60)
      : pos_seconds % 60;
    return minutes + ':' + seconds
  }
})

const formatDuration = computed(() => {
  let totalSeconds = Math.floor(store.trackDuration);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds =
    totalSeconds % 60 < 10
      ? "0" + Number(totalSeconds % 60)
      : totalSeconds % 60;
  return `${minutes}:${seconds}`;
});
</script>
<template>
  <div class="flex items-center gap-2 text-track-duration font-light">
    <span class="start-position w-5">{{ formatPosition}}</span>
    <input
      type="range"
      name=""
      id=""
      class="w-[600px] h-[5px] slider-input"
      step="0.1"
      v-model="store.position"
      min="0"
      :max="store.trackDuration"
	  @change="store.seekTrack(store.position)"
    />
    <span class="end-position w-5">{{ formatDuration }}</span>
  </div>
</template>
<style>
.slider-input {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: #c2c2c2;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}
.slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: #d8a22e;
  cursor: pointer;
  border-radius: 50%;
}
.slider-input::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background: #d8a22e;
  cursor: pointer;
  border-radius: 50%;
}
</style>
