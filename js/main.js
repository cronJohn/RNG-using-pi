import { digitsOfPi } from "./digits.js";

/*
function getRandomNumberFromPi (length) {
    let randomNumber = Math.floor(Math.random() * 10000);
    
    let arr = [];
    for (let i = randomNumber; i < randomNumber + length; i++) {
        arr.push(digitsOfPi[i]);
    }
}
*/

function concatDigitsOfPi(spread, position) {
    let string = "";
    let start = position - Math.floor((spread / 2))

    for (let i = start; i < start + spread; i++){
        string += digitsOfPi[i];
    }
    return string
}

let randomNumber = Math.floor(Math.random() * 10000);

function changeNumbers() {
    let circleNum = document.getElementById("circle-num");
    let currentPosition = document.getElementById("current-position");
    let sequence = document.getElementById("sequence");
    circleNum.innerHTML = digitsOfPi[randomNumber];
    currentPosition.innerHTML = randomNumber;
    sequence.innerHTML = concatDigitsOfPi(5,randomNumber);
    randomNumber++;
}

function copyToClipboard () {
    let codeToCopy = document.getElementsByTagName("code")[0].innerText;
    navigator.clipboard.writeText(codeToCopy);
    alert(`Text copied: ${codeToCopy}`);
}

// add event listener to next number button
document.getElementById("next-number").addEventListener("click", changeNumbers);

// add event listener to copy button
document.getElementById("copy-button").addEventListener("click", copyToClipboard);