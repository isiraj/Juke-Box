import React from "react"

class Song extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <tr>
                <td><i className='fa fa-play-circle' /></td>
                <td>1</td>
                <td>Song Name</td>
                <td>Artist Name</td>
                <td>Song Genre</td>
            </tr> 
        )
    }
}

export default Song