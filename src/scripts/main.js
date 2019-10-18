// Practice: Fast Food Ordering


// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    getAllOrders: function() {
        return this.orders
    }
}

const chickenComboMeal = {
    sandwhichType: "chicken",
    fries: true,
    drinkSize: "large"
}

const mcBurgerMeal = {
    sandwhichType: "big mac",
    fries: true,
    drinkSize: "large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(mcBurgerMeal)

// Invoke the function to return the list of all orders
const allOrders = restaurant.getAllOrders()

// Output all orders to the console using console.table()
console.log(allOrders)