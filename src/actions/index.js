import {SELECT_SONG} from '../constants/index';

// ACTION CREATOR
export const selectSong = songs => {
    // RETURNS AN ACTION
    return {    
        type: SELECT_SONG,
        payload: songs
    }
}
