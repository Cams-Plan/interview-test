import React from "react";
import PropTypes from 'prop-types';

import Square from '../Square';

/**
 * A board for the game of tic-tac-toe.  A 3x3 square.
 */
const Board = ({onClick, squares}) => {
  
  const highlightWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    
  }

    const renderSquare = (i) => (
        <Square
            value={squares[i]}
            onClick={() => onClick(i)}
            key={i}
        />
    );

    return (
        <div>
          {/* cf-camille: Each div has a map function to render the square components instead of hard-coding every single function*/}
            <div className="board-row">
              {squares.map((square, index)=> (
                index <= 2 ? renderSquare(index) : null
              ))}
            </div>
            <div className="board-row">
              {squares.map((square, index)=> (
                index > 2 && index <=5 ? renderSquare(index) : null
              ))}
            </div>
            <div className="board-row">
              {squares.map((square, index)=> (
                index > 5 && index <=8 ? renderSquare(index) : null
              ))}
            </div>
        </div>
    )
};

Board.propTypes = {
    /**
     *  The 1..9 array of squares to display
     */
    squares: PropTypes.array.isRequired,

    /**
     *  The handler for when a square is clicked
     */
    onClick: PropTypes.func
};

export default Board;
