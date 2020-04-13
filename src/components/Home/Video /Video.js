import React from 'react';
import './Video.css'

const Video = () => {
    return(
        <div className='Video'>
            <iframe title='someVideo' width="860" height="415" src="https://www.youtube.com/embed/mg7netw1JuM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
};

export default Video;