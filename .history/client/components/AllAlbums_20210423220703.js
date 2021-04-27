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
                    <Album info={{id: 1, artist_name: "Billy"}}/>
                    <Album info={{id: 1, artist_name: "Billy"}}/>
                </div>
            </div>
        )
    }
}

export default AllAlbums