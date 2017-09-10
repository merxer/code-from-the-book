// Destructure Objects
const person = { name: 'Lohith', age: 39}

// personName, personAge is a local variables(alias)
let { name: personName , age: personAge } = person;

console.log(`my name is ${personName} and age is ${personAge}`);