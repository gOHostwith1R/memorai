import React, { useState, useEffect} from 'react';

import Card from "../cards";
import ButtonGame from "../button-game";
import ComponentWin from "../component-win";
import ComponentLose from "../component-lose";

import cardsData from "../../cards";
import './app.css'

const App = () => {

    let [openCards, setOpen] = useState([]);
    let [matched, setMatched] = useState([]);
    let [counterMistakes, setCounterMistakes] = useState(0)
    let [counterSuccessful, setCounterSuccessful] = useState(0);
    let [cards, setCards] = useState([]);
    let [visibilityWin, setVisibilityWin] = useState(false);
    let [visibilityLose, setVisibilityLose] = useState(false);

    let newCards = [];

    const shuffle = () => {
        cardsData.sort(() => Math.random() - 0.5);
        for(let i = 0; i < 6; i++) {
            newCards.push(cardsData[i], cardsData[i]);
        }
        newCards.sort(() => Math.random() - 0.5);
        setCards(cards = [...newCards]);
    }


    const startGame = () => {
        shuffle();
        cards.map((elem, index) => {
            return setOpen((elem) => {
                return [...elem, index];
            });
        });
        setTimeout(() => setOpen([]), 3000);
        setCounterMistakes(counterMistakes = 0);
        setCounterSuccessful(counterSuccessful = 0);
        setMatched(matched = []);
        setVisibilityWin(visibilityWin = false);
        setVisibilityLose(visibilityLose = false);
    };


    const onCardClick = (index) => {
        setOpen((opened ) => [...opened, index]);
    };


    useEffect(() => {
        const firstMach = cards[openCards[0]];
        const secondMach = cards[openCards[1]];

        if (secondMach && firstMach.id === secondMach.id) {
            setMatched(() => [...matched, firstMach.id]);
            setCounterSuccessful(counterSuccessful + 1);
        }
        if (secondMach && firstMach.id !== secondMach.id) {
            setCounterMistakes(counterMistakes + 1);
        }

        if (openCards.length === 2) setTimeout(() => setOpen([]), 500);

    }, [openCards]);


    useEffect(() => {
       if(counterSuccessful === 6) {
           setVisibilityWin(!visibilityWin);
       }
    }, [matched]);

    useEffect(() => {
        if(counterMistakes === 10) {
            setVisibilityLose(!visibilityLose);
        }
    }, [counterMistakes]);


        return (
            <div className='container' >
                <div className='statistics'>
                    <span className='counter'>Guessed pairs of card:{counterSuccessful}</span>
                    <ButtonGame startGame={startGame}/>
                    <span className='counter-mistakes'>Counter mistakes:{counterMistakes}</span>
                </div>
                <ComponentWin visibility = {visibilityWin}/>
                <ComponentLose visibility = {visibilityLose}/>
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
                }
                </div>
            </div>
        );
};


export default App;