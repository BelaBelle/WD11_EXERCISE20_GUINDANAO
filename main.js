

let rockChoose = document.getElementById("ROCK");  
let paperChoose = document.getElementById("PAPER");  
let scissorsChoose = document.getElementById("SCISSORS");
let results = document.querySelector('.result');
let playerchoose = document.querySelector('.playerchoice');
let computerchoose = document.querySelector('.computerChoice');


function getComputerChoice() {  
    let choices = ["ROCK", "PAPER", "SCISSORS"];  
    let randomNumber = Math.floor(Math.random() * 3);  
    return choices[randomNumber];  
} ;


    function game(playerChoice){

        let computerChoice = getComputerChoice(); 

        if (computerChoice == playerChoice)  {
           
            
            playerchoose.innerHTML = playerChoice ;
            computerchoose.innerHTML = computerChoice;
            results.innerHTML = "DRAW!!!";

        } 
        
        else if(playerChoice == "ROCK"){
           
            if(computerChoice == "SCISSORS"){
                
                
                playerchoose.innerHTML = playerChoice ;
                computerchoose.innerHTML = computerChoice;
                results.innerHTML = "YOU WIN!!";
            }
            else{
                
                
                playerchoose.innerHTML = playerChoice ;
                computerchoose.innerHTML = computerChoice;
                results.innerHTML = "YOU LOSE!!!";

            } 
        }

        else if (playerChoice =="PAPER"){

            if(computerChoice == "ROCK"){
                
                playerchoose.innerHTML = playerChoice ;
                computerchoose.innerHTML = computerChoice;
                results.innerHTML = "YOU WIN!!";
            }
            else{
                
                playerchoose.innerHTML = playerChoice ;
                computerchoose.innerHTML = computerChoice;
                results.innerHTML = "YOU LOSE!!!";
            } 

        }

        else if (playerChoice =="SCISSORS"){
            
            if(computerChoice == "PAPER"){
                
                playerchoose.innerHTML = playerChoice ;
                computerchoose.innerHTML = computerChoice;
                results.innerHTML = "YOU WIN!!";
            }
            else{
              
                playerchoose.innerHTML = playerChoice ;
                computerchoose.innerHTML = computerChoice;
                results.innerHTML = "YOU LOSE!!!";
            } 

        }

    }
    function main() {  
        rockChoose.addEventListener('click', () => game("ROCK"));  
        paperChoose.addEventListener('click', () => game("PAPER"));  
        scissorsChoose.addEventListener('click', () => game("SCISSORS"));  
       }  
       main();  
    
// };

