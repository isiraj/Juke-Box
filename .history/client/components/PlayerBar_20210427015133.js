import React from "react"

class PlayerBar extends React.Component{
    constructor(){
        super()
    }

    render(){
        console.log(this.props.currentSong[0])
        return(
            this.props.playStatus === true ? 
                <div id='player-container'>
                    <div id='player-controls'>
                        <div className='row center'>
                        <i className='fa fa-step-backward'></i>
                        <i onClick = {this.props.playSong(this.props.currentSong[0].audioUrl, this.props.currentSong[0])} className='fa fa-pause-circle'></i>
                        <i className='fa fa-step-forward'></i>
                        </div>
                    </div>
                </div>
            : " "
        )
    }
}

export default PlayerBar