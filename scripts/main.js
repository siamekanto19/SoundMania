// Popup Show

$(document).ready(function () {
  setTimeout(function () {
    $("#popup").css("margin-top", "0");
    $(".black-background").css("display", "block");
  }, 1000);
});

const popupClose = () => {
  $("#popup").css("margin-top", "-500%");
  $(".black-background").css("display", "none");
};

//Theme Selection

const themeChange = () => {
  $(".theme-select").css("margin-top", "0");
  $(".black-background").css("display", "block");
};

$("#green").click(function () {
  document.body.style.backgroundColor = "#229954";
  $(".theme-select").css("margin-top", "-200%");
  $(".black-background").css("display", "none");
  $("meta[name='theme-color']").attr("content", "#229954");
});

$("#gray").click(function () {
  document.body.style.backgroundColor = "#333";
  $(".theme-select").css("margin-top", "-200%");
  $(".black-background").css("display", "none");
  $("meta[name='theme-color']").attr("content", "#333");
});

$("#red").click(function () {
  document.body.style.backgroundColor = "#e74c3c";
  $(".theme-select").css("margin-top", "-200%");
  $(".black-background").css("display", "none");
  $("meta[name='theme-color']").attr("content", "#e74c3c");
});

$("#purple").click(function () {
  document.body.style.backgroundColor = "#7d3c98";
  $(".theme-select").css("margin-top", "-200%");
  $(".black-background").css("display", "none");
  $("meta[name='theme-color']").attr("content", "#7d3c98");
});

$("#black").click(function () {
  document.body.style.backgroundColor = "black";
  $(".theme-select").css("margin-top", "-200%");
  $(".black-background").css("display", "none");
  $("meta[name='theme-color']").attr("content", "black");
});

$("#blue").click(function () {
  document.body.style.backgroundColor = "#1e88e5";
  $(".theme-select").css("margin-top", "-200%");
  $(".black-background").css("display", "none");
  $("meta[name='theme-color']").attr("content", "#1e88e8");
});

$("#orange").click(function () {
  document.body.style.backgroundColor = "#d35400";
  $(".theme-select").css("margin-top", "-200%");
  $(".black-background").css("display", "none");
  $("meta[name='theme-color']").attr("content", "#d35400");
});

$("#paste").click(function () {
  document.body.style.backgroundColor = "#16a085";
  $(".theme-select").css("margin-top", "-200%");
  $(".black-background").css("display", "none");
  $("meta[name='theme-color']").attr("content", "#16a085");
});

// Cat

const catCard = document.getElementById("cat");
const catSound = document.querySelector(".cat");
let catisPlaying = false;

catCard.addEventListener("click", () => {
  catisPlaying = !catisPlaying;
  catCard.classList.toggle("rotate");
  if (catisPlaying) {
    catSound.play();
  } else {
    catSound.pause();
  }
});

// Dog

const dogCard = document.getElementById("dog");
const dogSound = document.querySelector(".dog");
let dogisPlaying = false;

dogCard.addEventListener("click", () => {
  dogisPlaying = !dogisPlaying;
  dogCard.classList.toggle("rotate");
  if (dogisPlaying) {
    dogSound.play();
  } else {
    dogSound.pause();
  }
});

// Cow

const cowCard = document.getElementById("cow");
const cowSound = document.querySelector(".cow");
let cowisPlaying = false;

cowCard.addEventListener("click", () => {
  cowisPlaying = !cowisPlaying;
  cowCard.classList.toggle("rotate");
  if (cowisPlaying) {
    cowSound.play();
  } else {
    cowSound.pause();
  }
});

// Wolf

const wolfCard = document.getElementById("wolf");
const wolfSound = document.querySelector(".wolf");
let wolfisPlaying = false;

wolfCard.addEventListener("click", () => {
  wolfisPlaying = !wolfisPlaying;
  wolfCard.classList.toggle("rotate");
  if (wolfisPlaying) {
    wolfSound.play();
  } else {
    wolfSound.pause();
  }
});

// Fire

const fireCard = document.getElementById("fire");
const fireSound = document.querySelector(".fire");
let fireisPlaying = false;

fireCard.addEventListener("click", () => {
  fireisPlaying = !fireisPlaying;
  fireCard.classList.toggle("rotate");
  if (fireisPlaying) {
    fireSound.play();
  } else {
    fireSound.pause();
  }
});

// Aeroplane

const aeroplaneCard = document.getElementById("aeroplane");
const aeroplaneSound = document.querySelector(".aeroplane-sound");
let aeroplaneisPlaying = false;

aeroplaneCard.addEventListener("click", () => {
  aeroplaneisPlaying = !aeroplaneisPlaying;
  aeroplaneCard.classList.toggle("rotate");
  if (aeroplaneisPlaying) {
    aeroplaneSound.play();
  } else {
    aeroplaneSound.pause();
  }
});

// Street

const streetCard = document.getElementById("street");
const streetSound = document.querySelector(".street-sound");
let streetisPlaying = false;

streetCard.addEventListener("click", () => {
  streetisPlaying = !streetisPlaying;
  streetCard.classList.toggle("rotate");
  if (streetisPlaying) {
    streetSound.play();
  } else {
    streetSound.pause();
  }
});

