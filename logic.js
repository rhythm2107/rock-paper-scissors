function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}
function startGame() {
    var info = document.getElementById('start-info');
    var buttonContainer = document.getElementById('button-container');

    // Hide the initial game info and show the buttons
    info.style.display = 'none';
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

function playGame(choice) {
    const playerScoreDiv = document.querySelector('.player-score');
    const computerScoreDiv = document.querySelector('.computer-score');
    const gameMessageDiv = document.querySelector('.game-message');

    if (roundsPlayed < 5) {
        let result = playRound(choice, getComputerChoice())

        if (result === 'draw') {
            gameMessageDiv.textContent = `A tie! The score is ${p_score} - ${c_score}`
        } else if (result === 'win') {
            p_score++;
            playerScoreDiv.textContent = `Player Score: ${p_score}`;
            gameMessageDiv.textContent = `You won this round! The score is ${p_score} - ${c_score}`
        } else {
            c_score++;
            computerScoreDiv.textContent = `Computer Score: ${c_score}`;
            gameMessageDiv.textContent = `You lost this round! The score is ${p_score} - ${c_score}`
        }
        roundsPlayed++;
        if (roundsPlayed === 5) {
            evaluateFinalScore();
        }
    }
}

function evaluateFinalScore() {
    if (p_score > c_score) {
        gameMessageDiv.textContent = `Congratulations! You won with a score of ${p_score} - ${c_score}`;
    } else if (p_score < c_score) {
        gameMessageDiv.textContent = `Better luck next time! You lost with a score of ${p_score} - ${c_score}`;
    } else {
        gameMessageDiv.textContent = `What a tough match! You tied with a score of ${p_score} - ${c_score}`;
    }
}