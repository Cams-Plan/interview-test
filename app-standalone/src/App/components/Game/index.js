import React, { useEffect, useState } from "react";
import Board from "../Board";
import NameForm from "../NameForm";
import WinnerTable from "../WinnersTable";

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
    const [gameHistory, setGameHistory] = useState([{ squares: Array(9).fill(null) }]); // Start of game
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const [winningMoves, setWinningMoves] = useState(null)
    const [players, setPlayers] = useState({X: "Player X", O: "Player O"})
    const [winTable, setWinTable] = useState([])

    const calculateWinner = (squares) => {
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

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                //cf-camille: only update the win table only if the game is at the end and if winning move isn't active, to remove duplicates.
                winningMoves && stepNumber == gameHistory.length - 1 ? null :
                setWinTable([...winTable, players[squares[a]]])

                // cf-camille: winning moves are established for triggering styling change
                setWinningMoves(lines[i])
                return squares[a];
            }
            // cf-camille: reverts state back if a player backtracks to a move number that isn't a winning one
            winningMoves ? setWinningMoves(null) : null 
        }

        return null;
    };

    const handleClick = (i) => {
        const history = gameHistory.slice(0, stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? "X" : "O";

        setGameHistory([...history, { squares }]);
        setStepNumber(history.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const current = gameHistory[stepNumber];
    // cf-camille: the winner's name is obtained by finding the square index value of a winning move (i chose index 0 but can be 0-2), and returning it's value (X or O) to the object bracket notation
    let winner = winningMoves && `${players[current.squares[winningMoves[0]]]}`

    const moves = gameHistory.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    // cf-camille: winner calculations are moved to useEffect so it's not continuously calling the a re-render on setWinningMoves
    useEffect(()=> {
        calculateWinner(current.squares)
    },[stepNumber])

    return (
        <div className="game">
            {stepNumber == 0 ? 
                <div className="name-form">
                    <NameForm 
                    setPlayers={setPlayers}
                    players={players}
                    />
                </div> : <h2 className="players-header"> {players.X} vs {players.O} </h2>
            }
            <div className="board-area">
                <div div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                    winningMoves={winningMoves}
                />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <ol>{moves}</ol>
                </div>
                <div className="win-column-container">
                    {/* <h2>Winner's Table</h2>
                    { winTable.length == 0 ? <p>No Winners Yet</p> : 
                        <ol>{winTable.map((win, index)=> {
                            return <li key={index}>{win}</li>
                        })}
                        </ol> } */}
                    <WinnerTable winTable={winTable} />
                </div>
                
            </div>
            
        </div>
    );
};

export default Game;
