<template>
    <div class="w-full h-full justify-center items-center flex flex-col gap-8">
        <PlayerCover/>
        <div class="track-info text-center">
            <h2 class="text-track-name font-semibold">Track name</h2>
            <p class="text-track-author font-normal">Author</p>
        </div>
        <PlayerSlider/>
        <PlayerControlButtons/>
    </div>
</template>
<script setup>
import PlayerCover from './PlayerCover.vue';
import PlayerSlider from './PlayerSlider.vue';
import PlayerControlButtons from './PlayerControlButtons/index.vue'
</script>