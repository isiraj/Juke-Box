import React from "react"

class PlayerBar extends React.Component{
    constructor(){
        super()
        this.handleForward = this.handleForward.bind(this)
    }

    handleForward(){
        if(this.props.currentSong.songId === this.props.currentAlbum[0].songs.length){
            const nextSong = this.props.currentAlbum[0].songs[0]; // Going off of state
            this.props.playSong(nextSong.audioUrl, nextSong);
        }
        else{
            const nextSong = this.props.currentAlbum[0].songs[this.props.currentSong.songId];
            this.setState({currentSong: nextSong, playing: true})
            this.props.playSong(nextSong.audioUrl, nextSong);
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
                    <i className='fa fa-step-forward' onClick = {() => this.handleForward()}></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerBar