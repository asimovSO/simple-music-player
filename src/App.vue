<script setup>
import { onMounted } from "vue";
import Player from "./components/Player.vue";
import TheSidebar from "./components/TheSidebar.vue";
import { getAllTracks } from "./services/tracks";
import { useTracksStore } from "./stores/useTracksStore";
const store = useTracksStore()

onMounted(() => {
  store.loadTracks()
  console.log(store.trackList);
})

</script>

<template>
  <main class="overflow-hidden">
    <div class="flex h-screen">
      <TheSidebar />
      <div class=" flex-grow h-full justify-center items-center flex">
        <Player />
      </div>
    </div>
  </main>
</template>
