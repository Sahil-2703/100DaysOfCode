// console.log("hello this is a console ")
const obj = {
    a:1,
    b:2,
    c:3,
    d:4
}

console.assert(55>3)
console.warn("this is warning")
console.error("this is error")
console.table(obj)

console.time("a")
console.timeEnd("a")

alert("Enter the value of a")
let a = prompt("Value of a is")
// console.log(a)

let write = confirm("Do you want to write it to the page")
if(write){
    document.write(a)
}
// else{
//     return (
//         <div>this is div element from else block</div>
//     )
// }

//

// console.log(document)
document.body.style.color = "white"
document.body.style.background = "black"
//location.href="LINK"

let color = prompt("enter the color:")
document.body.style.background = color;