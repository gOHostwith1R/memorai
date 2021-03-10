import React, { Component } from 'react';

import Card from "../cards";
import cards from "../../cards";
import './app.css'

export default class App extends Component {

    newCards = [];

    shuffle = () => {
        cards.sort(() => Math.random() - 0.5);
        for(let i = 0; i < 6; i++) {
            this.newCards.push(cards[i], cards[i]);
        }
        return this.newCards.sort(() => Math.random() - 0.5);
    }

    render() {
        this.shuffle()

        return (
            <div className='container'>
                <Card cards={ this.newCards } />
            </div>
        );
    }
}