const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cpuInp = Math.floor(Math.random() * 3);
let cpu = ["R", "P", "S"][cpuInp];
// console.log("CPU chose : "+cpu);


const guessTheAction = () => {
  rl.question("Enter the action (R, P, S):\n", (userInput) => {

    if(cpu === userInput){
        console.log("Match tied.....")
    }
    else if(
        (cpu === "R" && userInput === "S") ||
        (cpu === "P" && userInput === "R") ||
        (cpu === "S" && userInput === "P")
    ){
        console.log(`CPU wins!! you chose ${userInput} and cpu chose ${cpu}`)
    }
    else if(
        (cpu === "R" && userInput === "p") ||
        (cpu === "P" && userInput === "S") ||
        (cpu === "S" && userInput === "R")
    ){
        console.log(`You wins!! you chose ${userInput} and cpu chose ${cpu}`)
    }
    else{
        console.log("Enter a valid input")
    }
    rl.close();
  });
};

let result = guessTheAction();



