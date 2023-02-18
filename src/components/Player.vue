<template>
  <div class="w-full h-full justify-center items-center flex flex-col gap-8">
    <PlayerCover />
    <div class="track-info text-center">
      <h2 class="text-track-name font-semibold">Track name</h2>
      <p class="text-track-author font-normal">Author</p>
    </div>
    <PlayerSlider />
    <PlayerControlButtons />
   
        <audio controls
      src="https://firebasestorage.googleapis.com/v0/b/music-player-song.appspot.com/o/Lilly%20Wood%20%26%20Robin%20Schulz%20-%20Prayer%20In%20C.mp3?alt=media&token=8461a18c-bbcd-4b6d-a305-fb321a39b7e6"
    ></audio>
    
  </div>
</template>
<script setup>
import PlayerCover from "./PlayerCover.vue";
import PlayerSlider from "./PlayerSlider.vue";
import PlayerControlButtons from "./PlayerControlButtons/index.vue";
</script>
