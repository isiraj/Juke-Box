import React from 'react';
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import AllAlbums from "./components/AllAlbums"
import SingleAlbum from "./components/SingleAlbum"
import axios from 'axios';

const audio = document.createElement("audio")

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      albums:[],
      selectedAlbum: [], 
      loaded: false
    }
    this.albumSelected = this.albumSelected.bind(this);
    this.resetSelectedAlbum = this.resetSelectedAlbum.bind(this);
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

  albumSelected(albumId){
    // console.log(albumId)
    axios.get(`/api/albums/${albumId}`)
    .then(res => res.data)
    .then(album => this.setState({selectedAlbum: album, loaded: true}))
  }

  resetSelectedAlbum(){
    this.setState({selectedAlbum: [], loaded: false})
  }

  playSong(audioUrl){
    audio.src = audioUrl;
    audio.load();
    audio.play()
  }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar handleClick = {this.resetSelectedAlbum}/>
        {/* <AllAlbums album_data = {this.state.albums}/> */}
        {this.state.loaded === true ? <SingleAlbum album_data = {this.state.selectedAlbum} playSong = {this.playSong}/> : <AllAlbums album_data = {this.state.albums} handleClick = {this.albumSelected}/>}
        {/* <SingleAlbum album_data = {this.state.selectedAlbum}/> */}
        {/* {console.log(this.state.albums)} */}
        <PlayerBar />
      </div>
    )
  }
}
