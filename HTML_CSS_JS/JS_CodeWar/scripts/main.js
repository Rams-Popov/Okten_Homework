// function evaporator(content, evap_per_day, threshold){
//     let i = 0;
//     const minConten = content * (threshold / 100);
//     while (content > minConten){
//         content *= (100 - evap_per_day) / 100;
//         i++;
//     }
//     return i;
// }
//
// console.log(evaporator(10, 10, 10));

// Пример : двоичное представление 1234is , поэтому в этом случае 10011010010функция должна вернуться 5
// const countBits = function(n) {
//     const toBitsTwo = BigInt(n).toString(2) + "";
//     console.log(toBitsTwo);
//     let x = 0;
//     for (let i = 0; i < toBitsTwo.length; i++) {
//         if(toBitsTwo[i] === '1'){
//             x++;
//         }
//     }
//     return x;
// };
//
// // countBits = n => n.toString(2).split('0').join('').length;
//
// console.log(countBits(19667327));

// Если что-то в тексте не является буквой, игнорируйте это и не возвращайте. "a" = 1, "b" = 2, и т.д.  -96 122
// function alphabetPosition(text) {
//     let str = "";
//     for (let i = 0; i < text.length; i++){
//         if (text[i].toLowerCase().charCodeAt() <= 122 && text[i].toLowerCase().charCodeAt() >= 97){
//             str += text[i].toLowerCase().charCodeAt() - 96 + " ";
//         }
//     }
//     return str.trim();
// }
//
// // function alphabetPosition(text) {
// //     return text
// //         .toUpperCase()
// //         .match(/[a-z]/gi)
// //         .map( (c) => c.charCodeAt() - 64)
// //         .join(' ');
// // }
//
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию,
// определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой.
// Игнорировать регистр букв.
// function isIsogram(str){
//     let ststus = true;
//     let newStr = '' + str[0];
//     for (let i = 1; i < str.length; i++){
//         if(newStr.indexOf(str[i].toLowerCase()) === -1){
//             newStr += str[i].toLowerCase();
//         } else {
//             ststus = false;
//             return ststus;
//         }
//     }
//    return ststus;
// }
//
// // function isIsogram(str){
// //     return new Set(str.toUpperCase()).size == str.length;
// // }
//
// console.log(isIsogram(""));

// В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G».
// function DNAStrand(dna){
//     let newDna = "";
//     for (let i = 0; i < dna.length; i++) {
//         switch (dna[i]){
//             case 'A':
//                 newDna += 'T';
//                 break;
//             case 'T':
//                 newDna += 'A';
//                 break;
//             case 'C':
//                 newDna += 'G';
//                 break;
//             case 'G':
//                 newDna += 'C';
//                 break;
//         }
//     }
//     return newDna;
// }
//
// // function DNAStrand(dna) {
// //     return dna.replace(/./g, function(c) {
// //         return DNAStrand.pairs[c]
// //     })
// // }
// //
// // DNAStrand.pairs = {
// //     A: 'T',
// //     T: 'A',
// //     C: 'G',
// //     G: 'C',
// // }
//
// console.log(DNAStrand("ATTGC"));

// Хорошо познакомился со старшим братом Фибоначчи, также известным как Трибоначчи.
// function tribonacci(signature,n){
//     if(n === 0) return [];
//     if(n === 1) return signature.slice(0,1);
//     if(n === 2) return signature.slice(0,2);
//     const arr = signature.slice(0);
//     for (let i = 3; i < n; i++) {
//         arr.push(arr[i-3] + arr[i-2] + arr[i-1]);
//     }
//     return arr;
// }
//
// // function tribonacci(signature,n){
// //     for (var i = 0; i < n-3; i++) { // iterate n times
// //         signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
// //     }
// //     return signature.slice(0, n); //return trib - length of n
// // }
//

// console.log(tribonacci([1,1,1],10));
// const moveZeros = (array) =>{
//     for (let i = 0, j = 0; i < array.length; i++) {
//         if(array[i] !==0){
//             let some = array[i];
//             array[i] = array[j];
//             array[j] = some;
//             j++;
//         }
//     }
//     return array;
// }
//
// // var moveZeros = function (arr) {
// //     return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// // }

