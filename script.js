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
        playRound(getComputerChoice, getHumanChoice);
    }
    else
    {
        if(humanSelection == 'rock')     
        {
            if(computerSelection == 'paper')
            {
            console.log('Computer\'s Selection: Paper\nYour Selection: Rock\nPaper Beats Rock\n1 Point to computer!');
            computerScore++;
            }
            else if(computerSelection == 'scissors')
            {
            console.log('Computer\'s Selection: Scissors\nYour Selection: Rock\nRock Beats Scissors\n1 Point to User!');
            humanScore++;
            }
        }
        else if(humanSelection == 'paper')     
        {
            if(computerSelection == 'scissors')
            {
            console.log('Computer\'s Selection: Scissors\nYour Selection: Paper\nScissors Beats Paper\n1 Point to computer!');
            computerScore++;
            }
            else if(computerSelection == 'rock')
            {
            console.log('Computer\'s Selection: Rock\nYour Selection: Paper\nPaper Beats Rock\n1 Point to User!');
            humanScore++;
            }
        }
        else if(humanSelection == 'scissors')     
        {
            if(computerSelection == 'rock')
            {
            console.log('Computer\'s Selection: Rock\nYour Selection: Scissors\nRock Beats Scissors\n1 Point to computer!');
            computerScore++;
            }
            else if(computerSelection == 'paper')
            {
            console.log('Computer\'s Selection: Paper\nYour Selection: Scissors\nScissors Beats Paper\n1 Point to User!');
            humanScore++;
            }
        }
    }
    console.log('Your Score:', humanScore, '\nComputer Score:', computerScore)
}

function playGame()
{
    playRound(getComputerChoice, getHumanChoice);

    if(humanScore > computerScore)
    {
        console.log('User wins!\nFinal Scores\nUser:', humanScore, 'v/s Computer:', computerScore);
    }
    else
    {
        console.log('Computer wins!\nFinal Scores\nUser:', humanScore, 'v/s Computer:', computerScore);
    }
}

playGame();