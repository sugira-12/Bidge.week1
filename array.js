const shop = [
  { name: "Indomie", price: 500, quantity: 20 },
  { name: "Akabanga", price: 2500, quantity: 6 },
  { name: "Fanta", price: 600, quantity: 0 },
];

console.log(shop[0].name);

console.log(shop[shop.length - 1].price);

console.log(shop.length);

shop[1].quantity = 100;

shop.push({ name: "Water", price: 300, quantity: 50 });

console.log(shop.length);

console.log(shop[1]);