// like this for names
// function likes(names) {
//     if(names.length === 0){
//         return 'no one likes this';
//     }
//     switch (names.length){
//         case 1:
//             return `${names[0]} likes this`;
//         case 2:
//             return `${names[0]} and ${names[1]} like this`;
//         case 3:
//             return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//         default:
//             return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     }
// }
//
// console.log(likes([]));

// // ROT13 является примером шифра Цезаря.
// function rot13(message) {
//     const bigAl = {};
//     const smallAl = {};
//
//     for (let i = 1, j = 65, z = 97; i < 27; i++, j++, z++) {
//         bigAl[j] = String.fromCharCode(j);
//         smallAl[z] = String.fromCharCode(z);
//     }
//
//     let str = "";
//     for (let i = 0; i < message.length; i++) {
//         if (smallAl[message[i].charCodeAt()] !== undefined){
//             if (message[i].charCodeAt() - 13 < 97){
//                 str += String.fromCharCode(message[i].charCodeAt() - 13 + 26);
//             } else {
//                 str += String.fromCharCode(message[i].charCodeAt() - 13);
//             }
//         } else if (bigAl[message[i].charCodeAt()] !== undefined){
//             if (message[i].charCodeAt() - 13 < 65){
//                 str += String.fromCharCode(message[i].charCodeAt() - 13 + 26);
//             } else {
//                 str += String.fromCharCode(message[i].charCodeAt() - 13);
//             }
//         } else {
//             str += message[i];
//         }
//     }
//     return str;
// }
//
// // function rot13(message) {
// //     var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// //     var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
// //     return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// // }
//
// console.log(rot13('Test'));

// Напишите функцию, которая проверяет, имеют ли два заданных символа один и тот же регистр.
// function sameCase(a, b){
//     const slov = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     if (slov.indexOf(a) === -1 || slov.indexOf(b) === -1) return -1;
//     if ((slov.indexOf(a) < 26 && slov.indexOf(b) < 26) || (slov.indexOf(a) > 25 && slov.indexOf(b) > 25))  return 1;
//     return 0;
// }
//
// console.log(sameCase('A', 's'));

// Дан месяц как целое число от 1 до 12, вернитесь к тому, к какому кварталу года он принадлежит, как целое число.
// const quarterOf = (month) => Math.ceil(month / 3);
//
// console.log(quarterOf(1));

// Есть массив с некоторыми числами. Все числа равны, кроме одного.
// function findUniq(arr) {
//     const result = arr.reduce(function(acc, el) {
//         acc[el] = (acc[el] || 0) + 1;
//         return acc;
//     }, {});
//
//     for (const resultKey in result) {
//         if (result[resultKey] === 1){
//             return +resultKey;
//         }
//     }
// }
//
// // function findUniq(arr) {
// //     return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// // }
//
// console.log(findUniq([1, 1, 2, 1, 1]));

// У цій ката ви повинні створити всі перестановки непорожнього вхідного рядка та видалити дублікати, якщо вони є.
// function permutations(str) {
//     str = str.split('')
//     const arrrr = permutations1(str).map(value => value.join(""));
//     function permutations1(arr, prepend) {
//         // if (typeof arr !== 'object') {
//         //     arr = arr.split('');
//         // }
//         var i, version, el, result = [];
//         prepend = prepend || [];
//         if (arr.length === 1) return [arr];
//         for (i = 0; i < arr.length; i++) {
//             if (arr.length === 2) {
//                 result.push(prepend.concat([arr[i], arr[(i + 1) % 2]]));
//             } else {
//                 version = arr.slice();
//                 el = version.splice(i, 1);
//                 result = result.concat(permutations1(version, prepend.concat(el)));
//             }
//         }
//         return result;
//     }
//     return arrrr.filter((value, index) => arrrr.indexOf(value) === index);
// }
//
// // function permutations(str) {
// //     return (str.length <= 1) ? [str] :
// //         Array.from(new Set(
// //             str.split('')
// //                 .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
// //                 .reduce((r, x) => r.concat(x), [])
// //         ));
// // }
//
// const test = permutations('aabb')

