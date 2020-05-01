var currentGradient = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var randomizer = document.querySelector("#randomizer");


function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value + ")";
    printCurrentGradient();
}

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    var randomRgbHex = o(r() * s)
    var RgbHex = "";
    for(var i = 0; i < 3; i++) {
        if(randomRgbHex.length != 2) {
            randomRgbHex = "0" + randomRgbHex;
        }
        RgbHex = RgbHex + randomRgbHex;
    }
    RgbHex = "#" + RgbHex;
    return RgbHex;
}

function randomize() {
    color1.value = random_rgb();
    color2.value = random_rgb();
    setGradient();
}

function printCurrentGradient() {
    currentGradient.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomizer.addEventListener("click", randomize);
window.addEventListener("DOMContentLoaded", setGradient);
