import React from "react";

import './component-win.css';

const ComponentWin = ({ visibility }) => {
  return (
      <h1 className={`component-win ${visibility ? 'visibility' : ''}`}>You Won!! Restart game? Click Start Game again</h1>
  );
};
export default ComponentWin;