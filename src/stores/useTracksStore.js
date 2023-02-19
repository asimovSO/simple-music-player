import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getAllTracks } from "../services/tracks";
import { Howl, Howler } from "howler";

export const useTracksStore = defineStore("track", () => {
  const trackList = ref([]);
  const currTrack = ref();
  const selectedTrack = ref(trackList.value[0]);
  const isPlaying = ref(false);
  const trackDuration = ref()
  const position = ref(0)
  const timer = ref(null)

  async function loadTracks() {
    const response = await getAllTracks();
    trackList.value = response;
    setPlayCurrTrack(trackList.value[0]);
  }

  function setPlayCurrTrack(track) {
    currTrack.value = new Howl({ src: track.src_audio, html5: true});
    selectedTrack.value = track;
    currTrack.value.play();
    
    currTrack.value.on('load', () => {
      trackDuration.value = currTrack.value.duration()
    })

    currTrack.value.on('play', () => {
      timer.value = setInterval(()=>{
        position.value = currTrack.value.seek()
      }, 1000)
    })

    currTrack.value.on('end', () => {
      clearInterval(timer)
      playNextTrack()
      
    })
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


  function seekTrack(time){
    currTrack.value.seek(time)
  }

  return {
    trackList,
    currTrack,
    loadTracks,
    selectedTrack,
    position,
    trackDuration,
    isPlaying,
    setPlayCurrTrack,
    playCurrTrack,
    playNewTrack,
    pauseCurrTrack,
    playNextTrack,
    playPrevTrack,
    seekTrack
  };
});
