console.log("ALAB 308.3.1: Practical Loops");

// Introduction
// This assignment will have you create several different types of loops according to a specification. This will showcase the power of loops and iteration alongside JavaScript operators, comparators, and conditional statements for data creation, processing, and manipulation.

// Objectives
// Use for loops to iterate a specific number of times.
// Use for of loops to iterate through iterable data-like strings.
// Use while loops to iterate based on a condition.
// Use the break and continue statements to control loop flow.

/////////////////////////////////////////////////
// ------------ Part 1: Fizz Buzz ------------ //
/////////////////////////////////////////////////

// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is working.

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("Fizz Buzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

//////////////////////////////////////////////////
// ------------ Part 2: Prime Time ------------ //
//////////////////////////////////////////////////
// Now we will move onto something slightly more complex.
// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     let i = 5;
//     while (i * i <= num) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//         i += 6;
//     }
//     return true;
// }

// function findNextPrime(n) {
//     let nextPrime = n + 1;
//     while (true) {
//         if (isPrime(nextPrime)) {
//             return nextPrime;
//         }
//         nextPrime++;
//     }
// }

// // Test with different values of n -----> This helped me to figure out the loop. 
// // console.log(findNextPrime(4)); // Output: 5
// // console.log(findNextPrime(5)); // Output: 7
// // console.log(findNextPrime(9)); // Output: 11
// // console.log(findNextPrime(11)); // Output: 11
// // console.log(findNextPrime(13)); // Output: 11
// // console.log(findNextPrime(13)); // Output: 11

// // Find prime numbers up to 1000
// let prime = 1;
// while (prime <= 1000) {
//     prime = findNextPrime(prime);
//     if (prime <= 1000) {
//         console.log(prime);
//     }
// }

/////////////////////////////////////////////////////
// ------------ Part 3: Feeling Loopy ------------ //
////////////////////////////////////////////////////

/****** --- First try -----------------------------------*
// Sample CSV string
const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Function to parse and log CSV data
function parseCSV(csvString) {
    let currentCell = ''; // Variable to store current cell data
    let rowData = []; // Array to store data for each row

    // Loop through characters of CSV string
    for (let i = 0; i < csvString.length; i++) {
        const char = csvString[i];
        
        // If comma encountered, push currentCell to rowData and reset currentCell
        if (char === ',') {
            rowData.push(currentCell.trim());
            currentCell = '';
        }
        // If newline encountered, push currentCell to rowData, log rowData, and reset rowData and currentCell
        else if (char === '\n') {
            rowData.push(currentCell.trim());
            console.log(...rowData);
            rowData = [];
            currentCell = '';
        }
        // If not a delimiter, append character to currentCell
        else {
            currentCell += char;
        }
    }
}

// Test with sample CSV string
parseCSV(csvString);*/


let CSV = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n' +
    '57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n' +
    '98,Bill,Doctor’s Assistant,26';
let data = CSV.split('\n');

for (let i = 0; i < data.length; i++) {
    let line = data[i];
    console.log(line);
}