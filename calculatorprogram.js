const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

function calculator() {
    const operation = prompt("Enter the operation you want to perform (sum, minus, mul):");
    
    if (operation === "sum" || operation === "minus" || operation === "mul") {
        const num1 = parseFloat(prompt("Enter the first number:"));
        const num2 = parseFloat(prompt("Enter the second number:"));

        if (!isNaN(num1) && !isNaN(num2)) {
            let result;

            if (operation === "sum") {
                result = sum(num1, num2);
            } else if (operation === "minus") {
                result = subtract(num1, num2);
            } else if (operation === "mul") {
                result = multiply(num1, num2);
            }

            console.log(`The result of ${operation} is: ${result}`);
        } else {
            console.log("Invalid input. Please enter valid numbers.");
        }
    } else {
        console.log("Invalid operation. Please enter 'sum', 'minus', or 'mul'.");
    }
}

calculator();
