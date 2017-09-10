// let

function swap(x, y){
    let temp;
    if (x > y) {
        temp = x;
        x = y;
        y = temp;
    }
    try {
        console.log(temp === x);
    }catch(ex){
        console.log(ex.message);
    }

    return [x, y];
}

console.log(swap(3, 2));