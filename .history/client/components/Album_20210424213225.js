import React from "react"

class Album extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='album'>
                <a>
                    <img src='default-album.jpg' />
                        <p>{this.props.info.album_name}</p>
                    <small>{this.props.info.artist_name}</small>
                </a>
            </div>
        )
    }
}

export default Album