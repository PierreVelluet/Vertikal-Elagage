import React from 'react';
import './Video.css'

function Video() {
    return(
        <div className='Video'>
            <iframe width="860" height="415" src="https://www.youtube.com/embed/mg7netw1JuM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
};

export default Video;