import customerInterface from "./customerInterface";
import orderItemInterface from "./orderItemInterface";

export default interface orderInterface {
    id: string;
    customer: customerInterface;
    items: orderItemInterface[];
}