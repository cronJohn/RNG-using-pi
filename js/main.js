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


let piSize = 10000
let randomDigitInPi = Math.floor(Math.random() * piSize);

function piRng (timesSwitchSeed) {

    var randomDigitInPi = Math.floor(Math.random() * piSize);
    var count = 1;

    function givePiDigit() {
        console.log(`this is the digit: ${randomDigitInPi}`);

        if (count >= timesSwitchSeed) {
            randomDigitInPi = Math.floor(Math.random() * piSize);
            count = 1;
        }else count++;
    }

    return givePiDigit;
}

var myDeal = piRng(3);
myDeal();
myDeal();
myDeal();
myDeal();
myDeal();
myDeal();
myDeal();
myDeal();
myDeal();


function changeNumbers() {
    let circleNum = document.getElementById("circle-num");
    let currentPosition = document.getElementById("current-position");
    let sequence = document.getElementById("sequence");
    circleNum.innerHTML = digitsOfPi[randomDigitInPi];
    currentPosition.innerHTML = randomDigitInPi;
    sequence.innerHTML = concatDigitsOfPi(5,randomDigitInPi);
    randomDigitInPi++;
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