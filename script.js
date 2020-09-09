const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playRound);
}

let playerTotal = 0;
let compTotal = 0;

function generateCompSelection() {
    let randomNumber = Math.floor((3 - 1 + 1) * Math.random()) + 1;
    if (randomNumber === 1) { return 'Rock'; }
    else if (randomNumber === 2) { return 'Paper'; }
    else { return 'Scissors'; }
}

function playRound(e) {
    let playerSelection = this.id;
    let compSelection = generateCompSelection();
    let roundText = '';

    if (playerSelection === 'Rock' && compSelection === 'Rock') { roundText = 'A draw!'; }
    else if (playerSelection === 'Rock' && compSelection === 'Paper') { compTotal++; roundText = 'You lose! Paper beats rock'; }
    else if (playerSelection === 'Rock' && compSelection === 'Scissors') { playerTotal++; roundText = 'You win! Rock beats scissors'; }
    else if (playerSelection === 'Paper' && compSelection === 'Rock') { playerTotal++; roundText = 'You win! Paper beats rock'; }
    else if (playerSelection === 'Paper' && compSelection === 'Paper') { roundText = 'A draw!'; }
    else if (playerSelection === 'Paper' && compSelection === 'Scissors') { compTotal++; roundText = 'You lose! Scissors beats paper!'; }
    else if (playerSelection === 'Scissors' && compSelection === 'Rock') { compTotal++; roundText = 'You lose! Rock beats scissors!'; }
    else if (playerSelection === 'Scissors' && compSelection === 'Paper') { playerTotal++; roundText = 'You win! Scissors beats paper!'; }
    else if (playerSelection === 'Scissors' && compSelection === 'Scissors') { roundText = 'A draw!'; }
    else { roundText = 'none of the ifs';}
    // display the updated score ('playerTotal / compTotal')
    document.querySelector('#score').textContent = playerTotal + ' / ' + compTotal;
    // display roundText
    document.querySelector('#round-text').textContent = roundText;
    // display human selection big
    // display computer selection big
    // stop after someone gets 5 and display winnerText after (or instead of) roundText
    // reset button triggers reset function
}