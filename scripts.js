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

let wins = 0;
let losses = 0;
let ties = 0;

function playRound(playerSelection, computerSelection) {
    let playerCased = playerSelection.toLowerCase();
    let computerCased = computerSelection.toLowerCase();
    let p = document.createElement('p');
    if (playerCased === computerCased) {
        let result = document.createTextNode(`It's a tie! You both picked ${computerSelection}`);
        p.appendChild(result);
        document.body.appendChild(p);
        ties += 1;
        tieTotal.innerHTML = `Ties: ${ties}`;
    } else if ((playerCased === 'rock') && (computerCased === 'scissors')) {
        let result = document.createTextNode("You win! Rock crushes Scissors.");
        p.appendChild(result);
        document.body.appendChild(p);
        wins += 1;
        winTotal.innerHTML = `Wins: ${wins}`;
    } else if ((playerCased === 'scissors') && (computerCased === 'paper')) {
        let result = document.createTextNode("You win! Scissors cut Paper.");
        p.appendChild(result);
        document.body.appendChild(p);
        wins += 1;
        winTotal.innerHTML = `Wins: ${wins}`;
    } else if ((playerCased === 'paper') && (computerCased === 'rock')) {
        let result = document.createTextNode("You win! Paper covers Rock.");
        p.appendChild(result);
        document.body.appendChild(p);
        wins += 1;
        winTotal.innerHTML = `Wins: ${wins}`;
    } else if ((playerCased === 'scissors') && (computerCased === 'rock')) {
        let result = document.createTextNode("You lose! Rock crushes Scissors.");
        p.appendChild(result);
        document.body.appendChild(p);
        losses += 1;
        loseTotal.innerHTML = `Losses: ${losses}`;
    } else if ((playerCased === 'paper') && (computerCased === 'scissors')) {
        let result = document.createTextNode("You lose! Scissors cut Paper.");
        p.appendChild(result);
        document.body.appendChild(p);
        losses += 1;
        loseTotal.innerHTML = `Losses: ${losses}`;
    } else if ((playerCased === 'rock') && (computerCased === 'paper')) {
        let result = document.createTextNode("You lose! Paper covers Rock.");
        p.appendChild(result);
        document.body.appendChild(p);
        losses += 1;
        loseTotal.innerHTML = `Losses: ${losses}`;
    }
    if ((wins === 5) || (losses === 5)) {
        let p = document.createElement('p');
        if (wins === 5) {
            let result = document.createTextNode(`You win! Congratulations!`);
            p.appendChild(result);
            document.body.appendChild(p);
        }
        if (losses === 5) {
            let result = document.createTextNode(`The computer wins! Better luck next time.`);
            p.appendChild(result);
            document.body.appendChild(p);
        }
        rock.removeEventListener('click', () => {playRound('Rock',computerPlay());});
        paper.removeEventListener('click', () => {playRound('Paper',computerPlay());});
        scissors.removeEventListener('click', () => {playRound('Scissors',computerPlay());});
    
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

rock.addEventListener('click', () => {playRound('Rock',computerPlay());});
paper.addEventListener('click', () => {playRound('Paper',computerPlay());});
scissors.addEventListener('click', () => {playRound('Scissors',computerPlay());});

