//task1 javascript
const array1 = [1, 2, 3, 4, 5];
const newarray = [];

for (const element of array1) {
  for (let i = 0; i < 3; i++) {
    newarray.push(element);
  }
}

console.log(newarray);