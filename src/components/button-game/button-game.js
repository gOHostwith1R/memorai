import React from 'react';

import './button-game.css';

const ButtonGame = ({ startGame }) => {
    return (
        <button type='button' className='btn btn-primary'
                onClick={() => startGame()}
        >Start Game</button>
    )
};

export default ButtonGame;