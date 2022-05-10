// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(idUser, nameUser, surname, email, phone){
    this.idUser = idUser;
    this.nameUser = nameUser;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)

let arrayUsers = [
    {name: "Vasyl", surname: "Popenko", order: ["Apple", "Orange", "Plum"]},
    {name: "Oleksandr", surname: "Pupkin", order: ["Apple", "Orange"]},
    {name: "Kristina", surname: "Popova", order: ["Apple"]},
    {name: "Olena", surname: "Aspapova", order: ["Apple", "Orange", "Plum", "Kokos"]},
    {name: "Dmytro", surname: "Horbachov", order: ["Apple", "Orange", "Plum", "Banana", "Watermelon"]},
    {name: "Kolya", surname: "Galenko", order: ["Apple", "Orange", "Plum", "Banana"]},
    {name: "Misha", surname: "Rusyn", order: ["Apple", "Orange", "Plum", "Banana", "Watermelon", "Milk"]},
    {name: "Snijanna", surname: "Biloborodova", order: ["Apple", "Orange", "Plum", "Beef", "Fish"]},
    {name: "Alina", surname: "Peresoljak", order: ["Apple", "Orange", "Plum","Banana", "Watermelon", "Milk", "Beef", "Fish"]},
    {name: "Evgen", surname: "Brugenjak", order: ["Apple", "Fish", "Milk"]}
];

let users = [];

for (let arrayUser of arrayUsers) {
    let user = new User(arrayUsers.indexOf(arrayUser)+1, arrayUser.name, arrayUser.surname, arrayUser.name.toLowerCase() + arrayUser.surname.toLowerCase()+ "@sklad.com", "+3805053960" + (9 +arrayUsers.indexOf(arrayUser)+1));
    users.push(user);
}

console.log(users);


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(value => value.idUser % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((a, b) => a.idUser - b.idUser));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client{
    constructor(id, nameUser, surname, email, phone, order) {
        this.id = id;
        this.nameUser = nameUser;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clientsArray = [];

for (let arrayUser of arrayUsers) {
    let client = new Client(arrayUsers.indexOf(arrayUser)+1, arrayUser.name, arrayUser.surname, arrayUser.name.toLowerCase() + arrayUser.surname.toLowerCase()+ "@sklad.com", "+3805053960" + (9 +arrayUsers.indexOf(arrayUser)+1), arrayUser.order);
    clientsArray.push(client);
}

console.log(clientsArray);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientsArray.sort((a, b) => a.order.length - b.order.length));


//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, yearOfManufacture, maximumSpeed, engineCapacity){
    this.model = model;
    this.producer = producer;
    this.yearOfManufacture = yearOfManufacture;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = () => console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);

    this.info = () => console.log(`Model: ${this.model}, Producer: ${this.producer}, Year of manufacture: ${this.yearOfManufacture}, Max speed: ${this.maximumSpeed}, 
        Engine capacity: ${this.engineCapacity}`);

    this.increaseMaxSpeed = (newSpeed) => `New max speed = ${+newSpeed + +this.maximumSpeed}`;

    this.changeYear = (newValue) => `New year of manufacture = ${+newValue}`;

    this.addDriver = function(driver){
        this.driver = driver;
    }
}

let firstCar = new Car("BMV", "Germany", "2005", "200", "2.0");

firstCar.drive();

firstCar.info();

console.log(firstCar.increaseMaxSpeed(20));

console.log(firstCar.changeYear("2009"));

const driver1 = {
    driverName: "Kolja",
    driverSurName: "Pupkin",
    driverAge: 25
}

firstCar.addDriver(driver1);
console.log(firstCar.driver);


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class ModernCar {
    constructor(model, producer, yearOfManufacture, maximumSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.yearOfManufacture = yearOfManufacture;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive = () => console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);

    info = () => console.log(`Model: ${this.model}, Producer: ${this.producer}, Year of manufacture: ${this.yearOfManufacture}, Max speed: ${this.maximumSpeed}, 
        Engine capacity: ${this.engineCapacity}`);

    increaseMaxSpeed = (newSpeed) => `New max speed = ${+newSpeed + +this.maximumSpeed}`;

    changeYear = (newValue) => `New year of manufacture = ${+newValue}`;

    addDriver = (driver) => {
        this.driver = driver;
    }
}

let secondCar = new ModernCar("Audi", "Germany", "2001", "180", "2.2");

secondCar.drive();

secondCar.info();

console.log(secondCar.increaseMaxSpeed(30));

console.log(secondCar.changeYear("2015"));

const driver2 = {
    driverName: "Sasha",
    driverSurName: "Popov",
    driverAge: 26
}

secondCar.addDriver(driver2);
console.log(secondCar.driver);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella("Malvina", "22", "36"),
    new Cinderella("Alina", "22", "37"),
    new Cinderella("Natasha", "21", "36"),
    new Cinderella("Vika", "21", "37"),
    new Cinderella("Svitlana", "23", "36"),
    new Cinderella("Karina", "23", "37"),
    new Cinderella("Oleksandra", "24", "36"),
    new Cinderella("Nika", "24", "37"),
    new Cinderella("Pavlina", "20", "36"),
    new Cinderella("Gorgia", "20", "37")

];

console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince extends Cinderella{
    constructor(name, age, findShoe) {
        super(name, age);
        this.findShoe = findShoe;
    }

}

let ownPrince = new Prince("Karl", "23", "36");


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let cinderella of cinderellas) {
    if (cinderella.footSize === ownPrince.findShoe && cinderella.age === ownPrince.age){
        console.log(cinderella);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(cinderellas.find(value => value.footSize === ownPrince.findShoe && value.age === ownPrince.age));

