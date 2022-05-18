// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
//     Назва.
//     В кожного компютера має бути метод включання.

class Computer{
    constructor(namePc, RAM, powerCPU) {
        this.namePc = namePc;
        this.RAM = RAM;
        this.powerCPU = powerCPU;
        this.statusTurnOn = false;
    }

    turnOnPc = () =>{
        if(!this.statusTurnOn){
            this.statusTurnOn = true;
            return 'PC turn on';
        }else {
            this.statusTurnOn = false;
            return'PC turn off';
        }
    }
}


const pc1 = new Computer("Lenovo",8, 500);

pc1.turnOnPc();



// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===

class Laptop extends Computer{
    constructor(namePc, RAM, powerCPU, monitorInch) {
        super(namePc, RAM, powerCPU);
        this.monitorInch = monitorInch;
        this.workBattery = Math.round(this.powerCPU / (this.monitorInch * this.RAM) * 100) / 100;
    }

    myBattery = () => this.workBattery;
}

const laptop1 = new Laptop("HP", 8, 600, 16);
console.log(laptop1.myBattery());

//
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
class UltraBook extends Laptop{
    constructor(namePc, RAM, powerCPU, monitorInch, weight) {
        super(namePc, RAM, powerCPU, monitorInch);
        this.weight = weight;
    }

    turnOnPc = () =>{
        if(this.weight > 2 && this.workBattery < 4){
            return console.error("Very bad PC");
        }

        if(!this.statusTurnOn){
            this.statusTurnOn = true;
            return 'PC turn on';
        }else {
            this.statusTurnOn = false;
            return'PC turn off';
        }
    }
}

const ultraBook1 = new  UltraBook("Lenovo", 16, 1000, 25, 3);
ultraBook1.turnOnPc();


// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===

class StandardPc extends Computer{
    constructor(namePc, RAM, powerCPU) {
        super(namePc, RAM, powerCPU);
        this.FPS = this.powerCPU / this.RAM;
        this.upgradeCpuStatus = 10;
        this.upgradeRamStatus = false;
    }

    launchGame = (nameGame) => `You are playing ${nameGame} with ${this.FPS} FSP`;

    upgradeCpu = (rate) => {
        if((this.upgradeCpuStatus - rate) >= 0){
            this.upgradeCpuStatus -= rate;
            this.powerCPU *= rate / 100 + 1;
            return `Your new power CPU = ${this.powerCPU}`;
        } else{
            return `Your CPU cannot be increased by ${rate}%`;
        }
    }

    upgradeRam = () => {
        if(!this.upgradeRamStatus){
            this.upgradeRamStatus = true;
            this.RAM *= 2;
            return `Your new RAM = ${this.RAM}`;
        } else {
            return "Your RAM has already improved";
        }
    }
}

const standardPc1 = new StandardPc("Acer", 32, 1000);
console.log(standardPc1.launchGame("Gotika"));

console.log(standardPc1.upgradeCpu(5));

console.log(standardPc1.upgradeRam());



// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class GamePc extends StandardPc{
    constructor(namePc, RAM, powerCPU) {
        super(namePc, RAM, powerCPU);
        this.FPS *= 2;
    }

    launchGame = (nameGame) => {
        if(this.RAM < 8 && this.powerCPU < 500){
            return 'You cant play on this bucket!'
        }
        this.FPS *= 0.99;
        return `You are playing ${nameGame} with ${this.FPS} FSP`;
    }
}

const gamePc1 = new GamePc("HP", 8, 1000);

console.log(gamePc1.launchGame("Rayzen"));
console.log(gamePc1.launchGame("Rayzen2"));