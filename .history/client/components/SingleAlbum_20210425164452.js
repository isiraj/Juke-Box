import React from 'react'
import Album from './Album'
import Songs from './Songs'

class SingleAlbum extends React.Component{
    constructor(){
        super()
    }

    render(){
        console.log(this.props.album_data[0].songs)
        return(
            <div className='container'>
                <div id='albums' className='row wrap'>
                    <Album key={this.props.album_data[0].id} info = {{album_cover: this.props.album_data[0]["artworkUrl"], album_name: this.props.album_data[0]["name"], artist_name: this.props.album_data[0]["artist"]["name"]}}/>
                    {/* <Album key={this.props.album_data.id} info = {{album_cover: this.props.album_data.artworkUrl, album_name: this.props.album_data.name, artist_name: this.props.album_data.artist.name}}/> */}
                </div>
                <Songs idPlaying = {this.props.idPlaying} songPlaying = {this.props.songPlaying} handleClick = {this.props.playSong} songsInfo = {this.props.album_data[0].songs} songArtist = {this.props.album_data[0]["artist"]["name"]}/>
            </div>
        )
    }
}

export default SingleAlbum