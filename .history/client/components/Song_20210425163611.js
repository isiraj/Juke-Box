import React from "react"

class Song extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <tr>
                {this.props.songState === true ? document.getElementById(this.props.info.songId).style.display = "    ": <td><i id = {this.props.info.songId} className='fa fa-play-circle' onClick = {() => {this.props.songAudio(this.props.info.audioUrl)}}/></td>} 
                <td>{this.props.info.songId}</td>
                <td>{this.props.info.songName}</td>
                <td>{this.props.info.songArtist}</td>
                <td>{this.props.info.songGenre}</td>
            </tr> 
        )
    }
}

export default Song