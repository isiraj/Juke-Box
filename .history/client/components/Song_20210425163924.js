import React from "react"

class Song extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <tr>
                <td><i className='fa fa-play-circle' id = {this.props.info.songId} onClick = {() => {this.props.songAudio(this.props.info.audioUrl)}}/></td>
                <td>{this.props.info.songId}</td>
                <td>{this.props.info.songName}</td>
                <td>{this.props.info.songArtist}</td>
                <td>{this.props.info.songGenre}</td>
            </tr> 
        )
    }
}

export default Song