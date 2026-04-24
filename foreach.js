const sales = [
  { product: "Indomie", unitsSold: 45, pricePerUnit: 500 },
  { product: "Akabanga", unitsSold: 12, pricePerUnit: 2500 },
  { product: "Fanta", unitsSold: 80, pricePerUnit: 600 },
  { product: "Inyange", unitsSold: 0, pricePerUnit: 300 },
];

let totalRevenue = 0;
let zeroSales = 0;
let topSeller = sales[0];

sales.forEach(function(sale) {
  const revenue = sale.unitsSold * sale.pricePerUnit;
  console.log(`${sale.product}: ${revenue} RWF`);

  totalRevenue += revenue;

  if (sale.unitsSold === 0) zeroSales++;

  if (revenue > (topSeller.unitsSold * topSeller.pricePerUnit)) {
    topSeller = sale;
  }
});

console.log(`Total revenue: ${totalRevenue} RWF`);
console.log(`Products with zero sales: ${zeroSales}`);
console.log(`Top seller: ${topSeller.product} (${topSeller.unitsSold * topSeller.pricePerUnit} RWF)`);