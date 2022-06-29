import React from "react";
import Board from "./components/Board";
import Square from "./components/Square";
import { useContext, useState } from "react";
import TicContext from "./store/tic-context";

const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let gameStatus;

function App() {
  const context = useContext(TicContext);
  const [gameIsFinished, setGameIsFinished] = useState(false);
  function resetGame() {
    context.scoreBoardHandler([
      ["", false],
      ["", false],
      ["", false],
      ["", false],
      ["", false],
      ["", false],
      ["", false],
      ["", false],
      ["", false],
    ]);
    context.playerStatusHandlerX();
    setGameIsFinished(false);
  }

  function checkWinner() {
    for (let i = 0; i < winningCondition.length; i++) {
      if (
        context.scoreBoard[winningCondition[i][0]][0] ===
          context.scoreBoard[winningCondition[i][1]][0] &&
        context.scoreBoard[winningCondition[i][1]][0] ===
          context.scoreBoard[winningCondition[i][2]][0] &&
        context.scoreBoard[winningCondition[i][0]][0] !== ""
      ) {
        gameStatus =
          "Player " + context.scoreBoard[winningCondition[i][0]][0] + " won";
        setGameIsFinished(true);
      }
    }
  }

  if (context.scoreBoard.every((score) => score[0] !== "") && !gameIsFinished) {
    gameStatus = "Tie";
    setGameIsFinished(true);
  }

  return (
    <React.Fragment>
      <div className="centered">
        {gameIsFinished ? (
          gameIsFinished && <p className="game-status">{gameStatus}</p>
        ) : (
          <p className="player-status">Current player:{context.playerStatus}</p>
        )}
      </div>
      <Board>
        {context.scoreBoard.map((button, i) => {
          return (
            <Square
              isClicked={button[1]}
              count={i}
              value={button[0]}
              key={i}
              gameIsFinished={gameIsFinished}
              checkWinner={checkWinner}
            />
          );
        })}
      </Board>

      {gameIsFinished && (
        <div className="blurred-background">
          <button onClick={resetGame} type="button" className="try-again">
            Play again
          </button>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
