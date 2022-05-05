// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str1 = ' dirty string   ';

console.log(str1.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str2 = 'Ревуть воли як ясла повні';

let stringToarray = (str) => str.split(" ");

console.log(stringToarray(str2));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let array1 = [10,8,-7,55,987,-1011,0,1050,0];

// let array2 = array1.map(value => value + "");

let array2 = array1.map(function (value){
    return value + "";
});
console.log(array2);



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

let sortNums = (array, direction) =>{
    if (direction === 'ascending'){
        array.sort((a,b) => a - b);
    } else if (direction === 'descending'){
        array.sort((a,b) => b - a);
    }
    return array;
}

console.log(sortNums(nums, "descending"));


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let newArray = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration).filter(value => value.monthDuration > 5);
console.log(newArray);



// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cardSuitsArray = ['spade', 'diamond','heart', 'clubs'];
let valuesArray = [6, 7, 8, 9, 10, 'ace','jack','queen','king','joker'];

let deckOfCards = []

for (let cardSuitElement of cardSuitsArray) {
    for (let valuesElement of valuesArray) {
        let colorElement = "";
        if (cardSuitElement === 'heart' || cardSuitElement === 'diamond'){
            colorElement = 'red';
        } else{
            colorElement = 'black';
        }
        deckOfCards.push({cardSuit: cardSuitElement, value: valuesElement, color: colorElement})
    }
}

// - знайти піковий туз
console.log(deckOfCards.filter(value => value.cardSuit === "spade").find(value => value.value === "ace"));

// - всі шістки
console.log(deckOfCards.filter(value => value.value === 6));

// - всі червоні карти
console.log(deckOfCards.filter(value => value.color === "red"));

// - всі буби
console.log(deckOfCards.filter(value => value.cardSuit === "diamond"));

// - всі трефи від 9 та більше
console.log(deckOfCards.filter(value => value.cardSuit === "clubs").filter(value => value.value > 9 || typeof value.value === "string"));