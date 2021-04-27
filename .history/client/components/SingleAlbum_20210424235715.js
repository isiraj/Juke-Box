import React from 'react'
import Album from './Album'
// import Songs from './Songs'

class SingleAlbum extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className='container'>
                <div id='albums' className='row wrap'>
                    {/* <Album key={this.props.album_data["id"]} info = {{album_cover: this.props.album_data["artworkUrl"], album_name: this.props.album_data["name"], artist_name: this.props.album_data["artist"]["name"]}}/> */}
                </div>
            </div>
        )
    }
}

export default SingleAlbum