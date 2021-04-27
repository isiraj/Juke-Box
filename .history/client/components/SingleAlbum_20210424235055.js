import React from 'react'
import Album from './Album'
// import Songs from './Songs'

class SingleAlbum extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
           <Album key={this.props.album_data["id"]} info = {{album_cover: this.props.album_data["artworkUrl"]}}/>
        )
    }
}

export default SingleAlbum