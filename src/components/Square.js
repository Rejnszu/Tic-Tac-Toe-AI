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
    // BLOCK CONDITIONS
    if (
      scoreBoard[0][0] === "X" &&
      scoreBoard[1][0] === "X" &&
      scoreBoard[2][0] === ""
    ) {
      scoreBoard[2][0] = "O";
      scoreBoard[2][1] = true;
    } else if (
      scoreBoard[0][0] === "X" &&
      scoreBoard[2][0] === "X" &&
      scoreBoard[1][0] === ""
    ) {
      scoreBoard[1][0] = "O";
      scoreBoard[1][1] = true;
    } else if (
      scoreBoard[1][0] === "X" &&
      scoreBoard[2][0] === "X" &&
      scoreBoard[0][0] === ""
    ) {
      scoreBoard[0][0] = "O";
      scoreBoard[0][1] = true;
    } else if (
      scoreBoard[3][0] === "X" &&
      scoreBoard[4][0] === "X" &&
      scoreBoard[5][0] === ""
    ) {
      scoreBoard[5][0] = "O";
      scoreBoard[5][1] = true;
    } else if (
      scoreBoard[3][0] === "X" &&
      scoreBoard[5][0] === "X" &&
      scoreBoard[4][0] === ""
    ) {
      scoreBoard[4][0] = "O";
      scoreBoard[4][1] = true;
    } else if (
      scoreBoard[4][0] === "X" &&
      scoreBoard[5][0] === "X" &&
      scoreBoard[3][0] === ""
    ) {
      scoreBoard[3][0] = "O";
      scoreBoard[3][1] = true;
    } else if (
      scoreBoard[6][0] === "X" &&
      scoreBoard[7][0] === "X" &&
      scoreBoard[8][0] === ""
    ) {
      scoreBoard[8][0] = "O";
      scoreBoard[8][1] = true;
    } else if (
      scoreBoard[6][0] === "X" &&
      scoreBoard[8][0] === "X" &&
      scoreBoard[7][0] === ""
    ) {
      scoreBoard[7][0] = "O";
      scoreBoard[7][1] = true;
    } else if (
      scoreBoard[7][0] === "X" &&
      scoreBoard[8][0] === "X" &&
      scoreBoard[6][0] === ""
    ) {
      scoreBoard[6][0] = "O";
      scoreBoard[6][1] = true;
    } else if (
      scoreBoard[0][0] === "X" &&
      scoreBoard[3][0] === "X" &&
      scoreBoard[6][0] === ""
    ) {
      scoreBoard[6][0] = "O";
      scoreBoard[6][1] = true;
    } else if (
      scoreBoard[0][0] === "X" &&
      scoreBoard[6][0] === "X" &&
      scoreBoard[3][0] === ""
    ) {
      scoreBoard[3][0] = "O";
      scoreBoard[3][1] = true;
    } else if (
      scoreBoard[3][0] === "X" &&
      scoreBoard[6][0] === "X" &&
      scoreBoard[0][0] === ""
    ) {
      scoreBoard[0][0] = "O";
      scoreBoard[0][1] = true;
    } else if (
      scoreBoard[1][0] === "X" &&
      scoreBoard[4][0] === "X" &&
      scoreBoard[7][0] === ""
    ) {
      scoreBoard[7][0] = "O";
      scoreBoard[7][1] = true;
    } else if (
      scoreBoard[1][0] === "X" &&
      scoreBoard[7][0] === "X" &&
      scoreBoard[4][0] === ""
    ) {
      scoreBoard[4][0] = "O";
      scoreBoard[4][1] = true;
    } else if (
      scoreBoard[4][0] === "X" &&
      scoreBoard[7][0] === "X" &&
      scoreBoard[1][0] === ""
    ) {
      scoreBoard[1][0] = "O";
      scoreBoard[1][1] = true;
    } else if (
      scoreBoard[2][0] === "X" &&
      scoreBoard[5][0] === "X" &&
      scoreBoard[8][0] === ""
    ) {
      scoreBoard[8][0] = "O";
      scoreBoard[8][1] = true;
    } else if (
      scoreBoard[2][0] === "X" &&
      scoreBoard[8][0] === "X" &&
      scoreBoard[5][0] === ""
    ) {
      scoreBoard[5][0] = "O";
      scoreBoard[5][1] = true;
    } else if (
      scoreBoard[5][0] === "X" &&
      scoreBoard[8][0] === "X" &&
      scoreBoard[2][0] === ""
    ) {
      scoreBoard[2][0] = "O";
      scoreBoard[2][1] = true;
    } else if (
      scoreBoard[0][0] === "X" &&
      scoreBoard[4][0] === "X" &&
      scoreBoard[8][0] === ""
    ) {
      scoreBoard[8][0] = "O";
      scoreBoard[8][1] = true;
    } else if (
      scoreBoard[0][0] === "X" &&
      scoreBoard[8][0] === "X" &&
      scoreBoard[4][0] === ""
    ) {
      scoreBoard[4][0] = "O";
      scoreBoard[4][1] = true;
    } else if (
      scoreBoard[4][0] === "X" &&
      scoreBoard[8][0] === "X" &&
      scoreBoard[0][0] === ""
    ) {
      scoreBoard[0][0] = "O";
      scoreBoard[0][1] = true;
    }
    // Basic conditions
    else if (scoreBoard[4][0] === "") {
      scoreBoard[4][0] = "O";
      scoreBoard[4][1] = true;
      console.log("wtf");
    } else if (scoreBoard[6][0] === "") {
      scoreBoard[6][0] = "O";
      scoreBoard[6][1] = true;
    } else if (scoreBoard[2][0] === "") {
      scoreBoard[2][0] = "O";
      scoreBoard[2][1] = true;
    } else if (scoreBoard[8][0] === "") {
      scoreBoard[8][0] = "O";
      scoreBoard[8][1] = true;
    } else if (scoreBoard[0][0] === "") {
      scoreBoard[0][0] = "O";
      scoreBoard[0][1] = true;
    } else {
      do {
        randomNumber = Math.round(Math.random() * (scoreBoard.length - 1));
      } while (scoreBoard[randomNumber][0] !== "");

      scoreBoard[randomNumber][0] = "O";
      scoreBoard[randomNumber][1] = true;
    }
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
