import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getAllTracks } from "../services/tracks";
import { Howl, Howler } from "howler";

export const useTracksStore = defineStore("track", () => {
  const trackList = ref([]);
  const currTrack = ref();
  const selectedTrack = ref(trackList.value[0]);
  const isPlaying = ref(false);

  async function loadTracks() {
    const response = await getAllTracks();
    trackList.value = response;
    setPlayCurrTrack(trackList.value[0]);
  }

  function setPlayCurrTrack(track) {
    currTrack.value = new Howl({ src: track.src_audio, html5: true });
    selectedTrack.value = track;
    currTrack.value.play();
    console.log(currTrack.value);
  }
  function playCurrTrack(track) {
    currTrack.value.stop();
    setPlayCurrTrack(track);
    playNewTrack();
  }
  function playNewTrack() {
    isPlaying.value = true;
    currTrack.value.play();
  }

  function pauseCurrTrack() {
    isPlaying.value = false;
    currTrack.value.pause();
  }

  function playNextTrack() {
    let index = trackList.value.indexOf(selectedTrack.value);
    if (index != trackList.value.length - 1) {
      selectedTrack.value = trackList.value[index + 1];
    } else {
      selectedTrack.value = trackList.value[0];
    }
    playCurrTrack(selectedTrack.value);
  }

  function playPrevTrack() {
    let index = trackList.value.indexOf(selectedTrack.value);
    if (index != 0) {
      selectedTrack.value = trackList.value[index - 1];
    } else {
      selectedTrack.value = trackList.value[trackList.value.length - 1];
    }
    playCurrTrack(selectedTrack.value);
  }

  return {
    trackList,
    currTrack,
    loadTracks,
    selectedTrack,
    isPlaying,
    setPlayCurrTrack,
    playCurrTrack,
    playNewTrack,
    pauseCurrTrack,
    playNextTrack,
    playPrevTrack,
  };
});
