const people = [{ name: 'Max' }, { name: 'Jack' }, { name: 'Marry' }]
// JavaScript
// function findPerson(name) {
//  for (let i = 0; i < people.length; i++) {
//    let person = people[i]
//    if (person.name == name) {
//      return person
//    }
//  }
// }
// ES6
let arr = [1, 9, 3, 4, 5]

function findPerson(name) {
 return arr.find(person =>person % 3 === 0)
}

console.log(findPerson(""))