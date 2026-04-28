<<<<<<< HEAD
const products = [
  { name: "Indomie Noodles", category: "Food", price: 500, quantity: 20, minStockLevel: 10 },
  { name: "Akabanga", category: "Condiments", price: 2500, quantity: 6, minStockLevel: 10 },
  { name: "Inyange Water", category: "Beverages", price: 300, quantity: 0, minStockLevel: 5 },
  { name: "Fanta Orange", category: "Beverages", price: 600, quantity: 70, minStockLevel: 20 },
];

// FUNCTIONS
function getTotalValue(product) {
  return product.price * product.quantity;
}

function getDiscountedPrice(product) {
  return product.price * 0.85;
}

function getStatus(product) {
  if (product.quantity === 0) return "OUT OF STOCK";
  if (product.quantity < product.minStockLevel) return "LOW STOCK";
  if (product.quantity <= 50) return "Healthy";
  return "Well stocked";
}

// LOOP 1
products.forEach(function(product) {
  console.log(`${product.name} (${product.category}) — ${product.price} RWF — ${getStatus(product)} — Total: ${getTotalValue(product)} RWF — Discounted: ${getDiscountedPrice(product)} RWF`);
});

// LOOP 2
let totalValue = 0;
let lowStockCount = 0;

products.forEach(function(product) {
  totalValue += getTotalValue(product);
  if (product.quantity < product.minStockLevel) {
    lowStockCount++;
  }
});

// RECEIPT
console.log('='.repeat(37));
console.log('KIGALI SHOP — RECEIPT');
console.log('='.repeat(37));
console.log(`Total products: ${products.length}`);
console.log(`Total inventory value: ${totalValue} RWF`);
console.log(`Products needing restock: ${lowStockCount}`);
console.log('='.repeat(37));

=======
const products = [
  { name: "Indomie Noodles", category: "Food", price: 500, quantity: 20, minStockLevel: 10 },
  { name: "Akabanga", category: "Condiments", price: 2500, quantity: 6, minStockLevel: 10 },
  { name: "Inyange Water", category: "Beverages", price: 300, quantity: 0, minStockLevel: 5 },
  { name: "Fanta Orange", category: "Beverages", price: 600, quantity: 70, minStockLevel: 20 },
];

// FUNCTIONS
function getTotalValue(product) {
  return product.price * product.quantity;
}

function getDiscountedPrice(product) {
  return product.price * 0.85;
}

function getStatus(product) {
  if (product.quantity === 0) return "OUT OF STOCK";
  if (product.quantity < product.minStockLevel) return "LOW STOCK";
  if (product.quantity <= 50) return "Healthy";
  return "Well stocked";
}

// LOOP 1
products.forEach(function(product) {
  console.log(`${product.name} (${product.category}) — ${product.price} RWF — ${getStatus(product)} — Total: ${getTotalValue(product)} RWF — Discounted: ${getDiscountedPrice(product)} RWF`);
});

// LOOP 2
let totalValue = 0;
let lowStockCount = 0;

products.forEach(function(product) {
  totalValue += getTotalValue(product);
  if (product.quantity < product.minStockLevel) {
    lowStockCount++;
  }
});

// RECEIPT
console.log('='.repeat(37));
console.log('KIGALI SHOP — RECEIPT');
console.log('='.repeat(37));
console.log(`Total products: ${products.length}`);
console.log(`Total inventory value: ${totalValue} RWF`);
console.log(`Products needing restock: ${lowStockCount}`);
console.log('='.repeat(37));

>>>>>>> 6f507968aa65555313f40416fd8e5009b053b242
