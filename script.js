const userChoice = document.querySelector("#user-input")
const playButton = document.querySelector("#play-button")
const gameStatus = document.querySelector("#game-status")

const weapons = [
    "rock",
    "paper",
    "scissors"
]

const whatBeatsWhat = new Map()
whatBeatsWhat.set("rock", "scissors")
whatBeatsWhat.set("paper", "rock")
whatBeatsWhat.set("scissors", "paper")

function getComputerChoice() {
    return weapons[Math.floor(Math.random() * weapons.length)]
}

function playRound(userChoice, computerChoice) {
    
    if (userChoice == computerChoice) {
        return "It's a draw!"
    }

    if (whatBeatsWhat.get(userChoice) == computerChoice) {
        return "User wins game!"
    } else {
        return "Computer wins game!"
    }
}

playButton.addEventListener("click", ()=>gameStatus.textContent = playRound(userChoice.value, getComputerChoice()))