/* Write a JavaScript function called findMax that takes an array of numbers as an argument and returns 
the maximum number in the array. */

function findMax(numbers) {
    if (numbers.length === 0) {
      return null; // Return null if the array is empty
    }
  
    let max = numbers[0]; // Assume the first element as the maximum
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]; // Update the maximum if a larger number is found
      }
    }
  
    return max;
  }
  
  const numbers = [10, 5, 8, 20, 3];
  const result = findMax(numbers);
  console.log("Maximum number:", result); 
  