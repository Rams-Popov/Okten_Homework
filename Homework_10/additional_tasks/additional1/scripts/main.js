// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) => {
    let array = []
    for (let i = 0; i < str.length; i+= n) {
        array.push(str.slice(i, n+i));
    }
    return array
}

console.log(cutString("наслаждение", 3));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
let str2 = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => str.split(" ").find(value => value.length === length);

console.log(delete_characters(str2, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
let str3 = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//

let insert_dash = (str) => str.replaceAll(" ", "-").toUpperCase();

console.log(insert_dash(str3));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let replaceFirstWord = (str) => str.charAt(0).toUpperCase() + str.slice(1, str.length);

console.log(replaceFirstWord("some Text"));


// - Дано список імен.
// let n1 = 'Harry..Potter'
let n2 = 'Ron--!!!-Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let validatorNames = (name) =>{
    let check = [".", "-", "_", "!", "@", "#", "$", "%", "^", "*"];
    check.forEach(value => name = name.replaceAll(value, " "));
    return name.split(" ").filter(value => value !== "").join(" ");
}

console.log(validatorNames(n2));


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomize = (quantity) =>{
    let array =[]
    for (let i = 0; i < quantity; i++) {
        array.push(Math.round(Math.random() * 100));
    }
    return array
}

console.log(randomize(10));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

let randomArray1 = randomize(10);
console.log(randomArray1.sort((a, b) => a - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

let randomArray2 = randomize(10);
console.log(randomArray2.filter(value => value % 2 === 0 && value !== 0));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => str.split(" ").map(value => value[0].toUpperCase() + value.slice(1)).join(" ");
console.log(capitalize("серий і саша круті викладачі в октені"));

// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let mailValidator = (mail) =>{
    mail = mail.toLowerCase();
    return mail.indexOf("@") > 3 && mail.indexOf(".") > mail.indexOf("@") + 2;
}

console.log(mailValidator("some.email@gmail.com"));


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// document.writeln(count(str, symb)) // 5

let symb = "о", str4 = "Астрономия это наука о небесных объектах";
let count = (str, stringsearch) => str.split("").filter(value => value === stringsearch).length;

console.log(count(str4, symb));

//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.

// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let str5 = "Сила тяжести приложена к центру масс тела";
let cutString2 = (str, n) => console.log(str.split(" ").slice(0, n).join(" "));

cutString2(str5, 5);

//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let booksArray = [
    {name: "Harry Potter", pages: 800, genres: ["Fantastic", "Novel"], authors: ["J. K. Rowling", "Mary GrandPré"]},
    {name: "The Hunger Games", pages: 600, genres: ["Fantastic", "Novel"], authors:["Suzanne Collins"]},
    {name: "Doctor Sleep", pages: 700, genres: ["Horror", "Fantastic"], authors:["Stephen King"]},
    {name: "Harry Potter and secret room", pages: 850, genres: ["Fantastic", "Novel"], authors: ["J. K. Rowling", "Mary GrandPré"]},
    {name: "The Woman in Black", pages: 650, genres: ["Fantastic", "Horror", "Novel"], authors:["Susan Hill", "John Lawrence"]},
    {name: "Cell", pages: 340, genres: ["Horror"], authors:["Stephen King", "Mark Stutzman"]},
    {name: "The Lord of the Rings", pages: 1178, genres: ["High fantasy", "Adventure"], authors: ["J. R. R. Tolkien"]},
    {name: "The Da Vinci Code", pages: 670, genres: ["Mystery", "Detective fiction", "Conspiracy fiction", "Thriller"], authors:["Dan Brown", "Ron Howard"]},
]

// -знайти наібльшу книжку.
console.log(booksArray.sort((a, b) => b.pages - a.pages)[0]);

// - знайти книжку/ки з найбільшою кількістю жанрів
console.log(booksArray.sort((a, b) => b.genres.length - a.genres.length)[0]);

// - знайти книжку/ки з найдовшою назвою
console.log(booksArray.sort((a, b) => b.name.length - a.name.length)[0]);

// - знайти книжку/ки які писали 2 автори
console.log(booksArray.filter(value => value.authors.length > 1));

// - знайти книжку/ки які писав 1 автор
console.log(booksArray.filter(value => value.authors.length < 2));

// - вісортувати книжки по кількості сторінок по зростанню
console.log(booksArray.sort((a, b) => a.pages - b.pages));