const userChoice = document.querySelector("#user-input")
const playButton = document.querySelector("button")
const gameStatus = document.querySelector("#game-status")

const weapons = [
    "rock",
    "paper",
    "scissors"
]

function getComputerChoice() {
    return weapons[Math.floor(Math.random() * weapons.length)]
}