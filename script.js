var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characters = ["!", "@", "#", "$", "%", "&", "*", "_", "+", "?"];

function getPasswordCriteria() {
  var userKeyNumbers = confirm("Do you want numbers in your password?");
  var keyOptions = {
    userKeyNumbers: userKeyNumbers
  }
  return keyOptions;
}

function chooseRandom(length) {
  var randomNum = Math.floor(Math.random() * length);
  return randomNum;
}

function generatePassword() {
  var chosenKeys = getPasswordCriteria();
  var availableKeys = [];
  var passwordArr = [];
  if(chosenKeys.userKeyNumbers) {
    availableKeys =availableKeys.concat(numbers);
    console.log(availableKeys);
  }

  for(var i = 0; i < 4; i++) {
    passwordArr.push(availableKeys[chooseRandom(availableKeys.length)])
  }
  // insert something
  
  return passwordArr.join ("")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
