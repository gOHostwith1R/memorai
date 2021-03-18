import React, { useState, useEffect} from 'react';

import Card from "../cards";

import cardsData from "../../cards";
import './app.css'

const App = () => {

    const [openCards, setOpen] = useState([]);
    const [matched, setMatched] = useState([]);
    let [counterMistakes, setCounterMistakes] = useState(0)
    let [counterSuccessful, setCounterSuccessful] = useState(0);

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

    const onCardClick = (index) => {
        setOpen((opened) => [...opened, index])
    };


    useEffect(() => {
        const firstMach = cards[openCards[0]];
        const secondMach = cards[openCards[1]];

        if (secondMach && firstMach.id === secondMach.id) {
            setMatched(() => [...matched, firstMach.id]);
            setCounterSuccessful(counterSuccessful + 1);
        }

        if (openCards.length === 2) setTimeout(() => setOpen([]), 1000);
        if (openCards.length === 2) setCounterMistakes(counterMistakes + 1);

    }, [openCards]);

        return (
            <div className='container' >
                <div className='statistics'>
                    <span className='counter'>Guessed pairs of card:{counterSuccessful}</span>
                    <span className='counter-mistakes'>Counter mistakes:{counterMistakes}</span>
                </div>
                <div className='cards'>
                {cards.map((elem,index) => {
                    let flipCard;
                    flipCard = openCards.includes(index);
                    if (matched.includes(elem.id)) flipCard = true;
                 return <Card card={elem}
                              index={index}
                              flipCard={flipCard}
                              onCardClick={onCardClick}
                              key={index}/>
                })
                };
                </div>
            </div>
        );
};


export default App;