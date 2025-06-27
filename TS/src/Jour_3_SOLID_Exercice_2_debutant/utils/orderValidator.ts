import orderItemInterface from '../models/orderItemInterface';

export default class orderValidator{
    static emailValidator(email: string): boolean{
        return email.includes('@')
    }
    static orderValide(carts: orderItemInterface[]){
        return carts.length <= 0? false : true;
    }
}