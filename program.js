1.

// Define two numbers
const num1 = 12;
const num2 = 5;

// Perform arithmetic operations
const addition = num1 + num2;        
const subtraction = num1 - num2;     
const multiplication = num1 * num2; 
const division = num1 / num2;        
const modulus = num1 % num2;         
const exponentiation = num1 ** num2; 

// Display the results in the console
console.log(`Numbers used: num1 = ${num1}, num2 = ${num2}\n`);
console.log(`Addition (+)       : ${num1} + ${num2} = ${addition}`);
console.log(`Subtraction (-)    : ${num1} - ${num2} = ${subtraction}`);
console.log(`Multiplication (*) : ${num1} * ${num2} = ${multiplication}`);
console.log(`Division (/)       : ${num1} / ${num2} = ${division}`);
console.log(`Modulus (%)        : ${num1} % ${num2} = ${modulus} (Remainder)`);
console.log(`Exponentiation (**): ${num1} ** ${num2} = ${exponentiation}`);

2..
// Define two numbers to compare
const num1 = 15;
const num2 = 10;

console.log(`Comparing ${num1} and ${num2}:\n`);

// 1. Greater Than (>)
console.log(`Is num1 > num2?  -> ${num1 > num2}`);  

// 2. Less Than (<)
console.log(`Is num1 < num2?  -> ${num1 < num2}`);  

// 3. Greater Than or Equal To (>=)
console.log(`Is num1 >= num2? -> ${num1 >= num2}`); 

// 4. Less Than or Equal To (<=)
console.log(`Is num1 <= num2? -> ${num1 <= num2}`); 

// 5. Strict Equality (===) - Checks both value and data type
console.log(`Is num1 === num2? -> ${num1 === num2}`); 

// 6. Strict Inequality (!==) - Checks if either value or type is different
console.log(`Is num1 !== num2? -> ${num1 !== num2}`); 


3..
// --- 1. Logical AND (&&) ---
// Returns true ONLY if both conditions are true
console.log("--- Logical AND (&&) ---");
let hasIdCard = true;
let hasTicket = true;
let isExempted = false;

// Both must be true to enter
if (hasIdCard && hasTicket) {
    console.log("Welcome to the event! (Both conditions are true)"); 
} else {
    console.log("Access denied. You need both an ID and a ticket.");
}

// One is false, so the whole expression evaluates to false
console.log(hasIdCard && isExempted); 


// --- 2. Logical OR (||) ---
console.log("\n--- Logical OR (||) ---");
let hasCash = false;
let hasCard = true;

// Only one needs to be true to make a purchase
if (hasCash || hasCard) {
    console.log("Payment accepted! (At least one condition is true)");
} else {
    console.log("Payment failed. You have no cash or card.");
}


// --- 3. Logical NOT (!) ---
// Reverses the boolean value (negation)
console.log("\n--- Logical NOT (!) ---");
let isLoggedIn = false;

console.log("Current status:", isLoggedIn);        
console.log("Negated status (!):", !isLoggedIn);   

if (!isLoggedIn) {
    console.log("Please log in to continue.");
}


// --- 4. Advanced: Short-Circuit Evaluation ---
// JavaScript evaluates logical expressions from left to right and stops as soon as the result is certain.
console.log("\n--- Short-Circuit Evaluation ---");

// For AND (&&): If the first value is false, it skips checking the second value.
let isMember = false;
isMember && console.log("This will NOT print because the first condition is false.");

// For OR (||): If the first value is true, it skips checking the second value.
let isAdmin = true;
isAdmin || console.log("This will NOT print because the first condition is already true.");

// Short-circuiting is often used to assign default fallback values
let userNickname = ""; 
let displayName = userNickname || "Anonymous Guest"; 
console.log("Welcome,", displayName); // Output: Welcome, Anonymous Guest

4..
function checkPositivity(number) {
    if (number > 0) {
        console.log(`${number} is a positive number.`);
    } else if (number === 0) {
        console.log("The number is zero.");
    } else {
        console.log(`${number} is a negative number.`);
    }
}

// Test cases
checkPositivity(5);   
checkPositivity(-3);  
checkPositivity(0);  

