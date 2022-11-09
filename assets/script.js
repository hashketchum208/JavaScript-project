// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min + (1 - rand) + rand*max )
}

function getRandomItem(list) {
  return list[randomInt(0, list.length -1)]
}


function generatePassword() {

var userInput = window.prompt("Choose length of password by entering 8-128")

var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)) {
  window.alert('Not accepted. Please check password criteria')
  return
} 

if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Password must be between 8 and 128")
  return
}

var numbers = window.confirm("Would you like numbers in your password?")
var uppercase = window.confirm("Would you like uppercase letters in your password?")
var symbols = window.confirm("Would you like symbols in your password?")
var lowercase = window.confirm("Would you like lowercase letters in your password?")

var numbersList = ["1","2","3","4","5","6","7","8","9","0"]
var uppercaseList =["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
var symbolsList = ["!","@","#","$","%","^","&","*","(",")"]
var lowercaseList = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

var optionsCart = []

if (numbers === true) {
  optionsCart.push(numbersList)
}

if (uppercase === true) {
  optionsCart.push(uppercaseList)
}

if (lowercase === true) {
  optionsCart.push(lowercaseList)
}

if (symbols === true) {
  optionsCart.push(symbolsList)
}

if (optionsCart.length === 0) {
  optionsCart.push(uppercaseList)
}

var generatedPassword = ""

for ( var i = 0; i < passwordLength; i++) {
var randomList = getRandomItem(optionsCart)
var randomChar = getRandomItem(randomList)
generatedPassword += randomChar
}

return generatedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