// Азбука Морзе
// decodeMorse = function(morseCode) {
//     const symbols = {
//         "-----" :"0",
//         ".----":"1",
//         "..---":"2",
//         "...--":"3",
//         "....-":"4",
//         ".....":"5",
//         "-....":"6",
//         "--...":"7",
//         "---..":"8",
//         "----.":"9",
//         ".-":"A",
//         "-...":"B",
//         "-.-.":"C",
//         "-..":"D",
//         ".":"E",
//         "..-.":"F",
//         "--.":"G",
//         "....":"H",
//         "..":"I",
//         ".---":"J",
//         "-.-":"K",
//         ".-..":"L",
//         "--":"M",
//         "-.":"N",
//         "---":"O",
//         ".--.":"P",
//         "--.-":"Q",
//         ".-.":"R",
//         "...":"S",
//         "-":"T",
//         "..-":"U",
//         "...-":"V",
//         ".--":"W",
//         "-..-":"X",
//         "-.--":"Y",
//         "--..":"Z",
//         "-.-.--":"!",
//         ".-.-.-":".",
//         "--..--":","
//     };
//
//     const arrCode = morseCode.split("   ").join("  ").split(" ");
//     let str = '';
//     for (const code of arrCode) {
//         if (code === ''){
//             str += " ";
//         }else {
//             if(code === "'...---...'"){
//                 str += "SOS";
//             } else {
//                 str += symbols[code];
//             }
//         }
//     }
//     return str.trim();
// }
//
// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

// Напишіть функцію, яка приймає рядок дужок і визначає, чи правильний порядок дужок.
// function validParentheses(parens) {
//     const findDuzh = (str) =>{
//         for (let i = 0; i < str.length; i++) {
//
//         }
//     }
//     for (let i = 0; i < parens.length; i++) {
//         if (parens[i] === "("){
//             findDuzh(parens.slice(i))
//         }
//
//     }
//     return false;
// }
//
// console.log(validParentheses("()"));

// Враховуючи ціле число nта два інших значення, побудуйте масив розміру, nзаповнений цими двома значеннями, що чергуються.
// function alternate(n, firstValue, secondValue){
//     const arr = [];
//     for (let i = 0; i < n; i++) {
//         const value = i % 2 === 0 ? firstValue : secondValue;
//         arr.push(value);
//     }
//     return arr;
// }
//
// console.log(alternate(5, true, false));

// Ця ката стосується перетворення чисел у їх двійкове або шістнадцяткове представлення:
// const evensAndOdds = (num) => (num % 2 === 0 ? num.toString(2) : num.toString(16));
// // const evensAndOdds = n => n.toString(n%2 ? 16 : 2);
//
// console.log(evensAndOdds(8172381723));

// Рядок запиту - це спосіб серіалізації об'єкта, який використовується в HTTP-запитах. Ви можете побачити це в URL:
// function toQueryString (obj) {
//     let str = ''
//     for (const objKey in obj) {
//         if (typeof obj[objKey] === "object"){
//             for (const objKeyElement of obj[objKey]) {
//                 str += `${objKey}=${objKeyElement}&`;
//             }
//         } else {
//             str += `${objKey}=${obj[objKey]}&`;
//         }
//     }
//     return str.slice(0,str.length-1);
// }
//
// console.log(toQueryString({foo: 1, bar: [2, 4]}));

// const numbers = function(array){
//     const arr = [];
//     for (let i = 0; i < array.length; i++) {
//         arr.push(`${i+1}: ${array[i]}`);
//     }
//     return arr;
// }
//
// // let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)
//
// console.log(numbers(["a", "b", "c"]));

// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (const contact of contacts){
        if (contact.firstName === name){
            if (contact[prop] !== undefined){
                return contact[prop]
            } else{
                return "No such property"
            }
        }
    }
    return "No such contact"

    // Only change code above this line
}

console.log(lookUpProfile("Kristian", "lastName"));