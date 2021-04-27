import React from 'react';
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import AllAlbums from "./components/AllAlbums"
import SingleAlbum from "./components/SingleAlbum"

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      albums:[]
    }
  }

  componentDidMount(){
    fetch("/api/albums/1", {method: "GET"})
    .then(rawData => rawData.json())
    .then(data => {
      this.setState({albums: data})
      // console.log(data)
    })
  }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        {/* <AllAlbums album_data = {this.state.albums}/> */}
        <SingleAlbum album_data = {this.state.albums}/>
        <PlayerBar />
      </div>
    )
  }
}
