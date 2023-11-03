function printAsteriskStructure(height) {
    for (let i = 1; i <= height; i++) {
        let asterisks = '';
        for (let j = 1; j <= i; j++) {
            asterisks += '*';
        }
        console.log(asterisks);
    }
}

const userInput = prompt("Enter the number of rows for the asterisk structure:");
const numberOfRows = parseInt(userInput);

if (!isNaN(numberOfRows) && numberOfRows > 0) {
    printAsteriskStructure(numberOfRows);
} else {
    console.log("Invalid input. Please enter a positive number.");
}