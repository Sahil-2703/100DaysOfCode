// https://superheroapi.com/api/864185422047666

const heroName = document.querySelector(".hero-name");
const imageDiv = document.querySelector(".hero-image");

const combat = document.querySelector(".combat");
const durability = document.querySelector(".durability");
const intelligence = document.querySelector(".intelligence");
const power = document.querySelector(".power");
const speed = document.querySelector(".speed");
const strength = document.querySelector(".strength");

const alignment = document.querySelector(".alignment");
const alterEgo = document.querySelector(".alter-ego");
const firstAppereance = document.querySelector(".first-appearance");
const birthPlace = document.querySelector(".place-of-birth");
const publisher = document.querySelector(".publisher");

const eyeColor = document.querySelector(".eye-color");
const gender = document.querySelector(".gender");
const hairColor = document.querySelector(".hair-color");
const race = document.querySelector(".race");

const group = document.querySelector(".group-affiliation");
const relative = document.querySelector(".relative");

const base = document.querySelector(".base");
const occupation = document.querySelector(".occupation");

const baseUrl = "https://superheroapi.com/api.php/864185422047666";

const setSuperHero = () => {
  const searchID = document.getElementById("search_hero").value;
  getSuperHeroByID(searchID);
};

const getSuperHeroByID = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`);
  const data = await res.json();
    console.log("id",data);
  updateHeroSection(data);
};

const updateHeroSection = (data) => {
  heroName.innerText = data.name;
  imageDiv.innerHTML = `<img src="${data.image.url}">`;

  combat.innerText = `Combat : ${data.powerstats.combat}`;
  durability.innerText = `Durability : ${data.powerstats.durability}`;
  intelligence.innerText = `Intelligence : ${data.powerstats.intelligence}`;
  power.innerText = `Power : ${data.powerstats.power}`;
  speed.innerText = `Speed : ${data.powerstats.speed}`;
  strength.innerText = `Strength : ${data.powerstats.strength}`;

  alignment.innerText = `Alignment : ${data.biography.alignment}`;
  publisher.innerText = `Publisher: ${data.biography.publisher}`;

  gender.innerText = `Gender : ${data.appearance.gender}`;

  relative.innerText = `Relatives : ${data.connections.relatives}`;

  occupation.innerText = `Occupation : ${data.work.occupation}`;
  base.innerText = `Base : ${data.work.base}`;
};

const search = document.getElementById("search");
search.addEventListener("click", setSuperHero);

