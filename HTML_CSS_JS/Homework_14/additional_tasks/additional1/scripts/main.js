
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// const badArray = ["badWord1", "badWord2", "badWord3"];
//
// const input1 = document.createElement("input");
// const button1 = document.createElement("button");
//
// button1.innerText = "Checker";
//
// document.body.append(input1, button1);
//
// button1.onclick = () =>{
//     for (const word of badArray) {
//         if(word === input1.value.toLowerCase()){
//             alert("Bad word!");
//         }
//     }
//     input1.value = "";
// }

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
// const badArray = ["badWord1", "badWord2", "badWord3"];
//
// const input2 = document.createElement("input");
// const button2 = document.createElement("button");
//
// button2.innerText = "Checker";
//
// document.body.append(input2, button2);
//
// button2.onclick = () =>{
//     const arrayValue = input2.value.split(" ");
//     for (const string of arrayValue) {
//         if(badArray.find(value => value === string.toLocaleLowerCase())){
//             alert("Містить погані слова");
//         }
//     }
//     input2.value = "";
// }

//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
// const someList = ["One", "Two", "Three", "Four", "Five"];
//
// const title = document.createElement("h3");
// title.innerText = "Numbers";
//
// const ul1 = document.createElement("ul");
//
// for (const elementList of someList) {
//     const li1 = document.createElement("li");
//     li1.innerText = elementList;
//     ul1.appendChild(li1);
// }
//
// title.onclick = () => ul1.classList.toggle("hide2");
//
// document.body.append(title, ul1);

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// const arrayComents = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// ];
//
// for (const coment of arrayComents) {
//     const div = document.createElement("div");
//     const h = document.createElement("h3");
//     const p = document.createElement("p");
//     const button = document.createElement("button");
//
//     h.innerText = coment.title;
//     p.innerText = coment.body;
//
//     button.innerText = "Hide comment";
//
//     button.onclick = () =>{
//         p.classList.toggle("hide2");
//         if(button.value === "Hide comment"){
//             button.value = "Show comment";
//         } else {
//                 button.value = "Hide comment";
//         }
//     }
//
//     div.append(h, p, button);
//
//     document.body.appendChild(div);
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const buttonHide = document.createElement('button');
//
// buttonHide.innerText = "HIDE ME";
//
// buttonHide.onclick = () =>{
//     const element = document.getElementsByTagName("button")[0];
//     element.classList.toggle("hide");
// }
//
// document.body.append(buttonHide);


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// const findAllClasses = (where) =>{
//     const element = where.children;
//     for (const el of element) {
//         if (el.children.length === 0){
//             el.onclick = (e) =>{
//                 console.log(`Tag Name: ${e.target.localName}`);
//                 console.log(`Array Classes: ${e.target.classList}`);
//                 console.log(`ID: ${e.target.id}`);
//                 console.log(`Height x Width: ${e.target.clientHeight} x ${e.target.clientWidth}`);
//             }
//
//         } else{
//                 findAllClasses(el);
//         }
//     }
//
// }
//
// findAllClasses(document.body);

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// const findAllClasses = (where) =>{
//     const element = where.children;
//     for (const el of element) {
//         if (el.children.length === 0){
//             el.onclick = (e) =>{
//                 if(e.target.children.length === 0) {
//
//                     const div = document.createElement("div");
//                     const p = document.createElement("p");
//                     const buttonClose = document.createElement("button");
//
//                     p.innerText = `Tag Name: ${e.target.localName}
//                                    Array Classes: ${e.target.classList}
//                                    ID: ${e.target.id}
//                                    Height x Width: ${e.target.clientHeight} x ${e.target.clientWidth}`
//
//                     buttonClose.onclick = () => div.remove();
//                     buttonClose.innerText = "Close";
//
//                     div.id = "popup";
//                     div.style.fontSize = "14px";
//                     div.style.fontWeight = "400";
//                     div.style.border = "2px solid red";
//                     div.style.width = "300px"
//                     div.style.textAlign = "center";
//
//                     div.append(p, buttonClose);
//                     e.target.appendChild(div);
//                 }
//             }
//
//         } else{
//             findAllClasses(el);
//         }
//     }
//
// }
//
// findAllClasses(document.body);


// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
let usersWithAddressCopy;

const ownDiv = document.createElement("div");

ownDiv.classList.add("users");

for (const user of usersWithAddress) {
    const userDiv = document.createElement("div");
    userDiv.innerText = `${user.name}, ${user.age}`;
    ownDiv.appendChild(userDiv);
}

document.body.appendChild(ownDiv);

const filterStatus = document.createElement("input");
const filterAge = document.createElement("input");
const filterCity = document.createElement("input");

filterStatus.type = "checkbox";
filterAge.type = "checkbox";
filterCity.type = "checkbox";

document.body.appendChild(filterStatus);
document.body.appendChild(filterAge);
document.body.appendChild(filterCity);

const filterUser = (array) =>{
    ownDiv.innerText = "";
    for (const user of array) {
        const userDiv = document.createElement("div");
        userDiv.innerText = `${user.name}, ${user.age}`;
        ownDiv.appendChild(userDiv);
    }
}

// const filtersArray = document.getElementsByTagName("input");

filterStatus.onclick = () =>{
    if(filterStatus.checked){
        usersWithAddressCopy = usersWithAddress.filter(value => value.status === false);
        filterUser(usersWithAddressCopy);
    } else {
        filterUser(usersWithAddress);
    }
}


//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
