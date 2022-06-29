import React from "react";

const TicContext = React.createContext({
  scoreBoard: [],
  playerStatus: "",
  scoreBoardHandler: () => {},
  playerStatusHandlerX: () => {},
  playerStatusHandlerO: () => {},
});

export default TicContext;
