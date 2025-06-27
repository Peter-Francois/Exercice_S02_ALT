import orderItemInterface from './models/orderItemInterface';
import orderInterface from './models/orderInterface';
import customerInterface from './models/customerInterface';
import orderValidator from './utils/orderValidator';
import priceCalculator from './utils/PriceCalculator';
import repository from './repository/repository';
import sendNotification from './services/sendNotification'

class OrderProcessor{

    constructor(){ }
    
    placeOrder(newOrder: orderInterface):void{
        if(!orderValidator.emailValidator(newOrder.customer.email)) throw new Error ("Email invalide");
        if(!orderValidator.orderValide(newOrder.items)) throw new Error("La commande doit avoir au moins un article")
        const orderCost = priceCalculator.calculateCost(newOrder.items);
        repository.save();
        sendNotification.orderCompleted(newOrder , orderCost);
    }
}


// À implémenter :
// - OrderValidator (utils)
// - PriceCalculator  (utils)
// - OrderRepository (repo)
// - NotificationService (services)
// - OrderProcessor (orchestrateur)
const hamer: orderItemInterface = {
    productId:'Hamer1',
    quantity: 2,
    price: 15
}
const saw: orderItemInterface = {
    productId:'Saw1',
    quantity: 1,
    price: 35
}
const nails: orderItemInterface = {
    productId:'nails',
    quantity: 20,
    price: 1
}

const carts: orderItemInterface[] = [
hamer,saw,nails
]

const newCustomer: customerInterface= {
    idCustomer :1,
    firstName: 'Francois', 
    lastName: 'Peter', 
    email: 'fur@hotmail.fr'
}

let newOrderProcess = new OrderProcessor();

const newOrder: orderInterface = {id: 'abc123', customer: newCustomer, items: carts}

newOrderProcess.placeOrder(newOrder);