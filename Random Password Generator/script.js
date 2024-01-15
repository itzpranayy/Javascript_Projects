const passwordBox = document.getElementById("password");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";
const allChars = upperCase + lowerCase + numbers + symbols;

function passwordGenerator() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
  // <- Using .value because it is an input field
}

function copyPassword() {
  // Select the text field
  var copyText = document.getElementById("password");
  var range = document.createRange();
  range.selectNode(copyText);
  window.getSelection().removeAllRanges(); //Clear previous Selection
  window.getSelection().addRange(range);

  // Use Clipboard Api to copy text

  navigator.clipboard
    .writeText(copyText.value)
    .then(function () {
      //Clear the selection

      window.getSelection().removeAllRanges();
      alert("Copied: " + copyText.value);
    })
    .catch(function (err) {
      console.error("Text cannot be copied", err);
    });
}
