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
    const winDictionary = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock",
    }
    
    let print_p_choice = p_choice.charAt(0).toUpperCase() + p_choice.slice(1)
    let print_c_choice = c_choice.charAt(0).toUpperCase() + c_choice.slice(1)

    if (p_choice === c_choice) {
        console.log('It\'s a draw!')
    } else if (winDictionary[p_choice] === c_choice) {
        console.log(`You won! ${print_p_choice} beats ${print_c_choice}!`)
    } else {
        console.log(`You lose! ${print_c_choice} beats ${print_p_choice}!`)
    }

    console.log(winDictionary['rock'])
    console.log(winDictionary['scissors'])
    console.log(winDictionary['paper'])

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