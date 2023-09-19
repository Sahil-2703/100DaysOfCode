const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let randNumber = Math.floor(Math.random() * 100)
let score = 0;
// console.log(randNumber)

const guessTheNumber = () => {
    rl.question("Enter the number:\n", (userInput)=>{
        userInput = Number.parseInt(userInput)
            score++;
            if(userInput === randNumber){
                console.log(`Congratulations!! you have guessed the number correctly in ${score} attempt`)
                rl.close();
            }
            else if(userInput > randNumber){
                console.log("Number is greater than the actual number....")
                guessTheNumber();
            }
            else{
                console.log("Number is lesser than the actual number....")
                guessTheNumber();
            }
    })
}

guessTheNumber();