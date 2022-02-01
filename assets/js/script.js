// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

}

alert(generatePassword(12));


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
