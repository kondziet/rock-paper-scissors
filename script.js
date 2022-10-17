const userScoreDisplay = document.querySelector("#player-score")
const computerScoreDisplay = document.querySelector("#computer-score")
const buttons = document.querySelectorAll(".button")

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
    
    let playerChoice = e.target.getAttribute("data-key")
    let score = getScore(playerChoice, getComputerChoice())

    if (score == "user") {
        userScoreDisplay.textContent = `${++userScore}`
    } else if (score == "computer") {
        computerScoreDisplay.textContent = `${++computerScore}`
    }

    if (userScore == 3) {
        buttons.disabled = true
    }else if (computerScore == 3) {
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