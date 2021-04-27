import React from "react"

class Album extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='album'>
                <a>
                    <img src='default-album.jpg' />
                        <p>ALBUM {this.props.info.id}</p>
                    <small></small>
                </a>
            </div>
        )
    }
}

export default Album