function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}
function startGame() {
    let info = document.getElementById('start-info');
    let buttonContainer = document.getElementById('button-container');
    let scoreboard = document.querySelector('.scoreboard');
    let gameMessage = document.querySelector('.game-message');

    // Hide the initial game info and show the buttons
    info.style.display = 'none';
    scoreboard.style.display = 'flex';
    gameMessage.style.display = 'block';
    buttonContainer.style.display = 'flex';

}

let p_score = 0;
let c_score = 0;
let roundsPlayed = 0;

document.querySelector('.fire').addEventListener('click', () => playGame('rock'));
document.querySelector('.water').addEventListener('click', () => playGame('paper'));
document.querySelector('.grass').addEventListener('click', () => playGame('scissors'));
document.querySelector('.start-button').addEventListener('click', () => startGame())


function playRound(playerChoice, computerChoice) {
    const winDictionary = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock",
    }

    if (playerChoice === computerChoice) {
        return 'draw'
    } else if (winDictionary[playerChoice] === computerChoice) {
        return 'win'
    } else {
        return 'lose'
    }
}

function addGameMessage(message) {
    var messageDiv = document.querySelector('.game-message');
    var newMessage = document.createElement("div");
    newMessage.textContent = message;
    newMessage.style.padding = "2px";
    messageDiv.appendChild(newMessage);

    messageDiv.scrollTop = messageDiv.scrollHeight;
}

function playGame(choice) {
    const playerScoreDiv = document.querySelector('.player-score');
    const computerScoreDiv = document.querySelector('.computer-score');

    if (roundsPlayed < 5) {
        let result = playRound(choice, getComputerChoice())

        if (result === 'draw') {
            let drawMessage = `A tie! The score is ${p_score} - ${c_score}`
            addGameMessage(drawMessage)
        } else if (result === 'win') {
            p_score++;
            playerScoreDiv.textContent = `Player Score: ${p_score}`;
            let winMessage = `You won this round! The score is ${p_score} - ${c_score}`
            addGameMessage(winMessage)
        } else {
            c_score++;
            computerScoreDiv.textContent = `Computer Score: ${c_score}`;
            let loseMessage = `You lost this round! The score is ${p_score} - ${c_score}`
            addGameMessage(loseMessage)
        }
        roundsPlayed++;
        if (roundsPlayed === 5) {
            evaluateFinalScore();
        }
    }
}

function evaluateFinalScore() {
    let victoryMessage = `Congratulations! You won with a score of ${p_score} - ${c_score}`
    let defeatMessage = `Better luck next time! You lost with a score of ${p_score} - ${c_score}`
    let tieMessage = `What a tough match! You tied with a score of ${p_score} - ${c_score}`

    if (p_score > c_score) {
        addGameMessage(victoryMessage)
    } else if (p_score < c_score) {
        addGameMessage(defeatMessage)
    } else {
        addGameMessage(tieMessage)
    }
}