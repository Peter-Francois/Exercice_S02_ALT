let cart1 = [
  { name: "Pen", unitPrice: 2, quantity: 3, discount: 0 },
  { name: "Notebook", unitPrice: 5, quantity: 2, discount: 0 },
  { name: "Calculator", unitPrice: 20, quantity: 1, discount: 10 }, 
];
let cart2 = [
  { name: "Ordinateur", unitPrice: 750, quantity: 1, discount: 0 },
  { name: "Souris", unitPrice: 25, quantity: 2, discount: 0 },
  { name: "Clé USB", unitPrice: 15, quantity: 3, discount: 5 },
];

let carts= [];
carts.push(cart1);
carts.push(cart2);

function getLinePrice(unitPrice, quantity){
    return unitPrice * quantity;
}

function getSubTotal(cart){
    let subTotal = 0;
    for (let i = 0; i < cart.length; i++) {
    subTotal += getLinePrice(cart[i].unitPrice, cart[i].quantity);
    }
return subTotal.toFixed(2);
}

function getTotalDiscound(cart){
    let totalDiscount1 = 0;
    for (let i = 0; i < cart.length; i++) {
    if (cart[i].discount > 0) {
    let discountAmount = (
        getLinePrice(cart[i].unitPrice, cart[i].quantity) * cart[i].discount) / 100; 
    totalDiscount1 += discountAmount;
    }
}
return totalDiscount1.toFixed(2);
}


function main(carts, getSubTotal, getTotalDiscount){
    for (let i =0; i < carts.length; i++){
        console.log("===== FACTURE PANIER " + (i+1) + " =====");
        const subTotal = getSubTotal(carts[i]);
        console.log("Sous-total :", subTotal, "€");
        const totalDiscount = getTotalDiscound(carts[i]);
        console.log("Remise totale :", totalDiscount, "€");
        console.log(
            "Total à payer :", (subTotal - totalDiscount).toFixed(2), "€");
            console.log("--------------------------");
    }
}

main(carts, getSubTotal, getTotalDiscound);