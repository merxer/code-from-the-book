// Spreading into function and method calls

let maxNum = Math.max(1, 2, 3, 4, 5);
console.log(maxNum);

let numbers = [1, 2, 3, 4, 5];
maxNum = Math.max(...numbers);
console.log(maxNum);

// Spreading to constructure
let myArray = [1998, 10, 20];
let myDay = new Date(...myArray);
console.log(myDay.toString());

// Spreading into array
let x = [1, 2];
let y = [3, 4];
// concat array by spreading operator
let z = [...x, ...y];
console.log(z);
