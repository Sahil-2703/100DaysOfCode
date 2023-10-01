let cTitle = document.getElementsByClassName("card-title")

// first way
// for(i=0; i< cTitle.length; i++){
//     cTitle[i].style.color = "blue"
// }

// second way
// let cTitleArray = [...cTitle];
// cTitleArray.forEach((e)=>{
//     e.style.color="red"
// })

// css selector
let card = document.querySelectorAll(".card-title")
// console.log(card.length)
// for(i=0; i<card.length; i++){
//     card[i].style.color = "rgb(186, 10, 230)"
// }

// let para = document.querySelectorAll(".card-text")[0]
// para.style.color = "green"
// para.style.background = "yellow"

// let cards = document.querySelector(".card").getElementsByTagName("a")

// console.log(cards)


let id1 = document.getElementById("id1")
console.log(id1)
console.log(id1.matches(".card-body"))