import React from 'react'
import Album from './Album'
// import Songs from './Songs'

class SingleAlbum extends React.Component{
    constructor(){
        super()
    }

    render(){
        console.log(this.props.album_data[0]["artworkUrl"])
        return(
            <div className='container'>
                <div id='albums' className='row wrap'>
                    {/* <Album key={this.props.album_data[0].id} info = {{album_cover: this.props.album_data[0]["artworkUrl"], album_name: this.props.album_data[0]["name"], artist_name: this.props.album_data[0]["artist"]["name"]}}/> */}
                    {this.props.album_data.map((album) => <Album key={album["id"]} info = {{album_cover: album["artworkUrl"], album_name: album["name"], artist_name: album["artist"]["name"]}}/>)}
                </div>
            </div>
        )
    }
}

export default SingleAlbum