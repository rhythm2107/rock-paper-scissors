function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[getRandomInt(3)]
}

function playRound(playerSelection, computerSelection) {
    
    let p_choice = playerSelection.toLowerCase();
    let c_choice = computerSelection;

    if (p_choice === c_choice) {
        console.log('Draw!')
    }
    // dictionary of what beats what -> {rock: scissors, scissors: paper, paper: rock}
    // testing with playerchoice of rock
    // if dictionary[p_choice] (returns scissors) === computerchoice (lets say scissors) -> player wins because picked rock and computer picked scissors
    // if player picks scissors then draw above pops
    // if player picks paper then he loses so essentially just do else lose

    //PSEUDOCODE
    // DICT = {rock: scissors, scissors: paper, paper: rock}
    // IF DICT[p_choice] === c_choice -> return player win
    // ELSE -> return player lose
}