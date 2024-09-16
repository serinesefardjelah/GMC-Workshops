class Animal {
  // constructor method to initialize object properties
  constructor(name, color, isWi1d, sound) {
    this.name = name;
    this.color = color;
    this.isWi1d = isWi1d;
    this.sound = sound;
  }
  // you can add your methods here
  makeSound() {
    console.log(`${this.name} ${this.sound}`);
    return this;
  }
  aboutAnimal() {
    console.log(`the ${this.color} colored ${this.name} ${this.sound}`);
  }
}

// creating instances of the animal class

const dog = new Animal("dog", "black", "true", "barks");
const lion = new Animal("lion", "gold", "false", "roar");
console.log(dog);
console.log(lion);

// dog
dog.makeSound().aboutAnimal();

// lion
lion.makeSound();
lion.aboutAnimal();
/*Polymorphysm */

//inheritance

class Dog extends Animal {
  constructor(name, color, isWi1d, sound, breed) {
    super(name, color, isWi1d, sound); // Animal(name, color, isWi1d, sound)
    this.breed = breed;
  }
  aboutDog() {
    console.log(`the ${this.color} colored ${this.name} ${this.sound}`);
  }
}

const dogOne = new Dog("dog", "black", "true", "barks", "German Shepherd");
dogOne.makeSound();

/* person class */

// class Person {
//   constructor(name, age, nationality, profession) {
//     this.name = name;
//     this.age = age;
//     this.nationality = nationality;
//     this.profession = profession;
//   }
//   aboutPerson() {
//     console.log(
//       `I am ${this.name}, a ${this.age} year old ${this.nationality} currently work as ${this.profession}`
//     );
//   }
//   greet() {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

// const personOne = new Person("John Doe", 25, "Kenyan", "Software Developer");
// const personTwo = new Person("Jane Doe", 30, "Ugandan", "Doctor");
// const personThree = new Person("Juma", 35, "Tanzanian", "Teacher");

// personOne.greet();
// personTwo.greet();
// personThree.greet();

/*Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter. */
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}
const leRectangle = new Rectangle(8, 2);

console.log(leRectangle.calculateArea());
console.log(leRectangle.calculatePerimeter());

//class person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const personOne = new Person("Ramzi", 25); //object or instance of Person class
const personTwo = new Person("Amine", 30);
personOne.greet();
personTwo.greet();
