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
let randomNumber;
export default function Square(props) {
  const context = useContext(TicContext);

  function squareActionsHandler() {
    computerTurn = true;
    if (!props.isClicked) {
      scoreBoard[props.count][1] = true;
      scoreBoard[props.count][0] = context.playerStatus;
      context.scoreBoardHandler(scoreBoard);
      props.checkWinner();

      if (context.playerStatus === "X" && !props.gameIsFinished) {
        setTimeout(() => {
          AutoPlay();
        }, 1);

        context.playerStatusHandlerO();
      }
    }

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
    setTimeout(() => context.playerStatusHandlerX(), 800);
  }

  function AutoPlay() {
    do {
      randomNumber = Math.round(Math.random() * (scoreBoard.length - 1));
    } while (scoreBoard[randomNumber][0] !== "");

    scoreBoard[randomNumber][0] = "O";
    scoreBoard[randomNumber][1] = true;

    props.checkWinner();
    computerTurn = false;
  }

  useEffect(() => {
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
  }, [props.gameIsFinished]);

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
        context.playerStatus !== "O" && (
          <div className={styles.hint}>{context.playerStatus}</div>
        )}
    </button>
  );
}
