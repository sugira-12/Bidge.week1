const product1 = {
 name: "Indomie Noodles",
 category: "Food",
 price: 500,
 quantity: 20,
 minStockLevel: 10,
 discountRate: 0.15
};
console.log(`Product: ${product1.name} (${product1.category})`)
console.log(`Price: ${product1.price} RWF | Quantity: ${product1.quantity} units`)
/*Question 7 */
const totalValue = product1.price * product1.quantity
const discountAmount = product1.price * product1.discountRate
const discountPrice = product1.price - discountAmount
console.log(`Total stock value: ${totalValue} RWF`)
console.log(`Discount per unit: ${discountAmount} RWF`)
console.log(`Discounted price: ${discountPrice} RWF`)
/*Question 8 */
if(product1.quantity === 0){
    console.log(`${product1.name} : OUT OF STOCK - Reorder  immediately.`)
}else if(product1.quantity < product1.minStockLevel){
    console.log(`${product1.name} : LOW STOCK - ${product1.quantity} units remaining.`)
}else if(product1.quantity <= 50){
    console.log(`${product1.name}: Healthy stocked - ${product1.quantity} units.`)
}else{
    console.log(`${product1.name}: Well stocked - ${product1.quantity} units.`)
}
/*Question 9 */
const product2 = {
 name: "Inyange Milk",
 category: "Drinks",
 price: 900,
 quantity: 10,
 minStockLevel: 2,
 discountRate: 1.15
};
console.log(`Product: ${product2.name} (${product2.category})`)
console.log(`Price: ${product2.price} RWF | Quantity: ${product2.quantity} units`)

const totalValue2 = product2.price * product2.quantity
const discountAmount2 = product2.price * product2.discountRate
const discountPrice2 = product2.price - discountAmount2
console.log(`Total stock value: ${totalValue2} RWF`)
console.log(`Discount per unit: ${discountAmount2} RWF`)
console.log(`Discounted price: ${discountPrice2} RWF`)

if(product2.quantity === 0){
    console.log(`${product2.name} : OUT OF STOCK - Reorder  immediately.`)
}else if(product2.quantity < product2.minStockLevel){
    console.log(`${product2.name} : LOW STOCK - ${product2.quantity} units remaining.`)
}else if(product2.quantity <= 50){
    console.log(`${product2.name}: Healthy stocked - ${product2.quantity} units.`)
}else{
    console.log(`${product2.name}: Well stocked - ${product2.quantity} units.`)
}
/* Price Comparison */

console.log("── Price Comparison ──")
if (product1.price < product2.price){
    console.log(`Budget pick: ${product1.name}`)
    console.log(`${product1.name} is ${Math.abs(product1.price - product2.price)} RWF cheaper than ${product2.name}.`)
}
/*Question 10 */
if(product1.quantity === 0 || product2.quantity ===0){
     console.log(`${product1.name} or ${product2.name} is out of stock. Please restock to continue sales.`)
}
if(product1.quantity < product1.minStockLevel || product2.quantity < product2.minStockLevel){
    console.log("Some products are running low on stock. Please restock soon.")
}
if((product1.price > 1500 || product1.quantity < product1.minStockLevel) && (product2.price > 1500 || product2.quantity < product2.minStockLevel)){
    console.log(`${product1.name} or ${product2.name} is overpriced or low on stock! Please reorder.`)
}
if(!(product1.quantity > 0 && product2.quantity > 0 && (product1.quantity < product1.minStockLevel && product2.quantity < product2.minStockLevel) && ((product1.price > 1500 && product1.quantity < product1.minStockLevel) ||(product2.price > 1500 && product2.quantity < product2.minStockLevel)))){
    console.log("Inventory status: All products OK. // when both are healthy")
}
/* Inventory Report */
console.log("=== KIGALI SHOP INVENTORY REPORT ===")
const totalProducts = 2
const inventoryValue = totalValue + totalValue2
if(product1.price > product2.price){
    console.log(`Most expensive product: ${product1.name} (${product1.price} RWF)`)
}else{
    console.log(`Most expensive product: ${product2.name} (${product2.price} RWF)`)
}
let lowStockCount = 0
if(product1.quantity < product1.minStockLevel){
    lowStockCount++
}
if(product2.quantity < product2.minStockLevel){
    lowStockCount++
}
console.log("─────────────────────────────────────")
console.log(`Insight: ${product1.name} is below minimum stock. Restock before the next market day.`)
console.log("=".repeat(36))