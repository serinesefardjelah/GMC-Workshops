function add(a=1,b){
    let sum = a +b;
    
    return a+b;
}

console.log(add(1,3));


//function with default parameter
function greet(name="Guest"){
    console.log(`Hello ${name}`);
}

greet("world")