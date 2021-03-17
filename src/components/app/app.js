import React, { useState, useEffect } from 'react';

import Card from "../cards";

import cardsData from "../../cards";
import './app.css'

const App = () => {

    const newCards = [];

    const shuffle = () => {
        cardsData.sort(() => Math.random() - 0.5);
        for(let i = 0; i < 6; i++) {
            newCards.push(cardsData[i], cardsData[i]);
        }
        return newCards.sort(() => Math.random() - 0.5);
    }

    shuffle();
    const [cards] = useState(newCards);
    const [openCards, setOpen] = useState([]);
    const [matched, setMatched] = useState([]);

    const onClickCard = (index) => {
        setOpen((opened) => [...opened, index])
    }

    useEffect(() => {
        const firstMach = cards[openCards[0]];
        const secondMach = cards[openCards[1]];

        if (secondMach && firstMach.id === secondMach.id) {
            setMatched(() => [...matched, firstMach.id]);
        }

        if (openCards.length === 2) setTimeout(() => setOpen([]), 1000);

    }, [cards, matched, openCards]);

        return (
            <div className='container' >
                <div className='cards'>
                {cards.map((elem,index) => {
                    let flipCard;
                    flipCard = openCards.includes(index);
                    if (matched.includes(elem.id)) flipCard = true;
                 return <Card cards={elem} index={index} flipCard={flipCard} onClickCard={onClickCard} key={index}/>
                })
                }
                </div>
            </div>
        );
};


export default App;