const jokesArray = [
  "What did one hat say to the other? You wait here — I'll go on ahead!",
  "Why don't the circus lions eat the clowns? Because they taste funny!",
  'What did the pirate say when he turned 80?"Aye matey."',
  "Why did the chicken cross the playground? To get to the other slide!",
  "Why did the actor fall through the floorboards? They were going through a stage!",
  "Why did a scarecrow win a Nobel prize? He was outstanding in his field!",
  "Why are peppers the best at archery? Because they habanero!",
  "What did the duck say after she bought chapstick? Put it on my bill!",
  "Why did an old man fall in a well? Because he couldn’t see that well!",
  "What do you call a fake noodle? An impasta!",
  'What did the three-legged dog say when he walked into a saloon? "I\'m looking for the man who shot my paw!"',
  "How do you tell the difference between a bull and a cow? It is either one or the udder!",
  "What's red and smells like blue paint? Red paint!",
  "What's the difference between a hippo and a Zippo? One is very heavy, the other is a little lighter!",
];

const imageUrl = [
  "https://wallpapers.com/images/hd/funny-anime-faces-of-luffy-friends-xwscxl0kn7ehokuh.jpg",
  "https://wallpapers.com/images/featured/funny-anime-9vnia7uc4fa7w7x2.jpg",
  "https://i.ytimg.com/vi/21juP6tkp-A/maxresdefault.jpg",
  "https://c4.wallpaperflare.com/wallpaper/699/802/449/anime-noragami-funny-yato-noragami-wallpaper-preview.jpg",
  "https://wallpapers.com/images/hd/funny-anime-one-piece-zoro-t1oxmhsuegp0kcqu.jpg",
  "https://e0.pxfuel.com/wallpapers/889/726/desktop-wallpaper-funny-anime-anime-funny-face.jpg",
  "https://w0.peakpx.com/wallpaper/683/578/HD-wallpaper-bored-girl-anime-annoyed-funny-stfu.jpg",
  "https://w0.peakpx.com/wallpaper/194/959/HD-wallpaper-tanaka-anime-funny-anime-haikyuu-tanaka-buddha.jpg",
  "https://e0.pxfuel.com/wallpapers/971/468/desktop-wallpaper-naruto-funny-faces-anime-funny-face-thumbnail.jpg",
  "https://i.pinimg.com/originals/0f/9b/3b/0f9b3b3e323ce6581e47e402a5713235.jpg",
  "https://cdn.myanimelist.net/s/common/uploaded_files/1482990867-a74ffd8e39cd319b49035ba397a08c41.jpeg",
  "https://pbs.twimg.com/media/FOlvH32aMAIjJyY?format=jpg&name=large",
  "https://qph.cf2.quoracdn.net/main-qimg-28adaa2634a9bd29e0e833ef377e1eef-lq",
];

const showRandomJokes = () => {
  const randomJokesIndex = Math.floor(Math.random() * jokesArray.length);
  const randomImagesIndex = Math.floor(Math.random() * imageUrl.length);

  const randomJokes = jokesArray[randomJokesIndex];
  const randomImages = imageUrl[randomImagesIndex]
  // console.log(randomJokes)

  let jokePara = document.getElementById("joke-para");
  jokePara.textContent = randomJokes;

  let imageSource = document.querySelector(".funny-images")
  imageSource.src = randomImages

};

let jokeGenerator = document.querySelector(".joke-generator-btn");
jokeGenerator.addEventListener("click", showRandomJokes);

showRandomJokes()
