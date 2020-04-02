import React from 'react';
import './Star.css'

const Star = () => {
    return (
        <div className='StarContainer'>
            <img className='Star' src={require("./Star.png")} />
        </div>
    )
}

export default Star;