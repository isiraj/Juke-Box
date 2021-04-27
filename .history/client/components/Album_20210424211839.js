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
                        <p>ALBUM </p>
                    <small></small>
                </a>
            </div>
        )
    }
}

export default Album

// {this.props.info.id}
// {this.props.info.artist_name}