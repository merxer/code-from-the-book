// variable declarations

let { name } = { name : 'Lohith' };
console.log('1. Name : ' + name);

let [dayName] = ['Sunday'];
console.log('2. Day Name: ' + dayName);

// assignments
[name] = ['Rasmi', 'Lohith'];
console.log('3. Name: '+ name);

// Parameter Definations
function foo([x]) {
    console.log('4. X: '+  x);
}
foo(['Adithya']);

// Loops
const evens = [2, 4, 6, 8, 10];
for (let [index, item, next] of evens.entries()){
    console.log(`index: ${index}, item: ${item}`);
}