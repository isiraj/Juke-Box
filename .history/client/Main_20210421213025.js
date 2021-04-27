import React from 'react'
import Sidebar from "./components/Sidebar"
import PlayerBar from "./components/PlayerBar"

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        
      </div>
    )
  }
}
