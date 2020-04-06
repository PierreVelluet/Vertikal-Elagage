import React, {useState, useEffect} from 'react';
import './GoldenBook.css';
import Star from './Star/Star';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '@material-ui/core/Modal';


const GoldenBook = () => {

    const [comments, setComments] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3002/api/comments').then(result => {
        setComments(result.data)
        })
    }, []);

    return (
        
        <div className='CommentBox'>
            {comments.map((element, index) => {
            return  <div key={index} className='Comment'>
                        <div className='StarBox'>
                            {[...Array(element.stars)].map((e, i) => <Star key={i}/>)}
                        </div>
                        <p className='Text'>"{element.message}"</p>
                        <p className='Name'>{element.name}</p>
                    </div>
            })}
            
        </div>
    )
}

export default GoldenBook;