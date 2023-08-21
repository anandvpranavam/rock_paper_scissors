const buttons = document.querySelectorAll("button");
const userScore = document.getElementById("user-score");
const compScore = document.getElementById("computer-score");
const resultEl = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{        
        userChoice = button.id;
        const result = playRound(userChoice,computerPlay());
        console.log(result);
        resultEl.textContent = result;
        
    })
});

function computerPlay(){
    const choices = ["rock", "paper","scissors"];
    const randomChoice = Math.floor(Math.random()*choices.length)
    // console.log(randomChoice);
    const computerChoice =  choices[randomChoice];
    return computerChoice;
}

function playRound(userChoice,computerChoice){
    if(userChoice === computerChoice){
        return "It's a tie"
    }
    else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock"))
        {
            playerScore++;
            userScore.textContent = playerScore;
            return "You won! " + userChoice + " beats " + computerChoice;
        }
    else {
        computerScore++;
        compScore.textContent = computerScore;
        return "You lost! " + computerChoice + " beats " + userChoice; 
    }
}