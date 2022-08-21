// Use a forEach and calculate the total price of the products.

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
let tp = 0;
products.forEach(element => {
    if(typeof element.price === "number")
    tp += element.price;
});
console.log(tp);


// Use a filter and filter out the products with invalid prices.

const arr = products.filter(element =>{
    if(typeof element.price === "string")
    return element;
})
console.log(arr);

// Use find to find the price of avocado.

const avocadoPrice = products.find( e =>{
    //console.log(e);
    if(e.product === "avocado")
    return e.price;
});
console.log(avocadoPrice.price);