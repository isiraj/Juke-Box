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
                    {console.log(this.props.album_data)}
                </div>
            </div>
        )
    }
}

export default AllAlbums

// .map((album) => <Album info = {{album_name: album["name"], artist_name: album["artist"]["name"]}}/>)