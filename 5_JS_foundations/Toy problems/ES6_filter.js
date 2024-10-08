const products = [{name:"Milk",price:15}, {name:"Water", price:9}, {name:"Bread", price:5}];

// JavaScript
// function filterProducts() {
//  let cheapProducts = [];
//  for (let i = 0; i < products.length; i++) {
//    if (products[i].price < 10) cheapProducts.push(products[i]);
//  }
//  return cheapProducts;
// }

// ES6
const filterProducts = () => products.filter(product => product.price < 10);
console.log(filterProducts()); // [{name: "Water", price: 9}, {name: "Bread", price: 5}]