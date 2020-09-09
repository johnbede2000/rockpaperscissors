const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playRound);
}

function playRound(e) {
    let playerSelection = this.id;
    let compSelection = generateCompSelection;

    if (playerSelection === 'Rock' && compSelection === 'Rock') { return 'A draw!'; }
    else if (playerSelection === 'Rock' && compSelection === 'Paper') { compTotal++; return 'You lose! Paper beats rock'; }
    else if (playerSelection === 'Rock' && compSelection === 'Scissors') { playerTotal++; return 'You win! Rock beats scissors'; }
    else if (playerSelection === 'Paper' && compSelection === 'Rock') { playerTotal++; return 'You win! Paper beats rock'; }
    else if (playerSelection === 'Paper' && compSelection === 'Paper') { return 'A draw!'; }
    else if (playerSelection === 'Paper' && compSelection === 'Scissors') { compTotal++; return 'You lose! Scissors beats paper!'; }
    else if (playerSelection === 'Scissors' && compSelection === 'Rock') { compTotal++; return 'You lose! Rock beats scissors!'; }
    else if (playerSelection === 'Scissors' && compSelection === 'Paper') { playerTotal++; return 'You win! Scissors beats paper!'; }
    else if (playerSelection === 'Scissors' && compSelection === 'Scissors') { return 'A draw!'; }
}

let playerTotal = 0;
let compTotal = 0;

function generateCompSelection() {
    let randomNumber = Math.floor((3 - 1 + 1) * Math.random()) + 1;
    if (randomNumber === 1) { return 'Rock'; }
    else if (randomNumber === 2) { return 'Paper'; }
    else { return 'Scissors'; }
}

// function game() {
//     let playerSelection = prompt('Round 1/5! Enter your selection (rock, paper, or scissors)');
//     let compSelection = generateCompSelection();
//     console.log(playRound(playerSelection, compSelection) + '. Player ' + playerTotal + ', Computer ' + compTotal + '.');

//     playerSelection = prompt('Round 2/5! Enter your selection (rock, paper, or scissors)');
//     compSelection = generateCompSelection();
//     console.log(playRound(playerSelection, compSelection) + '. Player ' + playerTotal + ', Computer ' + compTotal + '.');

//     playerSelection = prompt('Round 3/5! Enter your selection (rock, paper, or scissors)');
//     compSelection = generateCompSelection();
//     console.log(playRound(playerSelection, compSelection) + '. Player ' + playerTotal + ', Computer ' + compTotal + '.');

//     playerSelection = prompt('Round 4/5! Enter your selection (rock, paper, or scissors)');
//     compSelection = generateCompSelection();
//     console.log(playRound(playerSelection, compSelection) + '. Player ' + playerTotal + ', Computer ' + compTotal + '.');

//     playerSelection = prompt('Final round! Enter your selection (rock, paper, or scissors)');
//     compSelection = generateCompSelection();
//     console.log(playRound(playerSelection, compSelection) + '. Final score: Player ' + playerTotal + ', Computer ' + compTotal + '.')

//     if (playerTotal > compTotal) {
//     console.log('You win the game!');
//     }
//     else if (playerTotal < compTotal) {
//     console.log('You lost the game :(');
//     }
//     else {
//     console.log('The game was a draw.');
//     }

//     playerTotal = 0;
//     compTotal = 0;
// }