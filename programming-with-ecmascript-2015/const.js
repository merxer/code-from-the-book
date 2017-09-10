const PI = 3.141539;

function area(radius){
    PI = 3.15;  // error, const can't reassign
    return PI * radius * radius;
}

console.log(area(7));