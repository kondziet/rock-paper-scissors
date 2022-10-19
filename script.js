const userScoreDisplay = document.querySelector("#player-score")
const computerScoreDisplay = document.querySelector("#computer-score")
const buttonsContainer = document.querySelector(".buttons-container")
const buttons = document.querySelectorAll(".button")
const gameStatus = document.querySelector("#game-status")
const main = document.querySelector("main")

const newGameButton = document.querySelector(".new-game")
newGameButton.addEventListener("click", newGame)

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

function playRound(e) {
    
    let playerChoice = e.target.parentElement.getAttribute("data-key")
    let score = getScore(playerChoice, getComputerChoice())

    if (score == "user") {
        userScoreDisplay.textContent = `${++userScore}`
        gameStatus.textContent = "User win!"
    } else if (score == "computer") {
        computerScoreDisplay.textContent = `${++computerScore}`
        gameStatus.textContent = "Computer win!"
    } else {
        gameStatus.textContent = "Draw!"
    }

    if (userScore == 5) {
        gameStatus.textContent = "User won!"
        gameOver();
    }else if (computerScore == 5) {
        gameStatus.textContent = "Computer won!"
        gameOver();
    }

}

function gameOver() {
    buttons.forEach(button => {
        button.disabled = true
        button.classList.remove("hover")
    })

    buttonsContainer.classList.add("disabled")

    newGameButton.style.display = "block"
}

function newGame() {
    newGameButton.style.display = "none"
    buttonsContainer.classList.remove("disabled")
    buttons.forEach(button => {
        button.disabled = false
        button.classList.add("hover")
    })

    userScore = 0
    computerScore = 0

    userScoreDisplay.textContent = 0
    computerScoreDisplay.textContent = 0
    gameStatus.textContent = ""
}

function getComputerChoice() {
    return weapons[Math.floor(Math.random() * weapons.length)]
}

function getScore(userChoice, computerChoice) {
    
    if (userChoice == computerChoice) {
        return "draw"
    }

    if (whatBeatsWhat.get(userChoice) == computerChoice) {
        return "user"
    } else {
        return "computer"
    }
}

buttons.forEach(button => button.addEventListener('click', playRound))