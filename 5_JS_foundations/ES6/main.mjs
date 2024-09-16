//destructuring

const object = {
  name: "John",
  age: 20,
  email: "email@email",
};

const { name, age, email } = object;

// console.log(name, age, email);

const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(typeof rest, rest);
console.log(first, second, rest);
