import React from 'react';
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import AllAlbums from "./components/AllAlbums"

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      albums: [  {
        "id": 1,
        "name": "No Dummy",
        "artworkUrl": "default-album.jpg",
        "artistId": 1,
        "artist": {
          "id": 1,
          "name": "The Crash Test Dummies"
        }
      },
      {
        "id": 2,
        "name": "I React to State",
        "artworkUrl": "default-album.jpg",
        "artistId": 1,
        "artist": {
          "id": 1,
          "name": "The Crash Test Dummies"
        }
      }]
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
