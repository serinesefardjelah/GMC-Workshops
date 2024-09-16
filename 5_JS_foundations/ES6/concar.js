let array1 = ["Hello"];
let array2 = ["World"];

//let string3 = string1.concat(string2);
let string3 = [...array1, ...array2]
console.log(string3); // Hello World

let string4 = `hello ${1+2+5*655}`;
console.log(string4); // hello 3

let string5 = 'hello ' + string3;

let string6 = `hello
world`;

console.log("hello world".includes("World")); // true

let employee = {
    name: "John",
    age: 20,
    email: "email@email",
    salary: 1000,
    };


let employee2 = {
    ...employee,
    salary: 2000,
}

console.log(employee2);


