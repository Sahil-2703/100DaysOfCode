let sum = 0
let num = 3
for(let i = 0; i<num; i++){
    sum += i+1
}
// console.log("Sum of first 12 number is:",sum)

let obj = {
    sahil: 78,
    mandy: 89,
    jessy: 36,
    linda: 19
}

// for in loop
for(let a in obj){
    // console.log("Marks of " + a + " is " + obj[a])
}

// for of loop
for(b of "sahil"){
    // console.log(b)
}

// while loop
let i = 0
while(i<5){
    // console.log(i)
    i++
}

// do while

let n = 8
do{
    // console.log(n)
    n++
}while(n<20)

// functions 
function avg_num (a,b,c,d){
    let result = Math.round((a+b+c+d)/4)
    return result
}

console.log(avg_num(45,34,65,23));