// Bird

const birdCard = document.getElementById("bird");
const birdSound = document.querySelector(".bird-sound");
let birdisPlaying = false;

birdCard.addEventListener("click", () => {
  birdisPlaying = !birdisPlaying;
  birdCard.classList.toggle("rotate");
  if (birdisPlaying) {
    birdSound.play();
  } else {
    birdSound.pause();
  }
});

// Chopper

const chopperCard = document.getElementById("chopper");
const chopperSound = document.querySelector(".chopper-sound");
let chopperisPlaying = false;

chopperCard.addEventListener("click", () => {
  chopperisPlaying = !chopperisPlaying;
  chopperCard.classList.toggle("rotate");
  if (chopperisPlaying) {
    chopperSound.play();
  } else {
    chopperSound.pause();
  }
});

// Drawing

const drawingCard = document.getElementById("drawing");
const drawingSound = document.querySelector(".drawing-sound");
let drawingisPlaying = false;

drawingCard.addEventListener("click", () => {
  drawingisPlaying = !drawingisPlaying;
  drawingCard.classList.toggle("rotate");
  if (drawingisPlaying) {
    drawingSound.play();
  } else {
    drawingSound.pause();
  }
});

// Racing Car

const racingCard = document.getElementById("racing-car");
const racingSound = document.querySelector(".racing-car");
let racingisPlaying = false;

racingCard.addEventListener("click", () => {
  racingisPlaying = !racingisPlaying;
  racingCard.classList.toggle("rotate");
  if (racingisPlaying) {
    racingSound.play();
  } else {
    racingSound.pause();
  }
});

// Haloween

const haloweenCard = document.getElementById("pumpkin");
const haloweenSound = document.querySelector(".haloween");
let haloweenisPlaying = false;

haloweenCard.addEventListener("click", () => {
  haloweenisPlaying = !haloweenisPlaying;
  haloweenCard.classList.toggle("rotate");
  if (haloweenisPlaying) {
    haloweenSound.play();
  } else {
    haloweenSound.pause();
  }
});

// Marbles

const marblesCard = document.getElementById("marbles");
const marblesSound = document.querySelector(".marbles");
let marblesisPlaying = false;

marblesCard.addEventListener("click", () => {
  marblesisPlaying = !marblesisPlaying;
  marblesCard.classList.toggle("rotate");
  if (marblesisPlaying) {
    marblesSound.play();
  } else {
    marblesSound.pause();
  }
});

// Storm

const stormCard = document.getElementById("storm");
const stormSound = document.querySelector(".storm");
let stormisPlaying = false;

stormCard.addEventListener("click", () => {
  stormisPlaying = !stormisPlaying;
  stormCard.classList.toggle("rotate");
  if (stormisPlaying) {
    stormSound.play();
  } else {
    stormSound.pause();
  }
});

// Water

const waterCard = document.getElementById("water");
const waterSound = document.querySelector(".water");
let waterisPlaying = false;

waterCard.addEventListener("click", () => {
  waterisPlaying = !waterisPlaying;
  waterCard.classList.toggle("rotate");
  if (waterisPlaying) {
    waterSound.play();
  } else {
    waterSound.pause();
  }
});

// Crying

const cryingCard = document.getElementById("crying");
const cryingSound = document.querySelector(".crying");
let cryingisPlaying = false;

cryingCard.addEventListener("click", () => {
  cryingisPlaying = !cryingisPlaying;
  cryingCard.classList.toggle("rotate");
  if (cryingisPlaying) {
    cryingSound.play();
  } else {
    cryingSound.pause();
  }
});

// Party

const partyCard = document.getElementById("party");
const partySound = document.querySelector(".party");
let partyisPlaying = false;

partyCard.addEventListener("click", () => {
  partyisPlaying = !partyisPlaying;
  partyCard.classList.toggle("rotate");
  if (partyisPlaying) {
    partySound.play();
  } else {
    partySound.pause();
  }
});

// Photocopy

const photocopyCard = document.getElementById("photocopy");
const photocopySound = document.querySelector(".photocopy");
let photocopyisPlaying = false;

photocopyCard.addEventListener("click", () => {
  photocopyisPlaying = !photocopyisPlaying;
  photocopyCard.classList.toggle("rotate");
  if (photocopyisPlaying) {
    photocopySound.play();
  } else {
    photocopySound.pause();
  }
});

// Old Car Engine

const carCard = document.getElementById("car");
const carSound = document.querySelector(".car");
let carisPlaying = false;

carCard.addEventListener("click", () => {
  carisPlaying = !carisPlaying;
  carCard.classList.toggle("rotate");
  if (carisPlaying) {
    carSound.play();
  } else {
    carSound.pause();
  }
});

// Frog

const frogCard = document.getElementById("frog");
const frogSound = document.querySelector(".frog");
let frogisPlaying = false;

frogCard.addEventListener("click", () => {
  frogisPlaying = !frogisPlaying;
  frogCard.classList.toggle("rotate");
  if (frogisPlaying) {
    frogSound.play();
  } else {
    frogSound.pause();
  }
});
