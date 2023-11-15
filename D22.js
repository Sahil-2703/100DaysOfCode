
const person = (name, age, gender, phone)=>{
    const personData = {
        name : name,
        age : age,
        gender : gender,
        phone: phone
    }

    const example = `Hii! I'm ${personData.name} and I am a ${personData.gender}. I am ${personData.age} years old and here is my contact number, ${personData.phone}.`

    return example;
}

// console.log(person("Sahil", 19, "Male", 9004016710))

function howManyNumbers () {
    const statement = "hello there its nice to meet you buddy";

    for(letters in statement){
        console.log(letters, statement[letters])
    }
   
}
howManyNumbers()