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

  componentDidMount(){
    fetch("/api/albums/1", {method: "GET"})
    .then(rawData => rawData.json())
    .then(data => {
      // this.setState({albums: Array.from(data)})
      console.log(data)
    })
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