5..
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
console.log(checkEvenOrOdd(10));
console.log(checkEvenOrOdd(7));  

6..
// Ask the user to enter their age
let age = prompt("Enter your age:");

// Convert the input string to a number
age = Number(age);

// Check eligibility using if-else
if (age >= 18) {
  console.log("You are eligible to vote.");
  alert("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
  alert("You are not eligible to vote.");
}

7..
function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is a positive number.`);
    } else if (num < 0) {
        console.log(`${num} is a negative number.`);
    } else if (num === 0) {
        console.log("The number is zero.");
    } else {
        console.log("Invalid input. Not a number.");
    }
}

// Test cases
checkNumber(15);   
checkNumber(-7);  
checkNumber(0);    
checkNumber("abc");

8..
function calculateGrade(marks) {
    let grade;

    // Validate if the input marks are within the valid 0-100 range
    if (marks < 0 || marks > 100 || typeof marks !== 'number') {
        return "Invalid Marks";
    }

    // Check conditions sequentially from highest to lowest
    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return grade;
}

// Example Testing:
console.log("Grade for 95:", calculateGrade(95)); 
console.log("Grade for 82:", calculateGrade(82)); 
console.log("Grade for 74:", calculateGrade(74));
console.log("Grade for 61:", calculateGrade(61)); 
console.log("Grade for 45:", calculateGrade(45);

9..
function findLargest(num1, num2) {
    return Math.max(num1, num2);
}

// Example usage:
console.log(findLargest(15, 42));
console.log(findLargest(-10, -2)); 

10..
function checkLeapYear(year) {
    // Condition 1: Divisible by 4 AND not divisible by 100
    // Condition 2: Divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is NOT a leap year.`;
    }
}

// Test cases
console.log(checkLeapYear(2024)); 
console.log(checkLeapYear(2000)); 
console.log(checkLeapYear(2100)); 
console.log(checkLeapYear(2026)); 

11..
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

12..
const number = 5; 

console.log(`Multiplication Table of ${number}:`);

// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    // Calculate the product and print the result
    console.log(`${number} x ${i} = ${number * i}`);
}

13..
function sumOfNaturalNumbers(n) {
    if (n < 1) return 0; 
    
    return (n * (n + 1)) / 2;
}

// Example usage:
const n = 10;
console.log(`The sum of first ${n} natural numbers is:`, sumOfNaturalNumbers(n)); 

14..
// Start at 2 (the first even number) and increment by 2 in each step
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

15..
let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        count++;
    }
}

console.log("Total numbers divisible by 3:", count);

16..
function findLargest(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
const result = findLargest(10, 45, 23);
console.log("The largest number is: " + result); 


17..
function checkDivisibility(number) {
    // Check if the remainder is 0 when divided by both 3 and 5
    if (number % 3 === 0 && number % 5 === 0) {
        console.log(`${number} is divisible by both 3 and 5.`);
    } else {
        console.log(`${number} is NOT divisible by both 3 and 5.`);
    }
}

// --- Test Cases ---
checkDivisibility(15);  
checkDivisibility(30);
checkDivisibility(9);   
checkDivisibility(22);  

18..
function calculateFactorial(num) {
    // 1. Validation: Factorials do not exist for negative numbers
    if (num < 0) {
        return "Error! Factorial for negative numbers does not exist.";
    }

    // 2. Initialize the result variable to 1
    let result = 1;

    // 3. Loop from 2 up to the given number
    for (let i = 2; i <= num; i++) {
        result *= i; 
    }

    // 4. Return the calculated factorial
    return result;
}

// --- Example Usage ---
console.log(calculateFactorial(5)); 
console.log(calculateFactorial(0)); 
console.log(calculateFactorial(-3)); 

19..
// A for loop to count down from 50 to 1
for (let i = 50; i >= 1; i--) {
  console.log(i);
}

20..
let sum = 0;

// Loop through all odd numbers from 1 to 100
for (let i = 1; i <= 100; i += 2) {
    sum += i;
}

console.log("The sum of all odd numbers between 1 and 100 is:", sum);


