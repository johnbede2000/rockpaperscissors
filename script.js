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
    document.querySelector('#human-current').className = "";
    document.querySelector('#comp-current').className = "";

    if (playerSelection === 'Rock' && compSelection === 'Rock') {
        roundText = 'A draw!';
        document.querySelector('#human-current').classList.add('rock-img');
        
        document.querySelector('#comp-current').classList.add('rock-img');
    }
    else if (playerSelection === 'Rock' && compSelection === 'Paper') {
        compTotal++;
        roundText = 'You lose! Paper beats rock';
        document.querySelector('#human-current').classList.add('rock-img');
        document.querySelector('#comp-current').classList.add('paper-img');
    }
    else if (playerSelection === 'Rock' && compSelection === 'Scissors') {
        playerTotal++;
        roundText = 'You win! Rock beats scissors';
        document.querySelector('#human-current').classList.add('rock-img');
        document.querySelector('#comp-current').classList.add('scissors-img');
    }
    else if (playerSelection === 'Paper' && compSelection === 'Rock') {
        playerTotal++;
        roundText = 'You win! Paper beats rock';
        document.querySelector('#comp-current').classList.add('rock-img');
        document.querySelector('#human-current').classList.add('paper-img');
    }
    else if (playerSelection === 'Paper' && compSelection === 'Paper') {
        roundText = 'A draw!';
        document.querySelector('#human-current').classList.add('paper-img');
        document.querySelector('#comp-current').classList.add('paper-img');
    }
    else if (playerSelection === 'Paper' && compSelection === 'Scissors') {
        compTotal++;
        roundText = 'You lose! Scissors beats paper!';
        document.querySelector('#human-current').classList.add('paper-img');
        document.querySelector('#comp-current').classList.add('scissors-img');
    }
    else if (playerSelection === 'Scissors' && compSelection === 'Rock') {
        compTotal++;
        roundText = 'You lose! Rock beats scissors!';
        document.querySelector('#comp-current').classList.add('rock-img');
        document.querySelector('#human-current').classList.add('scissors-img');
    }
    else if (playerSelection === 'Scissors' && compSelection === 'Paper') {
        playerTotal++;
        roundText = 'You win! Scissors beats paper!';
        document.querySelector('#human-current').classList.add('scissors-img');
        document.querySelector('#comp-current').classList.add('paper-img');
    }
    else if (playerSelection === 'Scissors' && compSelection === 'Scissors') {
        roundText = 'A draw!';
        document.querySelector('#human-current').classList.add('scissors-img');
        document.querySelector('#comp-current').classList.add('scissors-img');
    }
    else {
        roundText = 'Oh... something went wrong!';
    }
    
    document.querySelector('#score').textContent = playerTotal + ' / ' + compTotal;
    
    document.querySelector('#round-text').textContent = roundText;

    
    // stop the game after someone gets 5 and display winnerText after (or instead of) roundText
    // reset button triggers reset function
    // if they try to play a round when winnerText is showing then reset the game first
}