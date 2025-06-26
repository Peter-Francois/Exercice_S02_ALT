import orderItemInterface from './models/orderItemInterface';
import orderInterface from './models/orderInterface';
import customerInterface from './models/customerInterface';


class OrderProcessor{
    private carts: orderItemInterface[] = []

    constructor( customer: customerInterface, productId: number, quantity: orderInterface){}


}
// À implémenter :
// - OrderValidator (utils)
// - PriceCalculator  (utils)
// - OrderRepository (repo)
// - NotificationService (services)
// - OrderProcessor (orchestrateur)