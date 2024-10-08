const products = [
    { name: 'Milk', price: 15 },
    { name: 'Water', price: 9 },
    { name: 'Bread', price: 5 },
   ]
   
   // JavaScript
//    function changeProducts() {
//     for (let i = 0; i < products.length; i++) {
//       products[i].price += 2
//     }
//     return products
//    }
   
   // ES6
   const changeProducts = () =>
    products.map(product => ({ ...product, price: product.price + 2 }));

   console.log("changeProducts()",changeProducts());
   console.log("products" ,products);