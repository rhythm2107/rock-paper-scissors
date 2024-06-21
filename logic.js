function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[getRandomInt(3)]
}

function getPrompt() {
    return prompt("Choose rock, paper or scissors!")
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    
    let p_choice = playerSelection.toLowerCase();
    let c_choice = computerSelection;
    const winDictionary = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock",
    }
    
    let print_p_choice = p_choice.charAt(0).toUpperCase() + p_choice.slice(1)
    let print_c_choice = c_choice.charAt(0).toUpperCase() + c_choice.slice(1)

    if (p_choice === c_choice) {
        console.log(`It\'s a draw! Computer picked ${print_c_choice}!`)
        return 'draw'
    } else if (winDictionary[p_choice] === c_choice) {
        console.log(`You won! ${print_p_choice} beats ${print_c_choice}!`)
        return 'win'
    } else {
        console.log(`You lose! ${print_c_choice} beats ${print_p_choice}!`)
        return 'lose'
    }
}
// console.log(playRound(getPrompt(), getComputerChoice()))

function playGame(choice) {
    p_score = 0
    c_score = 0

    for (let i = 1; i <= 5; i++) {
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
    }
    
    if (p_score > c_score) {
        console.log(`Congratulations! You won with a score of ${p_score} - ${c_score}`)
    } else if (p_score < c_score) {
        console.log(`Better luck next time! You lost with a score of ${p_score} - ${c_score}`)
    } else {
        console.log(`What a tough match! You tied with a score of ${p_score} - ${c_score}`)
    }

}

function startGame() {
    var info = document.getElementById('start-info');
    var buttonContainer = document.getElementById('button-container');

    // Hide the initial game info and show the buttons
    info.style.display = 'none';
    buttonContainer.style.display = 'flex';
    playGame()
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.flex-button');
    
    button.addEventListener('click', function() {
        playRound('rock')
    });
});