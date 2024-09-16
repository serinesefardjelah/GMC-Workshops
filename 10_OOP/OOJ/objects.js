//this is a javascript object
let person = {
  name: "JohnDoe",
  age: 25,
  greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  },
  friends: ["Jane", "Doe"],
  address: {
    street: "123 Main Street",
    city: "Nairobi",
  },
};
console.log(person.address.city)
person.greet("Hello");
/*****************************************************************************/
//Object oriented Javascript
//Classes, methods, properties, inheritance
//Objects are instances of classes
//objects are created using new keyword from the class

class Human {
  constructor(name, age) {
    //properties or charecteristics of the class
    this.name = name;
    this.age = age;
  }
  //method or actions
  greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  }
}

let personCreatedFromHumanClass = new Human("Lyza", 25);
// console.log(personCreatedFromHumanClass);
// personCreatedFromHumanClass.greet("Salam");
