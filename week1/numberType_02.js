/* Assignment Details:
Create a JavaScript function that determines if a number is positive, negative, or zero and returns a corresponding string indicating the type.
Assignment Requirements:
1. Create a function named that takes a number as a parameter.
2. Declare and initialize the variable.
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0, and to handle the case when the number is zero.
4. Return the corresponding string value for each case.
5. Call the function and print the result. */


let positive = 5; // 2. Declare and initialize the variable
let negative = -1;
let zero = 0;

function numType(num) { // 1. Create a function that takes a number as a parameter

    if (num > 0) {     // 3. Use conditional statements
        return "Number is positive"; // 4. Return the corresponding string value for each case.
    }
    else if (num === 0) {
        return "Number is zero";
    } else if (num < 0) {
        return "Number is negative";
    } else {
        return "Unknown";
    }
}
console.log(numType(positive)); //Call the function and print the result.
console.log(numType(negative)); 
console.log(numType(zero));