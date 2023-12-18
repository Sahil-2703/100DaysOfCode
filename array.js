const randomFruit = (fruits)=>{
    const randomNumber = Math.floor(Math.random()*fruits.length)
    return fruits[randomNumber]
}

const fruits = ['banana', 'apple', 'grapes', 'oranges', 'mango']

console.log(randomFruit(fruits))