<script setup>
import PlayerPauseBtn from './PlayerPauseBtn.vue';
import PlayerNextBtn from './PlayerNextBtn.vue';
import PlayerPrevBtn from './PlayerPrevBtn.vue';
import PlayerPlayBtn from './PlayerPlayBtn.vue';
import { useTracksStore } from '../../stores/useTracksStore'
 
const store = useTracksStore() 
</script>
<template>
    <div class="flex gap-4 items-center">
        <PlayerPrevBtn @click="store.playPrevTrack"/>
        <PlayerPauseBtn v-if="store.isPlaying" @click="store.pauseCurrTrack"/>
        <PlayerPlayBtn v-else @click="store.playNewTrack"/>
        <PlayerNextBtn @click="store.playNextTrack"/>
    </div>
</template>
