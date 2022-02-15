function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else if (randomNumber === 3) {
        return 'Scissors';
    } else {
        alert(ERR0R);
    }
}

function playRound(playerSelection, computerSelection) {
    let playerCased = playerSelection.toLowerCase();
    let computerCased = computerSelection.toLowerCase();
    if (playerCased === computerCased) {
        console.log(`It's a tie! You both picked ${computerSelection}`);
        return('tie');
    } else if ((playerCased === 'rock') && (computerCased === 'scissors')) {
        console.log("You win! Rock crushes Scissors.");
        return('win');
    } else if ((playerCased === 'scissors') && (computerCased === 'paper')) {
        console.log("You win! Scissors cut Paper.");
        return('win');
    } else if ((playerCased === 'paper') && (computerCased === 'rock')) {
        console.log("You win! Paper covers Rock.");
        return('win');
    } else if ((playerCased === 'scissors') && (computerCased === 'rock')) {
        console.log("You lose! Rock crushes Scissors.");
        return('lose');
    } else if ((playerCased === 'paper') && (computerCased === 'scissors')) {
        console.log("You lose! Scissors cut Paper.");
        return('lose');
    } else if ((playerCased === 'rock') && (computerCased === 'paper')) {
        console.log("You lose! Paper covers Rock.");
        return('lose');
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    let playerSelection = '';
    let computerSelection = '';
    let winner = '';
    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("Choose your weapon");
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result === 'tie') {
            ties += 1;
        } else if (result === 'win') {
            playerWins += 1;
        } else if (result === 'lose') {
            computerWins += 1;
        }
    }
    if (playerWins > computerWins) {
        winner = 'You';
    } else if (playerWins < computerWins) {
        winner = 'Computer';
    } else {
        winner = 'No One';
    }

    console.log(`A winner is ${winner}! Your record is ${playerWins}-${computerWins}-${ties}.`)
}