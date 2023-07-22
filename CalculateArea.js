/*
Write a JavaScript function called "calculateArea" that takes two parameters: "length" and "width". 
The function should calculate and return the area of a rectangle using the given length and width.
*/

const readline = require('readline');

function calculateArea(length, width) {
  return length * width;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the length of the rectangle: ", (length) => {
  rl.question("Enter the width of the rectangle: ", (width) => {
    const area = calculateArea(parseFloat(length), parseFloat(width));
    console.log(`The area of the rectangle is: ${area}`);
    rl.close();
  });
});





// Explanation

/*
If u want to take user input from the web browser;

The calculateArea function takes two parameters, length and width, and returns the calculated area by multiplying 
them. The getUserInput function uses the prompt() function to take user input for the length and width, converts 
the input to numeric values using parseFloat, and then calls the calculateArea function to calculate the area. 

function calculateArea(length, width) {
  return length * width;
}

function getUserInput() {
  const length = parseFloat(prompt("Enter the length of the rectangle:"));
  const width = parseFloat(prompt("Enter the width of the rectangle:"));

  if (isNaN(length) || isNaN(width)) {
    alert("Invalid input! Please enter valid numeric values.");
    return;
  }

  const area = calculateArea(length, width);
  alert(`The area of the rectangle is: ${area}`);
}

getUserInput();
*/