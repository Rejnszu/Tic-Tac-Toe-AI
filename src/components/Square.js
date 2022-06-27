import { useEffect, useContext } from "react";
import React from "react";
import styles from "./Square.module.css";
import TicContext from "../store/tic-context";
let computerTurn = false;
let scoreBoard = [
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
  ["", false],
];

export default function Square(props) {
  const context = useContext(TicContext);

  function squareActionsHandler() {
    computerTurn = true;
    if (!props.isClicked) {
      scoreBoard[props.count][1] = true;
      scoreBoard[props.count][0] = props.playerStatus;
      context.scoreBoardHandler(scoreBoard);

      if (props.playerStatus === "X" && !props.gameIsFinished) {
        setTimeout(() => {
          AutoPlay();
        }, 1);
        console.log(props.playerStatus);
        context.playerStatusHandlerO();
      } else {
        return;
      }
    }

    props.checkWinner();

    setTimeout(() => context.playerStatusHandlerX(), 800);
  }

  function AutoPlay() {
    let randomNumber = Math.round(Math.random() * (scoreBoard.length - 1));
    while (scoreBoard[randomNumber][0] !== "") {
      randomNumber = Math.round(Math.random() * (scoreBoard.length - 1));
    }

    scoreBoard[randomNumber][0] = "O";
    scoreBoard[randomNumber][1] = true;

    props.checkWinner();
    computerTurn = false;
  }

  useEffect(() => {
    if (props.gameIsFinished) {
      scoreBoard = [
        ["", false],
        ["", false],
        ["", false],
        ["", false],
        ["", false],
        ["", false],
        ["", false],
        ["", false],
        ["", false],
      ];
    }
  }, [props.gameIsFinished, props.playerStatus]);

  return (
    <button
      disabled={props.gameIsFinished}
      onClick={!computerTurn ? squareActionsHandler : undefined}
      className={`${styles.square} ${
        props.value === "X" ? styles.x : styles.y
      }`}
    >
      {props.value}
      {!props.isClicked &&
        !props.gameIsFinished &&
        props.playerStatus !== "O" && (
          <div className={styles.hint}>{props.playerStatus}</div>
        )}
    </button>
  );
}
