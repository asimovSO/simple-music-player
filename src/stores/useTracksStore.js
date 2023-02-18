import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAllTracks } from '../services/tracks'

export const useTracksStore = defineStore('track', () => {
  const trackList = ref([])

  async function loadTracks(){
    const response = await getAllTracks()
    trackList.value = response
  }

  return { trackList, loadTracks }
})
