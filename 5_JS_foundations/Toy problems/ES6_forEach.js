const people = [{ name: 'Max' }, { name: 'Jack' }, { name: 'Marry' }]

// // JavaScript
// function showEachOne(name) {
//  for (let i = 0; i < people.length; i++) {
//    alert(people[i].name)
//  }
// }

// ES6
const showEachOne = name => people.forEach(person => console.log(person.name));

showEachOne()