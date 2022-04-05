var enter;
var characCount;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase; 

number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
character = ["!", "#", "$", "(", ")", "*"," < ", "=", " > ", " ? ", "@","%", "&",];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
  enter = parseInt(prompt("How many characters 8 >= 128?"));
    if (!enter) {
        alert("You must choose to move forward");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You have to pick between 8 & 128"));
    } else {
        confirmNumber = confirm("Do you want numerical digits?");
        confirmCharacter = confirm("Do you want special characters?");
        confirmUppercase = confirm("Uppercase letters?");
        confirmLowercase = confirm("Lowercase letters?");
    };

    if (!confirmCharacter && !characCount && !confirmUppercase && !confirmLowercase) {
        choices = alert("Please, pick a category");

    }
     else if (confirmCharacter && characCount && confirmUppercase && confirmLowercase) {
         choices = character.concat(number, lowerCase, upperCase);
    }
    else if (confirmCharacter && characCount && confirmUppercase) {
        choices = character.concat(characCount, upperCase);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, lowerCase);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(lowerCase, upperCase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowerCase, upperCase);
    }
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lowerCase);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(upperCase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lowerCase.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = lowerCase.concat(upperCase);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(upperCase);
    }
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = lowerCase;
    }
    else if (confirmUppercase) {
        choices = space.concat(upperCase);
    };

    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
  
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
