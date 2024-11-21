function getComputerChoice() {
    let x = Math.random();
    if(x <= .33) return "Rock";
    else if(x > .33 && x < .66) return "Paper";
    else return "Scissor";
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice == "Rock") {
        if(computerChoice == "Paper") {
            computerScore++;
            let list = document.querySelector("ol");
            let span = document.createElement("span");
            span.textContent = "You lose! Paper beats Rock";
            let li = document.createElement("li");
            li.appendChild(span);
            list.appendChild(li);

        }
        else if(computerChoice == "Scissor") {
            humanScore++;
            let list = document.querySelector("ol");
            let span = document.createElement("span");
            span.textContent = "You Win! Rock beats Scissor";
            let li = document.createElement("li");
            li.appendChild(span);
            list.appendChild(li);
        }
        else {
            let list = document.querySelector("ol");
            let span = document.createElement("span");
            span.textContent = "Match tied";
            let li = document.createElement("li");
            li.appendChild(span);
            list.appendChild(li);
        }
    }
    if(humanChoice == "Paper") {
        if(computerChoice == "Rock") {
            humanScore++;
            let list = document.querySelector("ol");
            let span = document.createElement("span");
            span.textContent = "You Win! Paper beats Rock";
            let li = document.createElement("li");
            li.appendChild(span);
            list.appendChild(li);
        }
        else if(computerChoice == "Scissor") {
            computerScore++;
            let list = document.querySelector("ol");
            let span = document.createElement("span");
            span.textContent = "You Lose! Scissor beats Paper";
            let li = document.createElement("li");
            li.appendChild(span);
            list.appendChild(li);
        }
        else {
            let list = document.querySelector("ol");
            let span = document.createElement("span");
            span.textContent = "Match tied";
            let li = document.createElement("li");
            li.appendChild(span);
            list.appendChild(li);
        }
    }
    if(humanChoice == "Scissor") {
        if(computerChoice == "Paper") {
            humanScore++;
            let list = document.querySelector("ol");
            let span = document.createElement("span");
            span.textContent = "You Win! Scissor beats Paper";
            let li = document.createElement("li");
            li.appendChild(span);
            list.appendChild(li);
        }
        else if(computerChoice == "Rock") {
            computerScore++;
            let list = document.querySelector("ol");
            let span = document.createElement("span");
            span.textContent = "You Lose! Rock beats Scissor";
            let li = document.createElement("li");
            li.appendChild(span);
            list.appendChild(li);
        }
        else {
            let list = document.querySelector("ol");
            let span = document.createElement("span");
            span.textContent = "Match tied";
            let li = document.createElement("li");
            li.appendChild(span);
            list.appendChild(li);
        }
    }
}

function updateScores(humanScore, computerScore) {
    const yourScoreSpan = document.querySelector('ul li:nth-child(1) span');
    const computerScoreSpan = document.querySelector('ul li:nth-child(2) span');
    yourScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
}

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

rock.addEventListener('click', function(){
    let humanChoice = "Rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateScores(humanScore, computerScore);
    if(humanScore == 5) announceWinner("You");
    else if(computerScore == 5) announceWinner("Computer");
});
paper.addEventListener('click', function(){
    let humanChoice = "Paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateScores(humanScore, computerScore);
    if(humanScore == 5) announceWinner("You");
    else if(computerScore == 5) announceWinner("Computer");
});
scissor.addEventListener('click', function(){
    let humanChoice = "Scissor";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateScores(humanScore, computerScore);
    if(humanScore == 5) announceWinner("You");
    else if(computerScore == 5) announceWinner("Computer");
});

function announceWinner(winner) {
    alert(winner + " wins the game!");
    // Reset scores
    yourScore = 0;
    computerScore = 0;
    updateScores();
}