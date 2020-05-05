import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

class App extends React.Component {

  render(){
    return(
      <React.Fragment>
        <div><SongList /></div>
        <div><SongDetails /></div>
      </React.Fragment>
    )
  }
}

export default App;
