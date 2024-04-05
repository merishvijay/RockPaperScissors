function getComputerChoice(){
    let randnum=Math.floor(Math.random()*3)

    switch(randnum){
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return "Scissors"
            break;
        default:
            return "Error"    
    } 
}


function playRound(playerSelection, computerSelection){



    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();



    if(playerSelection==computerSelection)
    {
        return "Tie";
    }

    else if(playerSelection=="rock" && computerSelection=="scissors")
    {
        return "you win!! Rock beats Scissors";
    }

    else if(playerSelection=="scissors" && computerSelection=="paper")
    {
        return "you win!! Scissor beats Paper";   
    }

    else if(playerSelection=="paper" && computerSelection=="rock")
    {
        return "you win!! Paper beats Rock";
    }

    else if(playerSelection=="paper" && computerSelection=="sciccors")
    {
        return "you lose!! Paper beats Rock";
    }

    else if(playerSelection=="rock" && computerSelection=="paper")
    {
        return "you lose!! Paper beats Rock";
    }

    else if(playerSelection=="scissors" && computerSelection=="rock")
    {
        return "you lose!! Paper beats Rock";
    }

    else
    {
        return "Invalid!!";
    }    

}



function playGame(){

    let playerScore=0;
    let computerScore=0;
    let result="";



    for(let i=0;i<5;i++){

        let playerSelection=prompt("Rock, Paper or Scissors? ");
        result=playRound(playerSelection,getComputerChoice());
        console.log(result);

        if(result.charAt(4)=="w")
        {
            playerScore++;
            // console.log("Player Score:",playerScore);
        }
        
        else if(result.charAt(4)=="l")
        {
            computerScore++;
            // console.log("Computer Score:",computerScore);
        }
        
        else
        {
            continue;

        }
    }

    console.log("Final Score: Player - " +playerScore + " Computer - " + computerScore);


    if(playerScore>computerScore)
    {
        return "YOU WIN THE GAME";
    }

    else if(playerScore<computerScore)
    {
        return "YOU LOSE THE GAME";
    }

    else
    {
        return "TIE"
    }

}

console.log(playGame());