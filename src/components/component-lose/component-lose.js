import React from "react";

import './component-lose.css'

const ComponentLose = ({ visibility }) => {
    return(
      <h1 className={`component-lose ${visibility ? 'visibility' : ''}`}>You Lose. Click Start Game again</h1>
    );
};

export default ComponentLose;