const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const frequency = () => {
  return new Promise((resolve, reject) => {
    r1.question("Enter the phrase: ", (input) => {
      const freq = {};

      for (const letter of input) {
        if (letter in freq) {
          freq[letter] += 1;
        } else {
          freq[letter] = 1;
        }
      }
      resolve(freq); 
    });
  });
};

// Usage
frequency()
  .then((result) => {
    // console.log(result); 
    r1.close(); 
  })
  .catch((error) => {
    // console.error("Error:", error);
    r1.close(); 
  });


  let p = new Promise((resolve, reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log("Promise completed")
        console.log(p)
        resolve(true)
    }, 5000)
  })

  p.then((value)=>{
    console.log(value)
  })
  .catch((err)=>{
    console.log({message: err})
  })