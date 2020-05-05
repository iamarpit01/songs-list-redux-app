import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions/index'

class SongList extends Component {

    renderList() {
        console.log(this.props);
        return this.props.songs.map((song, index) => {
            return (
                <div key={index} className="">
                    <h4>{song.title}</h4>
                    <button onClick={() => this.props.selectSong(song)}>Choose</button>
                </div>
            )
        })
    }

    render(){
        return <div>{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {  
    return {songs: state.songListReducer};
}
 
// SELECT SONG ACTIONCREATORS => NEEDED TO DISPATCH
const mapDispatchToProps = { selectSong }

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
