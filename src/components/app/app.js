import React, { useState } from 'react';

import Card from "../cards";

import cards from "../../cards";
import './app.css'

const App = () => {

    const [openCard, setOpenCard] = useState([]);
    const newCards = [];

    const shuffle = () => {
        cards.sort(() => Math.random() - 0.5);
        for(let i = 0; i < 6; i++) {
            newCards.push(cards[i], cards[i]);
        }
        return newCards.sort(() => Math.random() - 0.5);
    }

    const onClickCard = (index, cards) => {
        setOpenCard((opened) => [...opened, index])
        console.log(openCard)
    }

    shuffle();

        return (
            <div className='container' >
                <div className='cards'>
                {newCards.map((elem,index) => {
                    let flipCard;
                    flipCard = openCard.includes(index);

                 return <Card cards={elem} index={index} flipCard={flipCard} onClickCard={onClickCard} key={index}/>
                })
                }
                </div>
            </div>
        );
};


export default App;