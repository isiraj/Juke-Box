import React from 'react'
import Album from './Album'
import Songs from './Songs'

class SingleAlbum extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(

            <Album key={album[0]["id"]} info = {{album_cover: album[0]["artworkUrl"], album_name: album[0]["name"], artist_name: album[0]["artist"]["name"]}}/>
            
        )
    }
}

export default SingleAlbum