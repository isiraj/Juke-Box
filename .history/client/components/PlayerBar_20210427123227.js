import React from "react"

class PlayerBar extends React.Component{
    constructor(){
        super()
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
                    <i className='fa fa-step-forward' onClick = {this.props.handleForward}></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerBar