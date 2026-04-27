function filterByCategory(products, category) {
  return products.filter(product => product.category === category);
}

const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Shirt", category: "clothing" },
  { name: "Phone", category: "electronics" },
  { name: "Shoes", category: "clothing" },
  { name: "Apple", category: "food" }
];

const electronics = filterByCategory(products, "electronics");
console.log("Electronics:", electronics);

const clothing = filterByCategory(products, "clothing");
console.log("Clothing:", clothing);


const food = filterByCategory(products, "food");
const foodNames = food.map(item => item.name);
console.log("Food names:", foodNames);