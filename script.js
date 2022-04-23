// Assignment Code
var generateBtn = document.querySelector("#generate");


// Arrays for password generation (pulled from web)
var specialCharacters = [
  '@','%', '+',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

//Initial character prompt

function userOptions() {
  let choice = parseInt(prompt("How many characters are needed? (8-128 characters)"));

  let uppCase = confirm("Would you like to include upper case letters?");
  
  let lowCase = confirm("Would you like to include lower case letters?");
  
  let sym = confirm("Would you like to include special characters?");
  
  let num = confirm("Would you like to include numbers?");
  
   if (uppCase === false && lowCase === false && sym === false && num ===false) {
    alert ("Dude, you have to pick something");
    return null;
    }
   const userOptions = {
    choiceLength: choice, 
    upperCase: uppCase,
    lowerCase: lowCase,
    number: num,
    symbol: sym,
  }
  return userOptions;
}

//If/then/else to generate password
function generatePassword() {
  let options= userOptions()
  var combinedOptions = [];
  var passResults = [];
  if (options.upperCase === true) {
    combinedOptions = combinedOptions.concat(upperCasedCharacters)
    passResults.push(upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)]);
  }
  if (options.lowerCase === true) {
    combinedOptions = combinedOptions.concat(lowerCasedCharacters)
    passResults.push(lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)])
  } 
  if (options.symbol===true) {
    combinedOptions = combinedOptions.concat(numericCharacters)
    passResults.push(numericCharacters[Math.floor(Math.random()*numericCharacters.length)])
  }
  if (options.number === true) {
    combinedOptions = combinedOptions.concat(specialCharacters)
    passResults.push(specialCharacters[Math.floor(Math.random()*specialCharacters.length)])
  }
  var loop= options.choiceLength-passResults.length
  console.log(loop)

  for(let i = 0; i < loop; i++) {
    passResults.push(combinedOptions[Math.floor(Math.random()*combinedOptions.length)])
  }
  return passResults.join('')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
