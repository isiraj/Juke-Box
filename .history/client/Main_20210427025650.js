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
      loaded: false,
      currentSong: null,
      playing: false
    }
    this.albumSelected = this.albumSelected.bind(this);
    this.resetSelectedAlbum = this.resetSelectedAlbum.bind(this);
    this.playSong = this.playSong.bind(this)
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
    .catch(error => console.log(error))
  }

  resetSelectedAlbum(){
    this.setState({selectedAlbum: [], loaded: false})
  }

  playSong(audioUrl, currentSongObj){
    if(this.state.playing){
      audio.pause()
      this.setState({playing: false})
    }
    else{
      audio.src = audioUrl;
      audio.load();
      audio.play()
      this.setState({currentSong: currentSongObj, playing: true})
    }
  }

  handleForward(){
    console.log(this.state)
    if(this.state.currentSong.songId === this.state.selectedAlbum[0].songs.length){
        const nextSong = this.state.selectedAlbum[0].songs[0]; // Going off of state
        this.setState({currentSong: nextSong, playing: true})
        this.playSong(this.state.currentSong.audioUrl, this.state.currentSong);
    }
    else{
        const nextSong = this.state.selectedAlbum[0].songs[this.state.currentSong.songId];
        this.setState({currentSong: nextSong, playing: true})
        this.playSong(this.state.currentSong.audioUrl, this.state.currentSong);
    }
  }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar handleClick = {this.resetSelectedAlbum}/>
        {/* <AllAlbums album_data = {this.state.albums}/> */}
        {this.state.loaded === true ? <SingleAlbum album_data = {this.state.selectedAlbum} playSong = {this.playSong} songPlaying = {this.state.playing} currentSong = {this.state.currentSong}/> : <AllAlbums album_data = {this.state.albums} handleClick = {this.albumSelected}/>}
        {/* <SingleAlbum album_data = {this.state.selectedAlbum}/> */}
        {/* {console.log(this.state.albums)} */}
        <PlayerBar handleForward = {this.handleForward} playSong = {this.playSong} playStatus = {this.state.playing} currentSong = {this.state.currentSong} currentAlbum = {this.state.selectedAlbum}/>
      </div>
    )
  }
}
