import React from "react"

class Album extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div class='album'>
                <a>
                    <img src='default-album.jpg' />
                        <p>ALBUM {this.props.number}</p>
                    <small>{this.props.artist_name}</small>
                </a>
            </div>
        )
    }
}

export default Album