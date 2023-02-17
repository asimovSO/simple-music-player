<script setup>
import PlayerPauseBtn from './PlayerPauseBtn.vue';
import PlayerNextBtn from './PlayerNextBtn.vue';
import PlayerPrevBtn from './PlayerPrevBtn.vue';
</script>
<template>
    <div class="flex gap-4 items-center">
        <PlayerPrevBtn/>
        <PlayerPauseBtn/>
        <PlayerNextBtn/>
    </div>
</template>