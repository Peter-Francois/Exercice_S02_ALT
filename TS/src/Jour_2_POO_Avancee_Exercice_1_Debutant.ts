class BankAccount {
  
  constructor(private _accountNumber: string, private _balance: number, private _ownerName: string, private authorizedOverdraft: number) {}
  
    public deposit(amount: number): void{
        if(amount < 0) {throw new Error("Montant invalide");}
    this._balance += amount;
    console.log(`Vous venez déféctuer un dépot de ${amount} €\nLe nouveau sold de votre compte est de: ${this._balance} €`)
  };

    public withdraw(amount: number): boolean{
    if ((this._balance - amount) < 0 ) {
        console.log(`Vous ne pouvez pas retirer ${amount} € car votre sold est de ${this._balance} € et que votre découvert autorisé et de ${this.authorizedOverdraft} €`);
        return false
    }
    this._balance -= amount
    console.log(`Vous venez déféctuer un retrait de ${amount} €\nLe nouveau sold de votre compte est de: ${this._balance} €`)
    return true
    }

    public getBalance(): number{
        return this._balance
    }
    
    public getAccountInfo(): string{
        return (`N° de compte: ${this._accountNumber}\nClient: ${this._ownerName}\nLe sold de votre compte est de: ${this._balance} €`)
    }
}

let PeterAccount = new BankAccount("123abc456", 1500, "Francois Peter", 200);
PeterAccount.deposit(150);
PeterAccount.withdraw(2500);
console.log(PeterAccount.getAccountInfo())
