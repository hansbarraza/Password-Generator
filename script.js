var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "#", "$", "%", "&", "*", "_", "+", "?"];

function getPasswordCriteria() {
  choosenKeys = [];

  keyLength = prompt("How many characters do you want your password to be? (8 - 128 characters)");

  if (isNaN(keyLength) || keyLength < 8 || keyLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits.");
    return false;
  }

  if(confirm("Do you want numbers in your password?")) {
    choosenKeys = choosenKeys.concat(numbers);
  }
  if(confirm("Do you want uppercase in your password?")) {
    choosenKeys = choosenKeys.concat(uppercase);
  }
  if(confirm("Do you want lowercase in your password?")) {
    choosenKeys = choosenKeys.concat(lowercase);
  }
  if(confirm("Do you want symbols in your password?")) {
    choosenKeys = choosenKeys.concat(symbols);
  }
  return true;
}

function generatePassword() {
    getPasswordCriteria();
    var NewPassword = "";
    for(i = 0; i < keyLength; i++) {
      var randomkeys = Math.floor(Math.random() * choosenKeys.length);
      NewPassword = NewPassword + choosenKeys[randomkeys];
    }
    return NewPassword;
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
