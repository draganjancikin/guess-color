// VARIABLES *********************************************************
let colors;
let guessColor;
let numsOfColor = 6;


// SELECTED **********************************************************
let header = document.querySelector("h1");
let colorDisplay = document.querySelector("#color-display");
let messageDisplay = document.querySelector("#message");
let buttonNewColor = document.querySelector("#new-color");
let buttonEasy = document.querySelector("#easy");
let buttonHard = document.querySelector("#hard");
let divs = document.querySelectorAll(".color");


// EVENT LISTENERS ***************************************************
for (let i = 0; i < numsOfColor; i++){
    divs[i].addEventListener("click", function (event) {
        if (event.target.style.backgroundColor !== guessColor) {
            event.target.style.backgroundColor = "rgb(0, 0, 0)";
        } else {
            for (let i = 0; i < numsOfColor; i++){
                divs[i].style.backgroundColor = guessColor;
                header.style.backgroundColor = guessColor;
            }
            buttonNewColor.innerText = "Play Again!";
        }
    });
}

buttonNewColor.addEventListener("click", function () {
    reset();
    buttonNewColor.innerText = "NEW COLORS";
});

buttonEasy.addEventListener("click", function () {
    numsOfColor = 3;
    buttonEasy.classList.add("active");
    buttonHard.classList.remove("active");
    reset();
    for (let i = 3; i < 6; i++){
        divs[i].style.backgroundColor = "rgb(0, 0, 0)";
    }
});

buttonHard.addEventListener("click", function () {
    numsOfColor = 6;
    buttonEasy.classList.remove("active");
    buttonHard.classList.add("active");
    reset();
});


// FUNCTIONS *********************************************************
function init() {
    reset();
}

function reset() {
    colors = getRandomColors();
    guessColor = colors[getRandomNumber(0, numsOfColor - 1)];
    colorDisplay.innerText = guessColor;
    for (let i = 0; i < numsOfColor; i++){
        divs[i].style.backgroundColor = colors[i];
    }
    header.style.backgroundColor = "#3C75AD";
}

function getRandomColors() {
    let arr = [];
    for (let i = 0; i < numsOfColor; i++){
        arr.push(getRandomColor()); 
    }
    return arr;
}

function getRandomColor() {
    let red = getRandomNumber(0, 255);
    let green = getRandomNumber(0, 255);
    let blu = getRandomNumber(0, 255);
    let color = `rgb(${red}, ${green}, ${blu})`;
    return color;
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// CODE **************************************************************

init();
