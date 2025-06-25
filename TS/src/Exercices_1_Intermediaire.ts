enum Color{
    White = "WHITE",
    Black ="BLACK",
    Red = "RED",
    Unknow = "UNKNOW"
}

// Interface pour la maintenance
interface Maintainable {
    getMaintenanceCost(): number;
    getNextMaintenanceDate(): Date;
}


// Classe abstraite de base
class Vehicle implements Maintainable {
    constructor(
        public brand: string,
        public year: number,
        public color: Color,
        public wires: number,
        protected maintenanceCost: number,
        private nextMaintenanceDate: Date,
        ){
            this.brand = brand;
            this.year = year;
            this.color = color;
            this.wires = wires
        }
    getMaintenanceCost(): number{
        return this.maintenanceCost;
    }
    getNextMaintenanceDate(): Date{
        return this.nextMaintenanceDate;
    }
}

// Classes dérivées
class Car extends Vehicle {
    isMotocycle: boolean;
    doors: number;
    needNewOil: Boolean;
    needNewWires: boolean;

    constructor(
        brand: string,
        year: number,
        color: Color,
        isMotocycle: boolean,
        doors: number,
        wires: number,
        maintenanceCost: number,
        nextMaintenanceDate: Date,
        needNewOil: boolean,
        needNewWires: boolean
       )
        {
            super(brand, year, color, wires, maintenanceCost, nextMaintenanceDate);
            this.isMotocycle = isMotocycle
            this.doors = doors;
            this.needNewOil = needNewOil;
            this.needNewWires = needNewWires;

        }
    getMaintenanceCost(): number{
        if(this.needNewOil){
            this.maintenanceCost += 150;
        }
        if(this.needNewWires)
        {
            this.maintenanceCost += 300;
        }
        return this.maintenanceCost;
    }
}

class Motorcycle extends Vehicle {
    isMotocycle: boolean;
    doors: number;
    needNewOil: Boolean
    needNewWires: boolean
    constructor(
        brand: string,
        year: number,
        color: Color,
        isMotocycle: boolean,
        doors: number,
        wires: number,
        maintenanceCost: number,
        nextMaintenanceDate: Date,
        needNewOil: boolean,
        needNewWires: boolean){
            super(brand, year, color, wires, maintenanceCost, nextMaintenanceDate);
            this.isMotocycle = isMotocycle
            this.doors = doors;
            this.needNewOil = needNewOil;
            this.needNewWires = needNewWires;
        }
        getMaintenanceCost(): number{
        if(this.needNewOil){
            this.maintenanceCost += 50;
        }
        if(this.needNewWires)
        {
            this.maintenanceCost += 200;
        }
        return this.maintenanceCost;
    }
}

const ford = new Car ("Ford", 2022,Color.Black, false, 4, 4, 50, new Date(), true, true)
const bandit = new Motorcycle("Suzuki", 2015, Color.Red, true, 2, 0, 30, new Date(), true, false)

console.log(ford.getMaintenanceCost())
console.log(bandit.getMaintenanceCost())

