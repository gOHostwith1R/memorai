import React from 'react';
import './card.css'

const Card = ( { card, index, flipCard, onCardClick}) => {

    return (
        <div className={`card-card ${ flipCard ? 'flipped' : ''}`}
             onClick={() => onCardClick(index, card.name)}
             key={index}>
                   <div className='inner'>
                       <div className='front' >
                            <img className='image-card'
                            src={`images/cards/${card.image}`}
                            alt={card.name}
                            />
                        </div>
                        <div className='back' > </div>
                   </div>
        </div>
    );
};

export default Card;
