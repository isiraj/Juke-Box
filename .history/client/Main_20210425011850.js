import React from 'react';
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import AllAlbums from "./components/AllAlbums"
import SingleAlbum from "./components/SingleAlbum"
import axios from 'axios';

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      albums:[],
      selectedAlbum: [], 
      loaded: false
    }
    this.albumSelected = this.albumSelected.bind(this)
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
    axios.get(`/api/albums/${(albumId.toString())}`)
    .then(res => res.data)
    .then(album => this.setState({selectedAlbum: album, loaded: true}))
  }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        {/* <AllAlbums album_data = {this.state.albums}/> */}
        {this.state.loaded === true ? <SingleAlbum album_data = {this.state.selectedAlbum}/> : <AllAlbums album_data = {this.state.albums} handleClick = {this.albumSelected}/>}
        {/* <SingleAlbum album_data = {this.state.selectedAlbum}/> */}
        {/* {console.log(this.state.albums)} */}
        <PlayerBar />
      </div>
    )
  }
}
