import React from "react"

class Song extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <tr>
                <td><i className='fa fa-play-circle' onClick = {this.props.songAudio}/></td>
                <td>{this.props.info.songId}</td>
                <td>{this.props.info.songName}</td>
                <td>{this.props.info.songArtist}</td>
                <td>{this.props.info.songGenre}</td>
            </tr> 
        )
    }
}

export default Song