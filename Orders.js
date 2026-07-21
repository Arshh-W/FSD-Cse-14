import { EventEmitter } from 'node:events';

class OrderSystem extends EventEmitter {
    placeOrder(order) {
        console.log(`order received : #${order.id} for ${order.customerName}`);
        console.log("Saving order to database...");
        this.emit("orderPlaced", order);
    }
}

const orderObj = new OrderSystem();

// sending email
orderObj.on("orderPlaced", (order) => {
    console.log(`Sending confirmation email to ${order.email}`);
});

// inventory service
orderObj.on("orderPlaced", (order) => {
    order.items.forEach((item) => {
        console.log(`Reducing stock for ${item.name} by ${item.quantity}`);
    });
});

// shipping service
orderObj.on("orderPlaced", (order) => {
    console.log(`Preparing shipment for order #${order.id}`);
});

//Logging 

