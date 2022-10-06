const userInput = document.querySelector("#user-input")
const userScoreDisplay = document.querySelector("#user-score")
const computerScoreDisplay = document.querySelector("#computer-score")
const playButton = document.querySelector("#play-button")
const gameStatus = document.querySelector("#game-status")

let userScore = 0
let computerScore = 0

const weapons = [
    "rock",
    "paper",
    "scissors"
]

const whatBeatsWhat = new Map()
whatBeatsWhat.set("rock", "scissors")
whatBeatsWhat.set("paper", "rock")
whatBeatsWhat.set("scissors", "paper")

function playGame() {
    
    let userChoice = userInput.value.toLowerCase()
    let score = playRound(userChoice, getComputerChoice())

    if (score == "user") {
        userScoreDisplay.textContent = `User score: ${++userScore}`
        gameStatus.textContent = "User wins!"
    } else if (score == "computer") {
        computerScoreDisplay.textContent = `Computer score: ${++computerScore}`
        gameStatus.textContent = "Computer wins!"
    } else {
        gameStatus.textContent = "Draw!"
    }

    if (userScore == 3) {
        gameStatus.textContent = "User won!"
        playButton.disabled = true
    }else if (computerScore == 3) {
        gameStatus.textContent = "Computer won!"
        playButton.disabled = true
    }

}

function getComputerChoice() {
    return weapons[Math.floor(Math.random() * weapons.length)]
}

function playRound(userChoice, computerChoice) {
    
    if (userChoice == computerChoice) {
        return "draw"
    }

    if (whatBeatsWhat.get(userChoice) == computerChoice) {
        return "user"
    } else {
        return "computer"
    }
}

playButton.addEventListener("click", playGame)