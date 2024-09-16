function permut(a, b, c){
    let temp = a;
    a = b;
    b = c;
    c = temp;
    return [a, b, c];
}

let a = 1;
let b = 2;
let c = 3;
[a, b, c] = permut(a, b, c);
console.log(`result after permutation: a = ${a}, b = ${b}, c = ${c}`);