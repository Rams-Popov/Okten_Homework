let str1 = "hello";
let str2 = "owu";
let str3 = "com";
let str4 = "ua";

let number1 = 1;
let number2 = 10;
let number3 = -999;
let number4 = 123;
const number5 = 3.14;
let number6 = 2.7;
let number7 = 16;

const boolean1 = true;
const boolean2 = false;

alert(str1);
alert(str2);
alert(str3);
alert(str4);

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);
console.log(number6);
console.log(number7);

document.write(boolean1);
document.write(boolean2);


let firstBook = {
    name: "Harry Potter",
    pages: 800,
    genre: "fantastic"
};

let secondBook = {
    name: "The Hunger Games",
    pages: 700,
    genre: "fantastic",
    author: ["J. K. Rowling", "Suzanne Collins"]
};


let firstName = "Popov ";
let middleName = "Oleksandr ";
let lastName = "Valerievich";

let person = firstName + middleName + lastName;
console.log(person);

let myName = prompt("Enter your name");
let mySurname = prompt("Enter your surname");
let myAge = prompt("Enter your age");

console.log(`${myName} ${mySurname} ${myAge}`);

// console.log(myName);
// console.log(mySurname);
// console.log(myAge);

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

let books = [
    {name: "Harry Potter", pages: 800, genre: "Fantastic", author: "J. K. Rowling"},
    {name: "The Hunger Games", pages: 700, genre: "Fantastic", author:"Suzanne Collins"},
    {name: "Doctor Sleep", pages: 600, genre: "Horror", author:"Stephen King"}
]

console.log(books[0].name);
console.log(books[1].name);
console.log(books[2].name);

