import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById("player1Score");
const playerChoiceEl = document.getElementById("player1Choice");
const computerScoreEl = document.getElementById("computer1Score");
const computerChoiceEl = document.getElementById("computer1Choice");

const playerRock = document.getElementById("player1Rock");
const playerPaper = document.getElementById("player1Paper");
const playerScissors = document.getElementById("player1Scissors");
const playerLizard = document.getElementById("player1Lizard");
const playerSpock = document.getElementById("player1Spock");

const computerRock = document.getElementById("computer1Rock");
const computerPaper = document.getElementById("computer1Paper");
const computerScissors = document.getElementById("computer1Scissors");
const computerLizard = document.getElementById("computer1Lizard");
const computerSpock = document.getElementById("computer1Spock");

const allGameIcons = document.querySelectorAll(".far");
const resultText = document.getElementById("gameResultText");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = "";
