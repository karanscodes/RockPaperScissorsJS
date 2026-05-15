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

function showWinner(humanScore, computerScore)
{
    if(humanScore > computerScore)
    {
        endDiv.innerHTML = `User wins! <br><br>Final Scores<br>User: ${humanScore} v/s Computer: ${computerScore}`;
    }
        else
    {
        endDiv.innerHTML = `Computer wins! <br><br>Final Scores<br>User: ${humanScore} v/s Computer: ${computerScore}`;
    }
}

let computerScore = 0;
let humanScore = 0;
let humanSelection;

//human selection scenarios
    const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => 
        {
            humanSelection = 'rock';
            playRound(humanSelection)
        });

    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => 
        {
            humanSelection = 'paper';
            playRound(humanSelection)
        });

    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => 
        {
            humanSelection = 'scissors';
            playRound(humanSelection)
        });
    
    const resultDiv = document.querySelector("#results"); 
    const scoreDiv = document.querySelector("#score");
    const endDiv = document.querySelector("#endtext");

function playRound(humanSelection)
{
    //Computer Selection
    const computerSelection = getComputerChoice();

    if(humanSelection == computerSelection)
    {
        resultDiv.innerHTML = "It's a Tie! Try Again!";
    }

    else
    {
        if(humanSelection == 'rock')     
        {
            if(computerSelection == 'paper')
            {
            resultDiv.innerHTML = "Computer's Selection: Paper<br>Your Selection: Rock<br>Paper Beats Rock<br>1 Point to computer!";
            computerScore++;
            }
            
            else if(computerSelection == 'scissors')
            {
            resultDiv.innerHTML = "Computer's Selection: Scissors<br>Your Selection: Rock<br>Rock Beats Scissors<br>1 Point to User!";
            humanScore++;
            }
        }
        else if(humanSelection == 'paper')     
        {
            if(computerSelection == 'scissors')
            {
            resultDiv.innerHTML = "Computer's Selection: Scissors<br>Your Selection: Paper<br>Scissors Beats Paper<br>1 Point to computer!";
            computerScore++;
            }

            else if(computerSelection == 'rock')
            {
            resultDiv.innerHTML = "Computer's Selection: Rock<br>Your Selection: Paper<br>Paper Beats Rock<br>1 Point to User!";
            humanScore++;
            }
        }
        
        else if(humanSelection == 'scissors')     
        {
            if(computerSelection == 'rock')
            {
            resultDiv.innerHTML = "Computer's Selection: Rock<br>Your Selection: Scissors<br>Rock Beats Scissors<br>1 Point to computer!";
            computerScore++;
            }

            else if(computerSelection == 'paper')
            {
            resultDiv.innerHTML = "Computer's Selection: Paper<br>Your Selection: Scissors<br>Scissors Beats Paper<br>1 Point to User!";
            humanScore++;
            }
        }
    }
    scoreDiv.innerHTML = `Your Score: ${humanScore}<br>Computer Score: ${computerScore}`;

    if(humanScore == 3 || computerScore == 3) 
        {
            showWinner(humanScore, computerScore);
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
}