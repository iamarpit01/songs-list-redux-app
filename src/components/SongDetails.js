import React from 'react';
import {connect} from 'react-redux';

const SongDetails = ({song}) =>{
    if(!song){
        return <div>No Song Selected!</div>
    }
    return (
        <div>
            <h3>Details For:</h3>
            <p>{song.title} | {song.duration}</p>
        </div>
        )
}


const mapStateToProps = (state) => {
    return {song: state.selectedSongReducer}
}

export default connect(mapStateToProps)(SongDetails);

