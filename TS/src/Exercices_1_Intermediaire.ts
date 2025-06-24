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

// Interface d'un vehicule
interface Vehicle {
    brand: string,
    year: number,
    color: Color,
}

// Classe abstraite de base
class Vehicle implements Maintainable {
    constructor(
        public brand: string,
        public year: number,
        public color: Color,
        protected maintenanceCost: number,
        private nextMaintenanceDate: Date
        ){
            this.brand = brand;
            this.year = year;
            this.color = color;
        }
    getMaintenanceCost(): number{
        return this.maintenanceCost
    }
    getNextMaintenanceDate(): Date{
        return this.nextMaintenanceDate;
    }
}

// Classes dérivées
class Car extends Vehicle {
    doors: number;

    constructor(
        brand: string,
        year: number,
        color: Color,
        doors: number,
        maintenanceCost: number,
        nextMaintenanceDate: Date)
        {
            super(brand, year, color, maintenanceCost, nextMaintenanceDate);
            this.doors = doors
        }
}

class Motorcycle extends Vehicle {
    isMotocycle: boolean;

    constructor(
        brand: string,
        year: number,
        color: Color,
        isMotocycle: boolean,
        maintenanceCost: number,
        nextMaintenanceDate: Date){
            super(brand, year, color, maintenanceCost, nextMaintenanceDate);
            this.isMotocycle = isMotocycle;
        }
}

const ford = new Car ("Ford", 2022, Color.Black, 2, 200, new Date())
const bandit = new Motorcycle("Suzuki", 2015, Color.Red, true, 200, new Date())

console.log(ford.getNextMaintenanceDate())
console.log(bandit.getNextMaintenanceDate())


// TODO
// use VehicleInterface