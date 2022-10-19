const userScoreDisplay = document.querySelector("#player-score")
const computerScoreDisplay = document.querySelector("#computer-score")
const buttons = document.querySelectorAll(".button")
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
        buttons.disabled = true
    }else if (computerScore == 5) {
        gameStatus.textContent = "Computer won!"
        buttons.disabled = true
    }

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