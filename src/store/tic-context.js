import React from "react";

const TicContext = React.createContext({
  scoreBoard: [],
  scoreBoardHandler: () => {},
  playerStatus: "",
  playerStatusHandlerX: () => {},
  playerStatusHandlerO: () => {},
});

export default TicContext;
