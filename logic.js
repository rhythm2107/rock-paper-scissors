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

function playGame(choice) {
    console.log(choice)
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
    if (roundsPlayed < 5) {
        let result = playRound(choice, getComputerChoice())

        if (result === 'draw') {
            console.log(`A tie! The score is ${p_score} - ${c_score}`)
        } else if (result === 'win') {
            p_score++
            console.log(`You won this round! The score is ${p_score} - ${c_score}`)
        } else {
            c_score++
            console.log(`You lost this round! The score is ${p_score} - ${c_score}`)
        }
        roundsPlayed++;
        if (roundsPlayed === 5) {
            evaluateFinalScore();
        }
    }
}

function evaluateFinalScore() {
    if (p_score > c_score) {
        console.log(`Congratulations! You won with a score of ${p_score} - ${c_score}`);
    } else if (p_score < c_score) {
        console.log(`Better luck next time! You lost with a score of ${p_score} - ${c_score}`);
    } else {
        console.log(`What a tough match! You tied with a score of ${p_score} - ${c_score}`);
    }
}