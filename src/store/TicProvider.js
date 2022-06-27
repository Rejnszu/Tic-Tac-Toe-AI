import { useState } from "react";
import TicContext from "./tic-context";

const TicProvider = (props) => {
  const [scoreBoard, setScoreBoard] = useState([
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
  const [playerStatus, setPlayerStatus] = useState("X");
  function scoreBoardHandler(scoreBoard) {
    setScoreBoard(scoreBoard);
  }
  function playerStatusHandlerX() {
    setPlayerStatus("X");
  }
  function playerStatusHandlerO() {
    setPlayerStatus("O");
  }
  const ticContext = {
    scoreBoard: scoreBoard,
    scoreBoardHandler: scoreBoardHandler,
    playerStatus: playerStatus,
    playerStatusHandlerX: playerStatusHandlerX,
    playerStatusHandlerO: playerStatusHandlerO,
  };
  return (
    <TicContext.Provider value={ticContext}>
      {props.children}
    </TicContext.Provider>
  );
};

export default TicProvider;
