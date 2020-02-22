// VARIABLES *********************************************************
let colors = [];
let guessColor;
let numsOfColor = 6;


// SELECTED **********************************************************
let header = document.querySelector("h1");
let colorDisplay = document.querySelector("#color-display");
let messageDisplay = document.querySelector("#message");
let buttonNewColor = document.querySelector("#new-color");
let buttonEasy = document.querySelector("#easy");
let buttonHard = document.querySelector("#hard");
let divs = document.querySelectorAll(".square");


init();


// FUNCTIONS *********************************************************

function init() {

    // Event listeners 
    buttonNewColor.addEventListener("click", function () {
        reset();
    });
    
    buttonEasy.addEventListener("click", function () {
        numsOfColor = 3;
        buttonEasy.classList.add("active");
        buttonHard.classList.remove("active");
        reset();
    });
    
    buttonHard.addEventListener("click", function () {
        numsOfColor = 6;
        buttonEasy.classList.remove("active");
        buttonHard.classList.add("active");
        reset();
    });

    for (let i = 0; i < numsOfColor; i++){
        divs[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor !== guessColor) {
                this.style.backgroundColor = "rgb(0, 0, 0)";
                messageDisplay.innerText = "Try again!";
            } else {
                for (let i = 0; i < numsOfColor; i++){
                    divs[i].style.backgroundColor = clickedColor;
                }
                header.style.backgroundColor = clickedColor;
                messageDisplay.innerText = "You Are Win!";
                buttonNewColor.innerText = "Play Again!";
            }
        });
    }

    // reset
    reset();
}

function reset() {
    colors = getRandomColors(numsOfColor);
    guessColor = colors[getRandomNumber(0, numsOfColor - 1)];
    colorDisplay.innerText = guessColor;
    for (let i = 0; i < 6; i++){
        if (colors[i]) {
            divs[i].style.backgroundColor = colors[i];   
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }
    header.style.backgroundColor = "#3C75AD";
    messageDisplay.innerText = "";
    buttonNewColor.innerText = "NEW COLORS";
}

function getRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++){
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
