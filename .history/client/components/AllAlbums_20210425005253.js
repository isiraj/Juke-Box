import React from "react"
import Album from "./Album"

class AllAlbums extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className='container'>
                <div id='albums' className='row wrap'>
                    {this.props.album_data.map((album) => <Album key={album["id"]} handleClick = {this.props.handleClick} info = {{album_cover: album["artworkUrl"], album_name: album["name"], artist_name: album["artist"]["name"]}}/>)}
                </div>
            </div>
        )
    }
}

export default AllAlbums