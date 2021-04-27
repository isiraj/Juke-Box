import React from "react"

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
                </tbody>
            </table>
            
        )
    }
}

export default Songs