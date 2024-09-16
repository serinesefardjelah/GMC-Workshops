if (true) {
  let a = 10;
  let b = 20;
  console.log(a);
}

let date = new Date().getDate();
let stringLiteral = `Hello World! today is  ${date} th of the month.`;
let string = "Hello World! today is " + date + " th of the month.";
console.log(stringLiteral);


//ES6 --- Ternaly Operator
let marks = prompt ('Enter your marks:'); 

 // check the condition
let result = ( marks >=10 ) ? 'pass' : 'fail';
console.log (`You ${result} the exam.`);