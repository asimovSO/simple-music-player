<script setup>
import Player from "./components/Player.vue";
import TheSidebar from "./components/TheSidebar.vue";
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
