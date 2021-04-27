import React from "react"

class Song extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        // console.log(this.props.info.audioUrl)
        // console.log(this.props.currentSong)
        return(
            <tr className={this.props.playingState === true && this.props.currentSong.id === this.props.info.id ? 'active' : ''}>
                <td><i className={this.props.playingState === true && this.props.currentSong.id === this.props.info.id ? 'fa fa-pause-circle' : 'fa fa-play-circle'} onClick = {() => {this.props.songAudio(this.props.info.audioUrl, this.props.info)}}/></td>
                <td>{this.props.info.id}</td>
                <td>{this.props.info.songName}</td>
                <td>{this.props.info.songArtist}</td>
                <td>{this.props.info.songGenre}</td>
            </tr> 
        )
    }
}

export default Song