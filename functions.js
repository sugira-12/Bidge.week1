<<<<<<< HEAD
function describeProduct(product) {
  return `${product.name} — ${product.price} RWF, ${product.quantity} units`;
}

function isAffordable(product, budget) {
  return product.price <= budget;
}

const p1 = { name: "Indomie", price: 500, quantity: 20 };
const p2 = { name: "Akabanga", price: 2500, quantity: 6 };
const p3 = { name: "Fanta", price: 600, quantity: 0 };

console.log(describeProduct(p1));
console.log(describeProduct(p2));
console.log(describeProduct(p3));

console.log(isAffordable(p1, 1000));
console.log(isAffordable(p2, 1000));
console.log(isAffordable(p3, 700));

// REMOVE return TEST
function brokenFunction(product) {
  `${product.name}`;
}

console.log(brokenFunction(p1));
=======
function describeProduct(product) {
  return `${product.name} — ${product.price} RWF, ${product.quantity} units`;
}

function isAffordable(product, budget) {
  return product.price <= budget;
}

const p1 = { name: "Indomie", price: 500, quantity: 20 };
const p2 = { name: "Akabanga", price: 2500, quantity: 6 };
const p3 = { name: "Fanta", price: 600, quantity: 0 };

console.log(describeProduct(p1));
console.log(describeProduct(p2));
console.log(describeProduct(p3));

console.log(isAffordable(p1, 1000));
console.log(isAffordable(p2, 1000));
console.log(isAffordable(p3, 700));

// REMOVE return TEST
function brokenFunction(product) {
  `${product.name}`;
}

console.log(brokenFunction(p1));
>>>>>>> 6f507968aa65555313f40416fd8e5009b053b242
// undefined because no return statement