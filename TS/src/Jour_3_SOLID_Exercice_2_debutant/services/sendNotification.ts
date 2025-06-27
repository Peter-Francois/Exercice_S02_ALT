import orderInterface from '../models/orderInterface';

export default class sendNotification{
    static orderCompleted(newOrder: orderInterface, orderCost: number): void{
        console.log(`-------------------`);
        console.log(`Commande ${newOrder.id} validé`)
        console.log("-------------------")
        console.log(`Client: ${newOrder.customer.firstName} ${newOrder.customer.lastName}`)
        console.log("-------------------")
        console.log(`Total commande: ${orderCost} €`)
    }
}