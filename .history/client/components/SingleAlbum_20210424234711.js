import React from 'react'
import Album from './Album'
// import Songs from './Songs'

class SingleAlbum extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            this.props.album_data.map((album) => <Album key={album["id"]} info = {{album_cover: album["artworkUrl"], album_name: album["name"], artist_name: album["artist"]["name"]}}/>)
        )
    }
}

export default SingleAlbum