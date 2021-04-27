import React from "react"
import Song from "./Song"

class Songs extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <table id='songs'>
                <tbody>
                    <tr className='gray'>
                        <td />
                        <td>#</td>
                        <td>Name</td>
                        <td>Artist</td>
                        <td>Genre</td>
                    </tr> 
                    {this.props.songsInfo.map((song) => <Song key = {song.id} info = {{songId: song.id, songName: song.name, songArtist: this.props.songArtist, songGenre: song.genre}}/>)}
                </tbody>
            </table>
            
        )
    }
}

export default Songs