// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Variables for password
var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
var LowerCase = "abcdefghijklmnopqrstuvxyz";
var SpecialChar= "`~!@#$%^&*()_+{}|[]:<>?,./'";
var Numbers = "1234567890";

// This is the function to generate a password
function generatePassword() {
  var password = "";
  var wantedChars= "";

  // Message to determine length of password
  var length= prompt("Please choose between 8 and 128 for your password.");
  if(length <8 || length > 128){
    alert("Please enter the recommended amount of characters.");
  }
  else{
    // Messages to determine wanted characters
    var askUpperCase= confirm("Would you like to use upper case letters?");
    var askLowerCase = confirm("Would you like to use lower case letters?");
    var askSpecialChar = confirm("Would you like to use special characters?");
    var askNumbers = confirm("Would you like to use numbers?");
    
    // This is if they request to add uppercase 
    if(askUpperCase){
      // Appends uppercase into wantedChars
      wantedChars += UpperCase;
    }
    if(askLowerCase){
      // Appends lowercase into wantedChars
      wantedChars += LowerCase;
    }
    if(askSpecialChar){
      // Appends special characters into wantedChars
      wantedChars += SpecialChar;
    }
    if(askNumbers){
      // Appends numbers into wantedChars
      wantedChars += Numbers;
    }
    // Checks if any wanted characters was choosen
    if(wantedChars.length ===0){
      alert("Please select at least 1 character types.");
    }
    // Else statement generating password with wanted characters
    else{
      for (var i = 0; i <= length-1; i++) {
        var randomNumber = Math.floor(Math.random() * wantedChars.length);
        password += wantedChars.charAt(randomNumber);
      }
    }
  }
  return password;
}
// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value= password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

