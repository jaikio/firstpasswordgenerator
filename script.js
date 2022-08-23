"use strict";

const password = document.querySelector(".password");
const btnGenerate = document.querySelector(".btn--generate");

const smallLetterChecked = document.getElementById("SmallLetters");
const bigLetterChecked = document.getElementById("BigLetters");
const numbersChecked = document.getElementById("Numbers");
const specialChecked = document.getElementById("signs");

let finalSource = [""];
let finalPW = [""];

smallLetterChecked.checked = true;
bigLetterChecked.checked = true;
numbersChecked.checked = true;
specialChecked.checked = true;

//declare stings with contents
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specials = ["!", "@", "#", "$", "%", "^", "^", "*", "(", ")", "-", "_", "=", "+"];

const generatePassword = function () {
  password.textContent = "";
  finalPW = [""];
  finalSource = [""];
  //push to finalSource file
  if (smallLetterChecked.checked) {
    finalSource = finalSource.concat(letters);
  }
  if (bigLetterChecked.checked) {
    finalSource = finalSource.concat(LETTERS);
  }
  if (numbersChecked.checked) {
    finalSource = finalSource.concat(numbers);
  }
  if (specialChecked.checked) {
    finalSource = finalSource.concat(specials);
  }

  //generate password
  const numbersOfCharacters = document.querySelector("#numberInput").value;

  for (let i = 0; i < numbersOfCharacters; i++) {
    const randomNumber = Math.ceil(Math.random() * finalSource.length);
    finalPW = finalPW.concat(finalSource[randomNumber]);
  }
  password.textContent = finalPW.join("");
};

btnGenerate.addEventListener("click", generatePassword);
