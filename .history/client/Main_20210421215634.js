import React from 'react';
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import Album from "./components/Album"

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <div className='container'>
          <div id='albums' className='row wrap'>
            <Album info={{id:1, artist_name: "Bruh"}}/>
            <Album info={{id:2, artist_name: "Cho"}}/>
          </div>
        </div>
        <PlayerBar />
      </div>
    )
  }
}
