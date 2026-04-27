const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Inventory
const inventory = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 100 }
];

let cart = []; // stores purchased items

function showMenu() {
  console.log("\nINVENTORY");
  console.log("==========");

  console.log("1. Show Inventory");
  console.log("2. Buy Item");
  console.log("3. Total Value");
  console.log("4. Inventory Status");
  console.log("5. Receipt");
  console.log("6. Quit");

  rl.question("\nSelect an option: ", handleInput);
}

function showInventory() {
  console.log("\nAvailable Items:");
  inventory.forEach((item, i) => {
    console.log(`${i + 1}. ${item.name} - $${item.price}`);
  });
}

function buyItem(callback) {
  showInventory();

  rl.question("\nEnter item number to buy: ", (choice) => {
    const index = parseInt(choice) - 1;

    if (inventory[index]) {
      cart.push(inventory[index]);
      console.log(`\n✅ You bought: ${inventory[index].name}`);
    } else {
      console.log("\n❌ Invalid selection");
    }

    callback();
  });
}

function totalValue() {
  const total = inventory.reduce((sum, item) => sum + item.price, 0);
  console.log(`\nTotal Inventory Value: $${total}`);
}

function inventoryStatus() {
  console.log("\nInventory Status: Available");
}

function receipt() {
  if (cart.length === 0) {
    console.log("\n❌ You must buy something before getting a receipt.");
    return;
  }

  console.log("\n🧾 Receipt:");
  let total = 0;

  cart.forEach((item, i) => {
    console.log(`${i + 1}. ${item.name} - $${item.price}`);
    total += item.price;
  });

  console.log(`Total Paid: $${total}`);
}

function handleInput(choice) {
  switch (choice) {
    case "1":
      showInventory();
      showMenu();
      break;

    case "2":
      buyItem(showMenu);
      break;

    case "3":
      totalValue();
      showMenu();
      break;

    case "4":
      inventoryStatus();
      showMenu();
      break;

    case "5":
      receipt();
      showMenu();
      break;

    case "6":
      rl.question("\nAre you sure you want to quit? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === "yes") {
          console.log("\nGoodbye 👋");
          rl.close();
        } else {
          showMenu();
        }
      });
      break;

    default:
      console.log("\n❌ Invalid option");
      showMenu();
  }
}

// Start
showMenu();