/* let products =[
    {name:"Indomie Noodles", price:  500, quantity: 20},
    {name:"Inyange Milk", price: 900, quantity: 10},
    {name:"Coca-Cola", price: 1200, quantity: 5},
    {name:"Bananas", price: 300, quantity: 50},
]
console.log(products.length)
let value1 = products[0].price * products[0].quantity
let value2 = products[1].price * products[1].quantity
let value3 = products[2].price * products[2].quantity
let totalValue = value1 + value2 + value3
console.log(`Total value of first 3 products: ${totalValue} RWF`)
products.push({name:"Bread", price: 400, quantity: 15})
console.log(products.length)
console.log("=".repeat(50))
console.log("_____WHY LOOPSS EXISTS_____")
console.log("loops exists to perform repetitive tasks without having to write the same code multiple times") */
console.log("=".repeat(50))
console.log("____ ARRAYS _____")
let products =[
    {name:"Indomie Noodles",quantity: 20, price:  500, discount: 0.1, category: "Food", minStockLevel: 10},
    {name:"Inyange Milk", quantity: 10, price: 900, discount: 0.05, category: "Dairy", minStockLevel: 5},
    {name:"Coca-Cola", quantity: 5, price: 1200, discount: 0.15, category: "Beverage", minStockLevel: 3},
    {name:"Bananas", quantity: 50, price: 300, discount: 0.2, category: "Fruit", minStockLevel: 20}
 ]
let value1 = products[0].price * products[0].quantity
let value2 = products[1].price * products[1].quantity
let value3 = products[2].price * products[2].quantity
let value4 = products[3].price * products[3].quantity

function getTotalValue(value1, value2, value3, value4){
    return value1 + value2 + value3 + value4
}
let totalValue = getTotalValue(value1, value2, value3, value4)
console.log(`Total value of products: ${totalValue} RWF`)

let price1 = products[0].price
let price2 = products[1].price
let price3 = products[2].price
let price4 = products[3].price
let discount1 = price1 * products[0].discount
let discount2 = price2 * products[1].discount
let discount3 = price3 * products[2].discount
let discount4 = price4 * products[3].discount
function getDiscountValue(price1, price2, price3, price4){
    return discount1 + discount2 + discount3 + discount4
}
let totalDiscount = getDiscountValue(price1, price2, price3, price4)
console.log(`Total discount on products: ${totalDiscount} RWF`)
let status1 = products[0].quantity > products[0].minStockLevel ? "In Stock" : "Low Stock"
let status2 = products[1].quantity > products[1].minStockLevel ? "In Stock" : "Low Stock"
let status3 = products[2].quantity > products[2].minStockLevel ? "In Stock" : "Low Stock"
let status4 = products[3].quantity > products[3].minStockLevel ? "In Stock" : "Low Stock"
function getStockStatus(status1, status2, status3, status4){
    return `Stock status of ${products[0].name}: ${status1}, Stock status of ${products[1].name}: ${status2}, Stock status of ${products[2].name}: ${status3}, Stock status of ${products[3].name}: ${status4}`
}
let stockStatus = getStockStatus(status1, status2, status3, status4)
console.log(`Dear manager here is a freee report on your stock: ${stockStatus}`)