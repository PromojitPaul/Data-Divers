const Restaurant = require('./restaurant');

const myRestaurant = new Restaurant();

// Adding menu items
myRestaurant.addMenuItem("Biryani", 250);
myRestaurant.addMenuItem("Pakora", 20);
myRestaurant.addMenuItem("Coca-Cola", 50);

// Taking orders
myRestaurant.takeOrder(1, ["Biryani", "Pakora"]);
myRestaurant.takeOrder(2, ["Coca-Cola"]);

// Updating order status
myRestaurant.updateOrderStatus(1, "Served");

// Calculating bill
myRestaurant.calculateBill(1);

// Displaying active orders
myRestaurant.displayActiveOrders();
