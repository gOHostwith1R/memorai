import React, { Component } from 'react';
import './card.css'


export default class Card extends Component {

    id = 100;

    render() {
        const { cards } = this.props;
        return cards.map((elem) => {
           return (<img className='card'
                       src={`images/cards/${elem}`}
                       alt={elem} key={this.id++}/>)
        });
    };
};