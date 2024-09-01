const Restaurant = require('./restaurant');

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
