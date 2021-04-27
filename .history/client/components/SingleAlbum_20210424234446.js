import React from 'react'
import Album from './Album'
// import Songs from './Songs'

class SingleAlbum extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <Album key={this.props.album_data[1]["id"]} info = {{album_cover: this.props.album_data[0]["artworkUrl"], album_name: this.props.album_data[0]["name"], artist_name: this.props.album_data[0]["artist"]["name"]}}/>
            
        )
    }
}

export default SingleAlbum