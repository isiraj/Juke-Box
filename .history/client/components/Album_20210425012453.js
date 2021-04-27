import React from "react"

class Album extends React.Component{
    constructor(){
        super()
    }
    render(){
        console.log(this.props.info.album_name)
        return(
            <div className='album'>
                <a onClick = {this.props.handleClick(this.props.info.key)}>
                    <img src={this.props.info.album_cover} />
                        <p>{this.props.info.album_name}</p>
                    <small>{this.props.info.artist_name}</small>
                </a>
            </div>
        )
    }
}

export default Album