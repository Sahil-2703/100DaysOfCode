const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numbers = [];
let largest = null;

const largestNumber = () => {
    rl.question("Enter a number: ", (input) => {
        if (input.toLowerCase() === 'done') {
            rl.close();
            if (numbers.length === 0) {
                console.log("No number entered.....")
            } else {
                console.log(`The largest number entered is: ${largest}`)
            }
        } else {
            const num = parseFloat(input);
            if (!isNaN(num)) {
                numbers.push(num);
                if (largest === null || num > largest) {
                    largest = num;
                }
            } else {
                console.log('Invalid input. Please enter a valid number.')
            }
            largestNumber();
        }
    })
}

largestNumber();
