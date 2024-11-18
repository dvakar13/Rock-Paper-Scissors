function getComputerChoice() {
    let x = Math.random();
    if(x <= .33) return "Rock";
    else if(x > .33 && x < .66) return "Paper";
    else return "Scissor";
}

function getHumanChoice() {
    return prompt("What is your shape?");
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice == "Rock") {
        if(computerChoice == "Paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock");
        }
        else if(computerChoice == "Scissor") {
            humanScore++;
            console.log("You Win! Rock beats Scissor");
        }
        else console.log("Match tied");
    }
    if(humanChoice == "Paper") {
        if(computerChoice == "Rock") {
            humanScore++;
            console.log("You Win! Paper beats Rock");
        }
        else if(computerChoice == "Scissor") {
            computerScore++;
            console.log("You Lose! Scissor beats Paper");
        }
        else console.log("Match tied");
    }
    if(humanChoice == "Scissor") {
        if(computerChoice == "Paper") {
            humanScore++;
            console.log("You Win! Scissor beats Paper");
        }
        else if(computerChoice == "Rock") {
            computerScore++;
            console.log("You Lose! Rock beats Paper");
        }
        else console.log("Match tied");
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

playGame();