import React from "react"

class PlayerBar extends React.Component{
    constructor(){
        super()
    }

    render(){
        console.log(this.props.currentSong.audioUrl)
        return(
            this.props.playStatus === true ? 
                <div id='player-container'>
                    <div id='player-controls'>
                        <div className='row center'>
                        <i onClick = {this.props.playSong(this.props.currentSong.audioUrl, this.props.currentSong)} className='fa fa-step-backward'></i>
                        <i className='fa fa-pause-circle'></i>
                        <i className='fa fa-step-forward'></i>
                        </div>
                    </div>
                </div>
            : " "
        )
    }
}

export default PlayerBar