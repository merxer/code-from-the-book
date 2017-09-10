// let

function swap(x, y){
    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }
    try {
        console.log(temp === x); // temp, out of scope
    }catch(ex){
        console.log(ex.message);
    }

    return [x, y];
}

console.log(swap(3, 2));