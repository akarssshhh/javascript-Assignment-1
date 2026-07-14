let products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mouse", price: 800 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 12000 },
    { id: 5, name: "Headphones", price: 3500 }
];
console.log("product Names:");

for(let product of products){
    console.log(product.name);   
}

let expensiveproduct = products[0];
let cheapestproduct = products[0];
let totalValue = 0;

for (let product of products){
    if (product.price>expensiveproduct.price) {
        expensiveproduct = product;
    }
    if (product.price < cheapestproduct.price) {
        cheapestproduct = product;
    }

    totalValue += product.price;
}

console.log(`Most expensive product: ${expensiveproduct.name} - ${expensiveproduct.price}`);
console.log(`Most cheapest product: ${cheapestproduct.name} - ${cheapestproduct.price}`);
console.log(`Total product Value : ${totalValue}`);


let searchproduct = "Monitor";
let found = false;

for(product of products){
    if (searchproduct === product.name) {
        console.log(`product Found: ${product.name}`);
        found = true;
        break;
    }
}
if (!found) {
    console.log("product not found");
    
}