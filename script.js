const buttons = document.querySelectorAll('.button');
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

let roundText = '';

function playRound(e) {
    let playerSelection = this.id;
    let compSelection = generateCompSelection();
    document.querySelector('#human-current').className = "";
    document.querySelector('#comp-current').className = "";

    if (playerSelection === 'Rock' && compSelection === 'Rock') {
        roundText = 'This round is a draw!';
        document.querySelector('#human-current').classList.add('rock-img');
        document.querySelector('#comp-current').classList.add('rock-img');
    }
    else if (playerSelection === 'Rock' && compSelection === 'Paper') {
        compTotal++;
        roundText = 'You lose this round! Paper beats rock.';
        document.querySelector('#human-current').classList.add('rock-img');
        document.querySelector('#comp-current').classList.add('paper-img');
    }
    else if (playerSelection === 'Rock' && compSelection === 'Scissors') {
        playerTotal++;
        roundText = 'You win this round! Rock beats scissors.';
        document.querySelector('#human-current').classList.add('rock-img');
        document.querySelector('#comp-current').classList.add('scissors-img');
    }
    else if (playerSelection === 'Paper' && compSelection === 'Rock') {
        playerTotal++;
        roundText = 'You win this round! Paper beats rock.';
        document.querySelector('#comp-current').classList.add('rock-img');
        document.querySelector('#human-current').classList.add('paper-img');
    }
    else if (playerSelection === 'Paper' && compSelection === 'Paper') {
        roundText = 'This round is a draw!';
        document.querySelector('#human-current').classList.add('paper-img');
        document.querySelector('#comp-current').classList.add('paper-img');
    }
    else if (playerSelection === 'Paper' && compSelection === 'Scissors') {
        compTotal++;
        roundText = 'You lose this round! Scissors beats paper.';
        document.querySelector('#human-current').classList.add('paper-img');
        document.querySelector('#comp-current').classList.add('scissors-img');
    }
    else if (playerSelection === 'Scissors' && compSelection === 'Rock') {
        compTotal++;
        roundText = 'You lose this round! Rock beats scissors.';
        document.querySelector('#comp-current').classList.add('rock-img');
        document.querySelector('#human-current').classList.add('scissors-img');
    }
    else if (playerSelection === 'Scissors' && compSelection === 'Paper') {
        playerTotal++;
        roundText = 'You win this round! Scissors beats paper.';
        document.querySelector('#human-current').classList.add('scissors-img');
        document.querySelector('#comp-current').classList.add('paper-img');
    }
    else if (playerSelection === 'Scissors' && compSelection === 'Scissors') {
        roundText = 'This round is a draw!';
        document.querySelector('#human-current').classList.add('scissors-img');
        document.querySelector('#comp-current').classList.add('scissors-img');
    }
    else {
        roundText = 'Oh... something went wrong.';
    }

    document.querySelector('#score').textContent = playerTotal + ' / ' + compTotal;
    checkForFive();
    document.querySelector('#round-text').textContent = roundText;
}

let winSound = document.querySelector('#win');
let loseSound = document.querySelector('#lose');

function checkForFive() {
    if (playerTotal === 5) {
        roundText = roundText + ' Game over! You win this game!';
        winSound.play();
        buttons.forEach(toggleHidden);
        document.querySelector('#prompt').classList.toggle('hidden');
    } else if (compTotal === 5) {
        roundText = roundText + ' Game over! You lose this game! Try again';
        loseSound.play();
        buttons.forEach(toggleHidden);
        document.querySelector('#prompt').classList.toggle('hidden');
    }
}

function toggleHidden(currentValue) {
    currentValue.classList.toggle('hidden');
}

function reset() {
    if (playerTotal === 5 || compTotal === 5) {
        buttons.forEach(toggleHidden);
        document.querySelector('#prompt').classList.toggle('hidden');
    }
    playerTotal = 0;
    compTotal = 0;
    document.querySelector('#score').textContent = playerTotal + ' / ' + compTotal;
    document.querySelector('#human-current').className = "";
    document.querySelector('#comp-current').className = "";
    document.querySelector('#round-text').textContent = "";
}
document.querySelector('#reset').addEventListener('click', reset);