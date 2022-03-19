// Global variables
var password = document.getElementById('password');
// var passwordLength = window.prompt('Enter your desired password length')
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var password = "";
var passwordLength = 0;

// prompts 
// password length 8 > 128
// lowercase
// uppercase
// numbers
// special charaters

// store user choices
// use choices from user [],, -length
// loop through character.length - given total password.length 
// loop until finish password.length





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function checkPasswordLength() {
  passwordLength = window.prompt('Set a password of more than 8 characters and less than 128!');
  if (passwordLength > 8 && passwordLength < 128 &&  !isNaN(passwordLength))  {
    return passwordLength
  } else {
    window.alert('Please select a password length of greater than 8 and less than 128.')
    return checkPasswordLength()
  };
};

function characterChoice(){
  var requestedCharacter = false
  var characterSelect = [];
  if (confirm("Would you like to use lowercase letters?")) {
    characterSelect = characterSelect.concat(lowercase)
    requestedCharacter = true
  } 
  if (confirm("Would you like to use uppercase letters?")) {
    characterSelect = characterSelect.concat(uppercase)
    requestedCharacter = true
  } 
  if (confirm("Would you like to use numbers?")) {
    characterSelect = characterSelect.concat(numbers)
    requestedCharacter = true
  } 
  if (confirm("Would you like to use special characters?")) {
    characterSelect = characterSelect.concat(specialChars)
    requestedCharacter = true
  } 
   if (requestedCharacter == false) {
     window.alert('Please select at least one of the character option!')
     return characterChoice()
   }

  for (i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * characterSelect.length)
    let randomPassword = characterSelect[randomNum]
    password = password.concat(randomPassword)
    console.log(password)
  }
}









function generatePassword() {
  checkPasswordLength()
  characterChoice()
  return password;
} 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
