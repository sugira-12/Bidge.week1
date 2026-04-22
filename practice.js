const productName ="Indomie Noodles";
const category = "Food";
let price = 500;
let quantity = 20
let inStock = true
console.log(productName)
console.log(category)
console.log(price)
console.log(quantity)
console.log(inStock)
console.log(typeof price)
/*Second part of the task */
console.log(`Indomie Noodles (${category}) - ${price} per unit`)
console.log(`${quantity} units in stock. In stock: ${inStock}`)
console.log(`Total value: ${price * quantity} RWF`)
/*Third part of the task */
if(price > 1000){
    console.log("true")
}else{
    console.log("false")
}
if(quantity === 20){
    console.log("true")
}else{
    console.log("false")
}
if(!quantity == 0){
    console.log("true")
}else{
    console.log("false")
}
let totalValue = price * quantity
console.log(`Remainder after splitting 3 ways: ${totalValue % 3} RWF`)
console.log(`Price including 10% tax: ${price * 1.10} RWF`)
/*Fourth part of the task */
if(quantity === 0){
    console.log(`CRITICAL: Out of stock. Reorder immediately. // with quantity = ${quantity}`)
}else if(quantity < 10){
    console.log(`WARNING: Low stock. Consider reordering. // with quantity = ${quantity}`)
}else if(quantity <= 50){
    console.log(`OK: Healthy stock level. // with quantity = ${quantity}`) 
}else{
    console.log(`FULL: Warehouse well stocked.   // with quantity = ${quantity}`)
}
 // quantity = 0 → CRITICAL: Out of stock...
 // quantity < 10 → WARNING: Low stock...
 // quantity <= 50 → OK: Healthy stock level...
 // quantity > 50 → FULL: Warehouse well stocked...
const products ={
 name: "Indomie Noodles",
 category: "Food",
 price: 500,
 quantity: 20,
 inStock: true
}
console.log(products.name)
console.log(products.category)
console.log(products.price)
console.log(products.quantity)
console.log(products.inStock)
console.log(`${products.name} (${products.category}) - ${products.price} RWF, ${products.quantity} units in stock.`)
products.price = products.price * 0.8
console.log(`Promotion price: ${products.price} RWF`)