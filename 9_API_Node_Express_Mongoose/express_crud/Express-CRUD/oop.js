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
  }
  aboutAnimal() {
    console.log(`the ${this.color} colored ${this.name} ${this.sound}`);
  }
}

class AnimalClassification extends Animal {
  // constructor method to initialize object properties
  constructor(name, order) {
    super(name);
    this.order = order;
  }
}

function classifyByOrder(animalName) {
  const animalClass = animals.find((animal) => animal.name === animalName);

  if (animalClass) {
    console.log(`${animalClass.name} is a ${animalClass.order}`);
  } else {
    console.log(`${animalName} class not found`);
  }
  return this;
}

// creating instances of the animal class

const dog = new Animal("dog", "black", "true", "barks");
const lion = new Animal("lion", "gold", "false", "roar");
console.log(dog);
console.log(lion);

// dog
dog.makeSound();
dog.aboutAnimal();

// lion
lion.makeSound();
lion.aboutAnimal();
/*Polymorphysm */

class Shape {
  area() {
    console.log("Calculating area of a shape");
  }
}
class Circle extends Shape {
  area() {
    console.log("Calculating area of a circle");
  }
}
class Square extends Shape {
  area() {
    console.log("Calculating area of a square");
  }
}


const arr = [11,2, 100,  22, 33, 44, 55];
const str = arr.toString()
const size = arr.length;
console.log(size);
//object.method([params])
console.log(typeof str);
console.log(typeof arr);
