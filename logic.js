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
let p_set_score = 0;
let c_set_score = 0;
let roundsPlayed = 0;
let setCount = 1;
let setMessageDisplayed = false;

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

function appendEmptyLine() {
    var messageDiv = document.querySelector('.game-message')
    var emptyLine = document.createElement('br');
    messageDiv.appendChild(emptyLine)
}

function addGameMessage(message, 
    isImportant = false,
    isColoredRed = false,
    isColoredGreen = false,
    isColoredGray = false,
    isColoredPurple = false,
    isEndGame = false) {
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

    if (isColoredPurple) {
        messageContent.classList.add('underlined-message')
    }

    if (isEndGame) {
        messageContent.classList.add('colored-end-game')
    }

    // Example of checking content to apply a highlight style
    if (message.includes('-= Set')) {
        messageContent.classList.add('highlight-message');
    }

    newMessage.appendChild(messageContent);
    messageDiv.appendChild(newMessage);
    messageDiv.scrollTop = messageDiv.scrollHeight;
}

function playGame(choice) {
    if (setMessageDisplayed === false) {
        addGameMessage(`-= Set ${setCount} =-`)
        setMessageDisplayed = true
    }

    if (roundsPlayed < 7) {
        let result = playRound(choice, getComputerChoice())

        if (result === 'draw') {
            let drawMessage = `A tie! The score is ${p_score} - ${c_score}`
            addGameMessage(drawMessage, true, false, false, true)
        } else if (result === 'win') {
            p_score++;
            let winMessage = `You won this round! The score is ${p_score} - ${c_score}`
            addGameMessage(winMessage, true, false, true)
        } else {
            c_score++;
            let loseMessage = `You lost this round! The score is ${p_score} - ${c_score}`
            addGameMessage(loseMessage, true, true)
        }
        roundsPlayed++;
        if (roundsPlayed === 7) {
            evaluateFinalScore();
        }
    }
}

function endGame() {
    appendEmptyLine()
    message = 'The battle has come to an end'
    addGameMessage(message, false, false, false, false, false, true)
}


function evaluateFinalScore() {
    let victoryMessage = `⚔ Congratulations! You won Set ${setCount} with a score of ${p_score} - ${c_score}! ⚔`
    let defeatMessage = `⚔ Better luck next time! You lost Set ${setCount} with a score of ${p_score} - ${c_score}! ⚔`
    let tieMessage = `⚔ What a tough match! You tied Set ${setCount} with a score of ${p_score} - ${c_score}! ⚔`

    const playerScoreDiv = document.querySelector('.player-score');
    const computerScoreDiv = document.querySelector('.computer-score');

    if (p_score > c_score) {
        addGameMessage(victoryMessage, false, false, false, false, true)
        p_set_score++
        playerScoreDiv.textContent = `Player: ${p_set_score}`;
    } else if (p_score < c_score) {
        addGameMessage(defeatMessage, false, false, false, false, true)
        c_set_score++
        computerScoreDiv.textContent = `Computer: ${c_set_score}`;
    } else {
        addGameMessage(tieMessage, false, false, false, false, true)
    }

    if (setCount === 5) {
        addGameMessage('this is the end here')
        endGame()
        // also here execute function (to be written) that disables buttons and asks for refresh
    }

    // Reset global variables and increment setCount to prepare for next set
    setMessageDisplayed = false;
    p_score = 0;
    c_score = 0;
    roundsPlayed = 0;
    setCount++;
    appendEmptyLine()
}