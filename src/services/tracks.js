import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/index'

export async function getAllTracks(){
    const tracksData = await getDocs(collection(db, 'track_list'))
    return tracksData.docs.map(it => it.data())
}
