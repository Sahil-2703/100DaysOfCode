let arr = [45, 23, 44, 8, 9, 263]


// map makes a new array and forEach works on existing array.
arr.map((ele, index, array)=>{
    // console.log(ele, index, array)
})

let a1 = arr.filter((a)=>{
    return a < 10;
})
// console.log(a1)

//reduce method

let a2 = arr.reduce((ele1, ele2)=>{
    return ele1 + ele2
})
// console.log(typeof a2)