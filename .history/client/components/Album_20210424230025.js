import React from "react"

class Album extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='album'>
                <a>
                    <img src={this.props.info.artworkUrl} />
                        <p>{this.props.info.album_name}</p>
                    <small>{this.props.info.artist_name}</small>
                </a>
            </div>
        )
    }
}

export default Album