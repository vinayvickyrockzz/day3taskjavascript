
function factorial(n) {
    if (n === 0) {
        return 1; 
    } else {
        return n * factorial(n - 1);
    }
}

const number = parseInt(prompt("Enter a number to calculate its factorial:"));

if (!isNaN(number) && number >= 0) {
    const result = factorial(number);
    console.log(`The factorial of ${number} is: ${result}`);
} else {
    console.log("Invalid input. Please enter a non-negative number.");
}

