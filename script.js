function getComputerChoice()
{
    const randChoice = Math.floor(Math.random() * 3);
    if(randChoice == 0)
    {
        return 'rock';
    }
    else if(randChoice == 1)
    {
        return 'paper';
    }
    else
    {
        return 'scissors';
    }
}

function getHumanChoice()
{
    const userChoice = prompt('Rock, Paper or Scissors?: ').toLowerCase();
    return userChoice;
}

let computerScore = 0;
let humanScore = 0;

function playRound(getComputerChoice, getHumanChoice)
{
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if(humanSelection == computerSelection)
    {
        console.log('It\'s a Tie! Try Again!\n');
    }
    else
    {
        if(humanSelection == 'rock' && computerSelection == 'paper')
        {
            console.log('Paper Beats Rock')
        }
    }
    console.log('Your Score:', humanScore, '\nComputer Score:', computerScore)
}

function playGame()
{
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}