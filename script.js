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

// Reset all 'selected' icons, remove confetti
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
  stopConfetti();
  removeConfetti();
}

// Reset score & playerChoice/computerChoice
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resultText.textContent = "";
  resetSelected();
}
window.resetAll = resetAll;

// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = "rock";
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = "paper";
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = "scissors";
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

// Add 'selected' styling & computerChoice
function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}
