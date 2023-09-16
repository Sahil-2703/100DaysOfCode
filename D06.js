let num = [34,43,232,32,45324,23,3423]

for(i=0;i<num.length;i++){
    // console.log(num[i])
}

num.forEach((ele) => {
    // console.log(ele)
})
let compare = (a,b) => {
    return a-b
}
num.sort(compare)
num.map((ele) => {
    // console.log(ele)
})

let a = 'sahil'

console.log(Array.from(a))