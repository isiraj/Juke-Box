import React from "react"

class Song extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        // console.log(this.props.info.audioUrl)
        return(
            <tr>
                <td><i className={this.props.playingState === true && this.props.currentSong.id === this.props.info.songId ? 'fa fa-pause-circle' : 'fa fa-play-circle'} onClick = {() => {this.props.songAudio(this.props.info.audioUrl, this.props.info)}}/></td>
                <td>{this.props.info.songId}</td>
                <td>{this.props.info.songName}</td>
                <td>{this.props.info.songArtist}</td>
                <td>{this.props.info.songGenre}</td>
            </tr> 
        )
    }
}

export default Song