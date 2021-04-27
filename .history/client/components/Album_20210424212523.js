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
                        <p>ALBUM {this.props.info.name}</p>
                    <small>{this.props.info.artist_name}</small>
                </a>
            </div>
        )
    }
}

export default Album