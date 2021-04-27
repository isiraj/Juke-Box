import React from 'react';
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import AllAlbums from "./components/AllAlbums"

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      albums:[]
    }
  }
  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <AllAlbums album_data = {this.state.albums}/>
        <PlayerBar />
      </div>
    )
  }
}
