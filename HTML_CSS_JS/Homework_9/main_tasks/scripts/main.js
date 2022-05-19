// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let averageNumWithArray = (array) => {
    let sumNumber = 0;
    for (let arrayElement of array) {
        sumNumber += arrayElement;
    }
    return sumNumber / array.length;
}

console.log(averageNumWithArray([2, 4, 5, 6, 9]));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
let minAndMax = (...arr) => {
    console.log(arr)
    let maxNum = arr[0];
    let minNum = arr[0];
    for (let argument of arr) {
        if (maxNum < argument){
            maxNum = argument;
        }
        if (minNum > argument){
            minNum = argument;
        }
    }
    console.log(maxNum);
    return minNum;
}

minAndMax(2,5,354,654,32,1,45);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomTenNumbers = () => {
    let array = []
    for (let i = 0; i < 10; i++) {
        array.push(Math.round(Math.random()*100))
    }
    console.log(array);
    return array;
}

randomTenNumbers();


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
let randomTenNumbersWithMaxLimit = (maxLimit) => {
    let array = []
    for (let i = 0; i < 10; i++) {
        array.push(Math.round(Math.random()*maxLimit))
    }
    return array;
}

randomTenNumbersWithMaxLimit(200);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrayInversion = (array) => {
    // return array.reverse();
    let reverseArray = []
    for (let i = array.length-1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
}

arrayInversion([2,5,354,654,32,1,45]);



//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleArea = (a, b) => a * b;
console.log(rectangleArea(12, 2));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (radius) => Math.PI * Math.pow(radius,2);
console.log(circleArea(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (height, radius) => 2 * Math.PI * height * radius;
console.log(cylinderArea(3, 5));


// - створити функцію яка приймає масив та виводить кожен його елемент
let unpackingArray = (array) => {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

unpackingArray([2,3,true,"qwerty",6,"some text", 367])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraph = (text) => document.write(`<p>${text}</p>`);
paragraph("some Text");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let listThreeElements = (textElements) => {
    document.write(`<ul>`);
    document.write(`<li>${textElements}</li>`);
    document.write(`<li>${textElements}</li>`);
    document.write(`<li>${textElements}</li>`);
    document.write(`</ul>`);
}

listThreeElements("some Text");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listElements = (textElements, quantityLine) => {
    document.write(`<ul>`);
    for (let i = 0; i < +quantityLine; i++) {
        document.write(`<li>${textElements}</li>`);
    }
    document.write(`</ul>`);
}

listElements("some Text", 10)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listWithArray = (array) => {
    document.write(`<ul>`);
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

listWithArray([2,3,true,"qwerty",6,"some text", 367]);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let users = [
    {id: 'vasya', name: 31, age: false},
    {id: 'petya', name: 30, age: true},
    {id: 'kolya', name: 29, age: true},
    {id: 'olya', name: 28, age: false},
];

let objectOutput = (array) => {
    for (let arrayElements of array) {
        document.write(`<div>`);
        document.write(`<ul>`);

        for (let arrayElement in arrayElements) {
            document.write(`<li>${arrayElements[arrayElement]}</li>`);
        }
        document.write(`</ul>`);
        document.write(`</div>`);
    }
}

objectOutput(users);

// - створити функцію яка повертає найменьше число з масиву
let minNumber = (array) => {
    let minNum = array[0];
    for (let arrayElement of array) {
        if (minNum > arrayElement){
            minNum = arrayElement;
        }
    }
    return minNum;
}

minNumber([2,5,354,654,32,1,45]);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumNumber = (array) => {
    let sumNum = 0;
    for (let arrayElement of array) {
        sumNum += arrayElement
    }
    return sumNum;
}

sumNumber([2,5,32,1,45]);



// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
let users2 = [
    {id: 'vasya', name: 31, age: false},
    {id: 'petya', name: 30, age: true},
];

let some = (array) => [array[0], array[1]] = [array[1], array[0]];

console.log(some(users2));