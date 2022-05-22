// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// const div1 = document.createElement('div');
// const button1 = document.createElement('input');
//
// div1.style.width = "200px";
// div1.style.height = "200px";
// div1.style.border = "solid red 2px";
//
// button1.setAttribute("type", "button");
// button1.value = "PUSH ME";
// button1.onclick = () =>{
//     const element = document.getElementsByTagName("div")[0];
//     console.log(element);
//     element.classList.toggle("hide");
// }
//
// document.body.append(div1, button1);


//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// const button2 = document.createElement('input');
//
// button2.setAttribute("type", "button");
// button2.value = "PUSH ME";
//
// button2.onclick = () =>{
//     const element = document.getElementsByTagName("input")[0];
//     console.log(element);
//     element.classList.toggle("hide");
// }
//
// document.body.append(button2);

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
<<<<<<<< HEAD:HTML CSS JS/vKmin/additional3/scripts/main.js
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
========
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
//     та повідомити про це користувача

// const input1 = document.createElement("input");
// const button3 = document.createElement("input");
//
// input1.type = "text";
//
// button3.type = "button";
// button3.value = "Send";
//
// document.body.append(input1, button3);
//
// button3.onclick = () =>{
//     const age = input1.value;
//     if(+age < 18){
//         alert("Your age is less than 18")
//     }else{
//         alert("Go to the site!")
//     }
//     input1.value = "";
// }


>>>>>>>> origin/master:HTML_CSS_JS/vKmin/additional3/scripts/main.js
// - Створіть меню, яке розгортається/згортається при клику



// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//
//
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// const badArray = ["курва", "блядь", "шалава"];

// const input5 = document.createElement("input");
// const button5 = document.createElement("input");
//
// button5.type = "button";
// button5.value = "cheker";
//
// document.body.append(input5, button5);
//
// button5.onclick = () =>{
//     const arrayValue = input5.value.split(" ");
//     for (const string of arrayValue) {
//         if(badArray.find(value => value === string.toLocaleLowerCase())){
//             alert("Містить погані слова");
//         }
//     }
//     input5.value = "";
// }



// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
<<<<<<<< HEAD:HTML CSS JS/vKmin/additional3/scripts/main.js
// // Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// // 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// // 2й - залишає старших 29 років включно
// // 3й - залишає тих в кого місто Київ
// // Дані виводить в документ
// const createBloks = (array) =>{
//     const ownBlock = document.createElement("div");
//     ownBlock.classList.add("myClass")
//
//     for (const user of array) {
//         const div = document.createElement("div");
//         for (const userKey in user) {
//             if(userKey === "address"){
//                 console.log(userKey);
//                 for (const keys in user[userKey]) {
//                     div.innerText += ` ${keys.toUpperCase()}: ${user[userKey][keys]}, `;
//                 }
//             }else {
//                 div.innerText += ` ${userKey.toUpperCase()}: ${user[userKey]}, `;
//             }
//         }
//         ownBlock.appendChild(div);
//     }
//
//     document.body.appendChild(ownBlock);
// }
//
// createBloks(usersWithAddress);
//
//
// const checkboks1 = document.createElement("input");
// checkboks1.type = "checkbox";
// document.body.appendChild(checkboks1);
//
// // checkboks1.addEventListener("click", () => {
// //     if(checkboks1.checked){
// //         console.log("123")
// //     }
// // })
//
// checkboks1.onclick = () =>{
//     if(checkboks1.checked){
//
//
//         usersWithAddress.filter(value => value.isMarried === false)
//     } else {
//
//     }
// }
========
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
>>>>>>>> origin/master:HTML_CSS_JS/vKmin/additional3/scripts/main.js

