const products = [
  { name: "Indomie", category: "Food", price: 500, quantity: 20, minStockLevel: 10 },
  { name: "Akabanga", category: "Condiments", price: 2500, quantity: 4, minStockLevel: 10 },
  { name: "Inyange Water", category: "Beverages", price: 300, quantity: 0, minStockLevel: 5 },
  { name: "Fanta Orange", category: "Beverages", price: 600, quantity: 70, minStockLevel: 20 },
  { name: "Rwandan Tea", category: "Food", price: 1100, quantity: 13, minStockLevel: 10 },
];

function getTotalValue(p) {
  return p.price * p.quantity;
}

function getDiscountedPrice(p) {
  return p.price * 0.85;
}

function getStatus(p) {
  if (p.quantity === 0) return "OUT OF STOCK";
  if (p.quantity < p.minStockLevel) return "LOW STOCK";
  if (p.quantity <= 50) return "Healthy";
  return "Well stocked";
}

// Q6
products.forEach(p => {
  console.log(`${p.name} (${p.category}) — ${p.price} RWF (discounted: ${getDiscountedPrice(p)} RWF) — ${p.quantity} units — ${getStatus(p)}`);
});

// Q7
let totalInventoryValue = 0;
let lowStockCount = 0;

products.forEach(p => {
  totalInventoryValue += getTotalValue(p);
  if (p.quantity < p.minStockLevel) lowStockCount++;
});

console.log(`Total inventory value: ${totalInventoryValue} RWF`);
console.log(`Products needing restock: ${lowStockCount}`);

// Q8
let mostExpensive = products[0];
let cheapest = products[0];

products.forEach(p => {
  if (p.price > mostExpensive.price) mostExpensive = p;
  if (p.price < cheapest.price) cheapest = p;
});

// Q9
function getLowStockProducts(products) {
  const result = [];
  products.forEach(p => {
    if (p.quantity < p.minStockLevel) result.push(p);
  });
  return result;
}

// Q10
function getByCategory(products, category) {
  const result = [];
  products.forEach(p => {
    if (p.category === category) result.push(p);
  });
  return result;
}

// Q11 FINAL RECEIPT
console.log('='.repeat(37));
console.log('KIGALI SHOP INVENTORY REPORT');
console.log('='.repeat(37));

products.forEach(p => {
  console.log(`${p.name} (${p.category}) — ${getStatus(p)} — ${getTotalValue(p)} RWF — disc: ${getDiscountedPrice(p)} RWF`);
});

console.log('─'.repeat(37));
console.log(`Total products: ${products.length}`);
console.log(`Total inventory value: ${totalInventoryValue} RWF`);
console.log(`Products needing restock: ${lowStockCount}`);
console.log(`Most expensive: ${mostExpensive.name} (${mostExpensive.price} RWF)`);
console.log(`Cheapest: ${cheapest.name} (${cheapest.price} RWF)`);

console.log('─'.repeat(37));
console.log(`Insight: ${getLowStockProducts(products)[0].name} is low or out of stock. Restock immediately.`);
console.log('='.repeat(37));

/*
PREVIEW ANSWERS:

A:
.filter() replaces the manual loop + condition + push.
It automatically loops through the array and builds a new array.

B:
If the function returns true → item is included in new array.
If false → item is skipped.
*/