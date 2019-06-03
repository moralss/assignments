let guess = "";

let computerOpitions = ['rock' , 'paper' , 'scissor'];

function play(){
    let userInput = document.getElementById("input");
    let outValue = document.getElementById("output");
    let winner = determineWinniner(userInput.value);

    outValue.innerHTML = `${winner} the computer guess   
    ${guess}
    `;
}



function generateCpuGuess(){
    let randomNumber = Math.floor(Math.random(3) * 3);
    let computerGuess = computerOpitions[randomNumber];
    return computerGuess;
}


function determineWinniner(userInput){
    let computerGuess = generateCpuGuess();
    guess = computerGuess;
    if(userInput == computerGuess) return "draw"

    if(userInput == 'rock'){        
        if(computerGuess == 'scissor') return "you win"
        if(computerGuess == 'paper') return "you lost"
    } 

    else if(userInput == 'paper'){        
        if(computerGuess == 'scissor') return "you lost"
        if(computerGuess == 'rock') return "you win"
        
    } 

    else if(userInput == 'scissor'){        
        if(computerGuess == 'rock') return "you lost"
        if(computerGuess == 'paper') return "you win"
    } 
}






