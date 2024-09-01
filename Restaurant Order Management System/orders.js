class Orders {
    constructor() {
        this.orders = [];
    }

    takeOrder(menu, tableNumber, items) {
        const orderItems = items.map(itemName => {
            const menuItem = menu.findMenuItem(itemName);
            if (menuItem) {
                return menuItem;
            } else {
                console.error(`Menu item ${itemName} not found.`);
                return null;
            }
        }).filter(item => item !== null);

        this.orders.push({
            tableNumber,
            items: orderItems,
            status: "Preparing"
        });
        console.log(`Order taken for table ${tableNumber}: ${items.join(', ')}`);
    }

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

    calculateBill(tableNumber) {
        const order = this.orders.find(order => order.tableNumber === tableNumber);
        if (order) {
            const total = order.items.reduce((sum, item) => sum + item.price, 0);
            console.log(`Total bill for table ${tableNumber}: Rs${total}`);
            return total;
        } else {
            console.error(`Order for table ${tableNumber} not found.`);
            return 0;
        }
    }

    displayActiveOrders() {
        const activeOrders = this.orders.filter(order => ["Preparing", "Served"].includes(order.status));
        console.log("Active Orders:");
        activeOrders.forEach(order => {
            console.log(`Table ${order.tableNumber}: ${order.items.map(item => item.itemName).join(', ')} - Status: ${order.status}`);
        });
        return activeOrders;
    }
}

module.exports = Orders;
