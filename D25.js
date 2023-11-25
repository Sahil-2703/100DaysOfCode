// higher order functions
// map
// filter
// reduce

const sumArray = (number) => {

    let result = 0;
    for(let i=0; i<number.length; i++){
        result += number[i];
    }
    return {result}
}

// console.log(sumArray([2,4,5,6,3]))


const nums = [1,2,3,4,5,6,7,8,9,0,2355464]

const result = nums.reduce((prev, nex)=>{
   const sum = prev + nex;
   return sum
})
console.log(result)