import React from "react"

class PlayerBar extends React.Component{
    constructor(){
        super()
    }

    handleForward(){
        if(this.props.currentSong.songId === this.props.currentAlbum.songs.length){
            nextSong = this.props.currentAlbum.songs[0]; // Going off of state
            () => {this.props.playSong(this.props.play(this.props.nextSong.audioUrl), this.props.nextSong)} 
        }
        else{
            nextSong = this.props.currentAlbum.songs[this.props.currentSong.songId];
            () => {this.props.playSong(this.props.play(this.props.nextSong.audioUrl), this.props.nextSong)}
        }
    }

    render(){
        return(
            this.props.playStatus === false && this.props.currentSong === null ? 
                " "
            : 
            <div id='player-container'>
                <div id='player-controls'>
                    <div className='row center'>
                    <i className='fa fa-step-backward'></i>
                    <i onClick = {() => {this.props.playSong(this.props.currentSong.audioUrl, this.props.currentSong)}} className= {this.props.playStatus === true ? 'fa fa-pause-circle' : 'fa fa-play-circle'}></i>
                    <i className='fa fa-step-forward'></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerBar