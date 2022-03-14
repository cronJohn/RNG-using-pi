import { digitsOfPi } from "./digits.js";

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

function piRng(timesBeforeSeedSwitch) {

    var randomDigitInPi = Math.floor(Math.random() * piSize); // store initial RNG digit
    var count = 1;

    function givePiDigit() {
        console.log(`this is the digit: ${randomDigitInPi}`);
        console.log(`this is the RNG: ${digitsOfPi[randomDigitInPi]}`);

        if (count >= timesBeforeSeedSwitch) { // if you generate the amount of RNG numbers you want, and it's time to switch seeds
            randomDigitInPi = giveNewSeed();
            count = 1
        } 
        
        else if (randomDigitInPi === piSize) { // you don't want to keep incrementing the seed if at piSize
            randomDigitInPi = giveNewSeed()
        }

        else { // you still need to generate more RNG numbers before a seed switch
            count++
            randomDigitInPi++
        };
    }

    function giveNewSeed() {
        return randomDigitInPi = Math.floor(Math.random() * piSize);
    }

    return givePiDigit;
}

var myDeal = piRng(2);
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