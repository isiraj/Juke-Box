import React from 'react';
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import AllAlbums from "./components/AllAlbums"
import SingleAlbum from "./components/SingleAlbum"

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      albums:[],
      selectedAlbum: [], 
      loaded: false
    }
    this.albumSelected = this.albumSelected.bind("this")
  }

  componentDidMount(){
    fetch("/api/albums", {method: "GET"})
    .then(rawData => rawData.json())
    .then(data => {
      console.log(this.state.albums)
      this.setState({albums: Array.from(data)})
      // console.log(data)
    })
  }

  albumSelected(){
    this.setState({selectedAlbum: {
      "id": 3,
      "name": "Chain React-ion",
      "artworkUrl": "default-album.jpg",
      "artistId": 1,
      "artist": {
        "id": 1,
        "name": "The Crash Test Dummies",
      },
      "songs": [
        {
          "id": 13,
          "name": "Set Some State",
          "audioUrl": "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/01%20Shooting%20Star.mp3",
          "genre": "Instrumental",
          "albumId": 2,
          "artistId": 1
        }
      ]
    }, loaded: true})
  }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        {/* <AllAlbums album_data = {this.state.albums}/> */}
        {this.state.loaded === true ? <SingleAlbum album_data = {this.state.selectedAlbum}/> : <AllAlbums album_data = {this.state.albums} handleClick = {this.albumSelected}/>}
        <SingleAlbum album_data = {this.state.selectedAlbum}/>
        {/* {console.log(this.state.albums)} */}
        <PlayerBar />
      </div>
    )
  }
}
