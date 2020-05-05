import { SELECT_SONG } from '../constants/index';
import {combineReducers} from 'redux';

// REDUCERS
export const songListReducer = () => {
    return [
        {title: 'Hips Dont Lie', duration: '4:02'},
        {title: 'Drop It To The Floor', duration: '4:20'},
        {title: 'Shot Me Down', duration: '4:04'}
    ]    
}

export const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === SELECT_SONG){
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songListReducer: songListReducer,
    selectedSongReducer: selectedSongReducer
})