// const numbers = [1,2,3,4,5,6]
// // let i;
// let result = [];
// for(i=0; i<numbers.length; i++){
    //     // console.log(numbers[i] * numbers[i];
    //     result.push(numbers[i] * 2)
    // }
// console.log(result)


const square = () => {
    let result = [];
    for(i=0; i<35; i++){
        result.push(i * i);
    }
    console.log(result)
}
const prime = () => {
    let result = [];
    for(i=0; i<100; i++){
        // result.push(i * i);
        if(i%2!==0 && i%3!==0 && i%5!==0 && i%7!==0 && i%9!==0){
            result.push(i);
        }
    }
    console.log(result)
}
prime();
// square();
