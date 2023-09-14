// Strings
let name = "Sahil";
// console.log(name.length)
for(a of name){
    // console.log(a)
}

let c = 'pratik'
let b = 'nilesh'
let sentance = `c is friend of b`
// console.log(sentance)

let fruit = 'banana\'s\nthis is very tasty'
// console.log(fruit)

// methods
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(1,4))
// console.log(name.slice(2))
// console.log(name.replace("Sah", "Soh"))
let name2 = "           abc             "
// console.log(name2.trim())

for(i=0;i<=name.length;i++){
    // console.log(name[i]);
}


const a1 = [
    {
        name:'Som',
        roll:'151',
        stream:'B.Tech'
    },
    {
        name:'Sahil',
        roll:'122',
        stream:'B.Tech'
    }
]

// console.log(a1)


let sens1 = 'this is sentance 1 and it contains that the other word has'
let sens2 = 'this'
let sens3 = 'has'

// console.log(sens1.includes(sens2)===true? sens1 : 'kisi kaam ka nhi hai re tu')
// console.log(sens1.startsWith(sens2))
// console.log(sens1.endsWith(sens3))

let str = 'give me 1000'
let amount = str.slice('give me '.length)
// console.log(amount)
// console.log(typeof amount)
amount = Number.parseInt(amount)
// console.log(typeof amount)

// arrays 
let buddy =[
    {
        id:1,
        name:'sahil',
        age:45,
        phone:24524903840
    },{
        id:2,
        name:'som',
        age:45,
        phone:24524903840
    },{
        id:3,
        name:'harish',
        age:45,
        phone:24524903840
    }
]


data = buddy.map((itmes)=>{
    return `${itmes.name} is a peron with an id no. ${itmes.id}\nhis age is ${itmes.age}.\nphone number is ${itmes.phone} `
})

// console.log(data)

let data1 = 24+57
data1 += 57
// console.log(`${data1} is the value 0f 24 + 57`)

let addy =[2,30,4,3,2]
// console.log(addy) //mutable 

// let str2 = addy.toString()
// let str2 = addy.join("-")
// let str2 = addy.pop()
// let str2 = addy.push(34)
// let str2 = addy.shift(34)
// console.log(str2, addy)
// console.log(str2, addy)
//unshift adds an elements in the start of an array 
// console.log(addy.length)
// delete addy[3]
// console.log(addy.length)
// addy.sort()
// console.log(addy)

let compare = (a,b)=>{
    return a-b;
}
addy.sort(compare)
// console.log(addy)

addy.splice(3, 3, 45,43,23) //adds 3 elements, namely 45,43,23 in position of index 3 
console.log(addy)