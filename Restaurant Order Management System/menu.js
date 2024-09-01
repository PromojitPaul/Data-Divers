class Menu {
    constructor() {
        this.items = [];
    }

    addMenuItem(itemName, price) {
        this.items.push({ itemName, price });
        console.log(`Menu item added: ${itemName} for Rs: ${price}`);
    }

    findMenuItem(itemName) {
        return this.items.find(menuItem => menuItem.itemName === itemName);
    }
}

module.exports = Menu;
