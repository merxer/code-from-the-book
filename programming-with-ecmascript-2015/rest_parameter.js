function head_tail(head,...tail){
    return [head, tail];
}

list = [1, 2, 3, 4, 5];
console.log(head_tail(...list));

[ head, tail ] = head_tail(...list);
console.log(head, tail);

[ head, tail ] = head_tail(...tail);
console.log(head, tail);