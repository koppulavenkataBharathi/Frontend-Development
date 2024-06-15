// Task1: Function to Reverse a String
// Objective: Write a function that takes a string as input and returns the reversed string.



function revString(str){
 for(let i=str.length-1;i>=0;i--){
    console.log(str[i]);
 }

}
revString("Bharathi");


//Task 2: Function to Calculate Factorial
// Objective: Write a recursive function that calculates the factorial of a number.

function factorial(num){
    if (num === 0 || num === 1){
        return 1;
    }
    return num*factorial(num-1);
}
console.log(factorial(7));



// Task 3: 
// Function to Generate Fibonacci Sequence
// Objective: Write a function that generates the first n numbers in the Fibonacci sequence.

function fibonacci(n){
     // Handle edge cases for n <= 0
     if (n <= 0){
         return [];
    }
     if (n === 1) {
        return [0]
     }
     if (n === 2) {
        return [0, 1]
     }
     // Initialize the Fibonacci sequence with the first two numbers
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence;

}
console.log(fibonacci(10));

// Task 4 :
//  Function to Perform Multiple String Operations
// Objective: Write a function that takes a string and returns an object containing the string's length, the string in uppercase, and the string in lowercase.


function stringOperations(str) {
    return {
        length: str.length,
        uppercase: str.toUpperCase(),
        lowercase: str.toLowerCase()
    };
}


console.log(stringOperations("Hello World"));
// Output: { length: 11, uppercase: 'HELLO WORLD', lowercase: 'hello world' }

// console.log(stringOperations("JavaScript"));
// Output: { length: 10, uppercase: 'JAVASCRIPT', lowercase: 'javascript' }


// Task 5: 
// Function to Count Vowels in a String
// Objective: Write a function that counts the number of vowels in a given string.

function countVowels(str) {
    // Define a set of vowels
    const vowels = 'aeiouAEIOU';
    let count = 0;

    // Iterate over each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is a vowel
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World")); // Output: 3



// Task 6:
// Function to Flatten a Nested Array
// Objective: Write a function that flattens a nested array into a single array.

function flattenArray(nestedArray) {
    // Initialize an empty array to hold the flattened result
    let flattened = [];

    // Iterate over each element in the nested array
    for (let i = 0; i < nestedArray.length; i++) {
        if (Array.isArray(nestedArray[i])) {
            // If the element is an array, flatten it and concatenate the result
            flattened = flattened.concat(flattenArray(nestedArray[i]));
        } else {
            // If the element is not an array, add it directly to the result
            flattened.push(nestedArray[i]);
        }
    }

    return flattened;
}

// Example usage
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[1, 2, 3], [4, 5], [6]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[[[1]], 2], 3, [4, [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, 3], 4, [5, [6, 7]]])); // Output: [1, 2, 3, 4, 5, 6, 7]
