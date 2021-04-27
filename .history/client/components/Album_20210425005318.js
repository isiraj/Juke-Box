import React from "react"

class Album extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='album'>
                <a onClick = {this.props.handleClick}>
                    <img src={this.props.info.album_cover} />
                        <p>{this.props.info.album_name}</p>
                    <small>{this.props.info.artist_name}</small>
                </a>
            </div>
        )
    }
}

export default Album