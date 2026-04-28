<<<<<<< HEAD
const sales = [
  { product: "Indomie", unitsSold: 45, pricePerUnit: 500 },
  { product: "Akabanga", unitsSold: 12, pricePerUnit: 2500 },
  { product: "Fanta", unitsSold: 80, pricePerUnit: 600 },
  { product: "Inyange", unitsSold: 0, pricePerUnit: 300 },
];

function getRevenue(sale) {
  return sale.unitsSold * sale.pricePerUnit;
}

function getSalesStatus(sale) {
  if (sale.unitsSold === 0) return "No sales";
  if (sale.unitsSold < 20) return "Low";
  if (sale.unitsSold < 60) return "Good";
  return "Excellent";
}

let total = 0;
let excellentCount = 0;

// FIRST LOOP — print
sales.forEach(function(sale) {
  console.log(`${sale.product} — ${getRevenue(sale)} RWF — ${getSalesStatus(sale)}`);
});

// SECOND LOOP — accumulate
sales.forEach(function(sale) {
  total += getRevenue(sale);
  if (getSalesStatus(sale) === "Excellent") {
    excellentCount++;
  }
});

console.log(`Total revenue: ${total} RWF`);
=======
const sales = [
  { product: "Indomie", unitsSold: 45, pricePerUnit: 500 },
  { product: "Akabanga", unitsSold: 12, pricePerUnit: 2500 },
  { product: "Fanta", unitsSold: 80, pricePerUnit: 600 },
  { product: "Inyange", unitsSold: 0, pricePerUnit: 300 },
];

function getRevenue(sale) {
  return sale.unitsSold * sale.pricePerUnit;
}

function getSalesStatus(sale) {
  if (sale.unitsSold === 0) return "No sales";
  if (sale.unitsSold < 20) return "Low";
  if (sale.unitsSold < 60) return "Good";
  return "Excellent";
}

let total = 0;
let excellentCount = 0;

// FIRST LOOP — print
sales.forEach(function(sale) {
  console.log(`${sale.product} — ${getRevenue(sale)} RWF — ${getSalesStatus(sale)}`);
});

// SECOND LOOP — accumulate
sales.forEach(function(sale) {
  total += getRevenue(sale);
  if (getSalesStatus(sale) === "Excellent") {
    excellentCount++;
  }
});

console.log(`Total revenue: ${total} RWF`);
>>>>>>> 6f507968aa65555313f40416fd8e5009b053b242
console.log(`Excellent performers: ${excellentCount}`);