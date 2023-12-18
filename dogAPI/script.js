// api --> https://dog.cer/api/breeds/image/random

const dogImg = document.getElementById("dogImg");
const newDog = document.getElementById("newDog");

const getNewDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      dogImg.innerHTML = `<img src ='${json.message}' height=300 width=300>`;
    });
};

newDog.onclick = () => getNewDog()