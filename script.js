document.getElementById("convert-btn").addEventListener("click", function () {
  var number = parseInt(document.getElementById("number").value);
  var output = document.getElementById("output");

  if (isNaN(number)) {
    output.textContent = "Please enter a valid number";
    return;
  }

  if (number < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if (number > 3999) {
    // Updated condition
    output.textContent = "Please enter a number less than or equal to 3999"; // Updated message
    return;
  }

  output.textContent = convertToRoman(number);
});

function convertToRoman(num) {
  var romanNumeral = "";
  var romanNumeralMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (var key in romanNumeralMap) {
    while (num >= romanNumeralMap[key]) {
      romanNumeral += key;
      num -= romanNumeralMap[key];
    }
  }

  return romanNumeral;
}
