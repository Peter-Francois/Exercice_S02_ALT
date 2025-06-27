import orderItemInterface from '../models/orderItemInterface'

export default class priceCalculator{
    static calculateCost(orderItems: orderItemInterface[]): number{
        let calculateCost: number = 0;
        orderItems.forEach(item => {
            calculateCost += (item.price * item.quantity );
        });
    return calculateCost
    }
}