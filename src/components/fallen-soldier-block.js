import React from 'react';

import '../index.css';
import Square from './square.js';
const screenWidth = window.screen.width
const screenHeight = window.screen.height
const screenChecker = () => {
  console.log(screenWidth)
  if(screenWidth > 490){
    return 'board-row-black'
  }
  if(screenWidth <= 490){
    return 'board-row-white'
  }
}
export default class FallenSoldierBlock extends React.Component {

  renderSquare(square, i, squareShade) {
    return <Square
      key={i}
      keyVal={i}
      piece={square}
      style={square.style}
    />
  }

  render() {
    return (
        <div className={screenChecker()}>{this.props.blackFallenSoldiers.map((bs, index) =>
          <div className='killed'>{this.renderSquare(bs, index)}</div>
        )}</div>
    );
  }
}

