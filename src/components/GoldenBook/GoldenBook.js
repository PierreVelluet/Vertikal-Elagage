import React, {useState} from 'react';
import './GoldenBook.css'
import Star from './Star/Star';

const GoldenBook = () => {

    const [comments, setComments] = useState([
        {
            name: 'Helene L',
            text: 'super travail de professionnel. A recommander. Merci',
            stars: [1, 1, 1, 1, 1]
        },
        {
            name: 'François L',
            text: 'Un vrai travail de Pro...Vite fait bien fait en toute sécurité...Taillé, coupé, nettoyé, évacué ...En plus 2 gars très sympa...Je recommande à 100%...',
            stars: [1, 1, 1, 1, 1]
        },
        {
            name: 'Alain S',
            text: 'Du super boulot fait dans mon jardin . Un pro qui connait bien son taff.',
            stars: [1, 1, 1, 1, 1]
        }
    ])

    const addComment = () => {
        setComments([
            ...comments,
            {
                
            }
        ])
    }


    return (
        <div className='CommentBox'>
            {comments.map(element => {
            return  <div className='Comment'>
                        <div className='StarBox'>
                            {element.stars.map(element => <Star />)}
                        </div>
                        <p className='Text'>"{element.text}"</p>
                        <p className='Name'>{element.name}</p>
                    </div>
            })}
        </div>
    )
}

export default GoldenBook;