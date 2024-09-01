const Menu = require('./menu');
const Orders = require('./orders');

class Restaurant {
    constructor() {
        this.menu = new Menu();
        this.orders = new Orders();
    }

    addMenuItem(itemName, price) {
        this.menu.addMenuItem(itemName, price);
    }

    takeOrder(tableNumber, items) {
        this.orders.takeOrder(this.menu, tableNumber, items);
    }

    updateOrderStatus(tableNumber, status) {
        this.orders.updateOrderStatus(tableNumber, status);
    }

    calculateBill(tableNumber) {
        return this.orders.calculateBill(tableNumber);
    }

    displayActiveOrders() {
        return this.orders.displayActiveOrders();
    }
}

module.exports = Restaurant;
