// restaurant.js

class Restaurant {
    constructor() {
        // Initialize empty arrays for menu items and orders
        this.menu = [];
        this.orders = [];
    }

    // Method to add a new menu item
    addMenuItem(itemName, price) {
        this.menu.push({ itemName, price });
        console.log(`Menu item added: ${itemName} for $${price}`);
    }

    // Method to take an order for a specific table
    takeOrder(tableNumber, items) {
        const orderItems = items.map(itemName => {
            // Find the menu item by name
            const menuItem = this.menu.find(menuItem => menuItem.itemName === itemName);
            if (menuItem) {
                return menuItem;
            } else {
                console.error(`Menu item ${itemName} not found.`);
                return null;
            }
        }).filter(item => item !== null);

        // Add the order to the orders array with status "Preparing"
        this.orders.push({
            tableNumber,
            items: orderItems,
            status: "Preparing"
        });
        console.log(`Order taken for table ${tableNumber}: ${items.join(', ')}`);
    }

    // Method to update the status of an order for a specific table
    updateOrderStatus(tableNumber, status) {
        const order = this.orders.find(order => order.tableNumber === tableNumber);
        if (order) {
            if (["Preparing", "Served", "Completed"].includes(status)) {
                order.status = status;
                console.log(`Order status for table ${tableNumber} updated to ${status}`);
            } else {
                console.error(`Invalid status: ${status}`);
            }
        } else {
            console.error(`Order for table ${tableNumber} not found.`);
        }
    }

    // Method to calculate the total bill for a specific table
    calculateBill(tableNumber) {
        const order = this.orders.find(order => order.tableNumber === tableNumber);
        if (order) {
            const total = order.items.reduce((sum, item) => sum + item.price, 0);
            console.log(`Total bill for table ${tableNumber}: $${total}`);
            return total;
        } else {
            console.error(`Order for table ${tableNumber} not found.`);
            return 0;
        }
    }

    // Method to display all active orders
    displayActiveOrders() {
        const activeOrders = this.orders.filter(order => ["Preparing", "Served"].includes(order.status));
        console.log("Active Orders:");
        activeOrders.forEach(order => {
            console.log(`Table ${order.tableNumber}: ${order.items.map(item => item.itemName).join(', ')} - Status: ${order.status}`);
        });
        return activeOrders;
    }
}

// Example usage of the Restaurant class
const myRestaurant = new Restaurant();

// Adding menu items
myRestaurant.addMenuItem("Biriyani", 250);
myRestaurant.addMenuItem("Pakoda", 20);
myRestaurant.addMenuItem("Coca-cola", 50);

// Taking orders
myRestaurant.takeOrder(1, ["Biriyani", "Pakoda"]);
myRestaurant.takeOrder(2, ["Coca-cola"]);

// Updating order status
myRestaurant.updateOrderStatus(1, "Served");

// Calculating bill
myRestaurant.calculateBill(1);

// Displaying active orders
myRestaurant.displayActiveOrders();
