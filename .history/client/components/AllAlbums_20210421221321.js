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
                    Hello
                    {/* <Album info={{id:1, artist_name: "Bruh"}}/>
                    <Album info={{id:2, artist_name: "Cho"}}/> */}
                </div>
            </div>
        )
    }
}

export default AllAlbums