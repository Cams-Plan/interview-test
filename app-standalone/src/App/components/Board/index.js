import React from "react";
import PropTypes from 'prop-types';

import Square from '../Square';

/**
 * A board for the game of tic-tac-toe.  A 3x3 square.
 */
const Board = ({onClick, squares, winningMoves}) => {

    const renderSquare = (i, winner) => (
        <Square
            value={squares[i]}
            onClick={() => onClick(i)}
            key={i}
            winner={winner}
        />
    );

    return (
        <div>
          {/* cf-camille: Each div has a map function to render the square components instead of hard-coding every single function*/}
            <div className="board-row">
              {squares.map((square, index)=> {
                if (index <= 2) {
                  return  (winningMoves && winningMoves.includes(index) ? renderSquare(index, true): renderSquare(index, false))
                }
                 
              })}
            </div>
            <div className="board-row">
              {squares.map((square, index)=> {
                if (index > 2 && index <=5) {
                  return  (winningMoves && winningMoves.includes(index) ? renderSquare(index, true): renderSquare(index, false))
                }  
              })}
            </div>
            <div className="board-row">
              {squares.map((square, index)=> {
                if (index > 5 && index <=8) {
                  return  (winningMoves && winningMoves.includes(index) ? renderSquare(index, true): renderSquare(index, false))
                }    
              })}
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
