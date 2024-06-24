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
let setCount = 0;
let firstSetEnabled = false;

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

function addGameMessage(message, isImportant = false, isColoredRed = false, isColoredGreen = false, isColoredGray = false) {
    var messageDiv = document.querySelector('.game-message');
    var newMessage = document.createElement("div");
    var messageContent = document.createElement("span");
    messageContent.textContent = message;

    // Apply styles based on parameters or content checks
    if (isImportant) {
        messageContent.classList.add('bold-message');
    }

    if (isColoredRed) {
        messageContent.classList.add('colored-message-red');
    }

    if (isColoredGreen) {
        messageContent.classList.add('colored-message-green');
    }
    
    if (isColoredGray) {
        messageContent.classList.add('colored-message-gray')
    }

    // Example of checking content to apply a highlight style
    if (message.includes('Set')) {
        messageContent.classList.add('highlight-message');
    }

    newMessage.appendChild(messageContent);
    messageDiv.appendChild(newMessage);
    messageDiv.scrollTop = messageDiv.scrollHeight;
}

function playGame(choice) {
    const playerScoreDiv = document.querySelector('.player-score');
    const computerScoreDiv = document.querySelector('.computer-score');

    if (setCount === 0 && firstSetEnabled === false) {
        addGameMessage('-= Set 1 =-')
        firstSetEnabled = true
    }

    if (roundsPlayed < 7) {
        let result = playRound(choice, getComputerChoice())

        if (result === 'draw') {
            let drawMessage = `A tie! The score is ${p_score} - ${c_score}`
            addGameMessage(drawMessage, true, false, false, true)
        } else if (result === 'win') {
            p_score++;
            playerScoreDiv.textContent = `Player Score: ${p_score}`;
            let winMessage = `You won this round! The score is ${p_score} - ${c_score}`
            addGameMessage(winMessage, true, false, true)
        } else {
            c_score++;
            computerScoreDiv.textContent = `Computer Score: ${c_score}`;
            let loseMessage = `You lost this round! The score is ${p_score} - ${c_score}`
            addGameMessage(loseMessage, true, true)
        }
        roundsPlayed++;
        if (roundsPlayed === 7) {
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

    addGameMessage('\n')
    addGameMessage('Round ended with score')
}