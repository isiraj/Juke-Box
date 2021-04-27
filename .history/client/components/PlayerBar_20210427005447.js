import React from "react"

class PlayerBar extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            this.props.playStatus === true ? 
                <div id='player-container'>
                    <div id='player-controls'>
                        <div className='row center'>
                        <i className='fa fa-step-backward'></i>
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