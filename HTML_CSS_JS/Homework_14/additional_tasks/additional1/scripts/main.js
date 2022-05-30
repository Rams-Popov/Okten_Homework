
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


// // -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// // - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
//
// const createForm = document.createElement("form");
// createForm.name = "form";
//
// const inputStatus =document.createElement("input");
// const inputCity =document.createElement("input");
// const inputAge =document.createElement("input");
//
// const usersDiv = document.createElement("div");
// usersDiv.id = 'content';
//
// inputStatus.type = "checkbox";
// inputCity.type = "checkbox";
// inputAge.type = "checkbox";
//
// inputStatus.name = "status";
// inputCity.name = "city";
// inputAge.name = "age";
//
// createForm.append(inputStatus, inputCity, inputAge);
// document.body.append(usersDiv, createForm);
//
//
//
// const content = document.getElementById('content');
// const form = document.forms.form;
//
// const save = (users) => {
//     content.innerHTML = '';
//     users.forEach(user => {
//         const userDiv = document.createElement('div');
//         userDiv.innerText = JSON.stringify(user);
//         content.append(userDiv);
//     })
// }
//
// save(usersWithAddress);
//
// form.onchange = () => {
//     let filter = usersWithAddress;
//     if (form.status.checked) {
//         filter = filter.filter(value => !value.status);
//     }
//     if (form.city.checked) {
//         filter = filter.filter(value => value.address.city === 'Kyiv');
//     }
//     if (form.age.checked) {
//         filter = filter.filter(value => value.age >= 29);
//     }
//     save(filter);
// }


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//

const giveDomElement = (domElement) =>{
    const btnNext = document.createElement("button");
    const btnPrev = document.createElement("button");

    let targetElement = document.getElementsByTagName(domElement)[0];
    targetElement.style.backgroundColor = "silver";


    btnNext.innerText = "Next";
    btnPrev.innerText = "Prev";

    let prevTarget = targetElement;
    let inner = false;

    // const allClasses = [];
    //
    // const findAllClasses = (where) =>{
    //     const element = where.children;
    //     for (const el of element) {
    //         allClasses.push(el.tagName)
    //
    //
    //         if (el.children.length !== 0){
    //             findAllClasses(el);
    //         }
    //         console.log(el)
    //     }
    // }

    btnNext.onclick = () =>{
        findAllClasses(targetElement.nextElementSibling ? targetElement.nextElementSibling : document.body.children[0]);
    }

    btnPrev.onclick = () =>{
        const prevEl = targetElement.previousElementSibling;
        innerElement(prevEl);
    }






    // const innerElement = (element) => {
    //
    //     prevTarget.style.backgroundColor = "white";
    //     targetElement.style.backgroundColor = "white";
    //     targetElement = element;
    //
    //     // inner = element.children.length !== 0;
    //
    //     if(inner) {
    //
    //         console.log(targetElement);
    //         if(targetElement.children.length > 0){
    //             targetElement = targetElement.children[0];
    //             console.log(targetElement.children[0])
    //             innerElement(targetElement.children[0]);
    //
    //         }
    //     }
    //     // console.log(targetElement);
    //     targetElement.style.backgroundColor = "silver";
    //
    //     // inner = element.children.length !== 0;
    //     if (element.children.length !== 0){
    //         inner = true;
    //         targetElement = targetElement.previousElementSibling;
    //     }
    //     //
    //     // if (element.children.length === 0){
    //     //     if (targetElement === element.parentNode.children[element.parentNode.children.length - 1]){
    //     //         prevTarget = targetElement;
    //     //         targetElement = targetElement.parentElement;
    //     //     }
    //     // } else {
    //     //     innerElement(targetElement.children[0]);
    //     // }
    // }

    document.body.append(btnNext, btnPrev);
}

// giveDomElement("h1");

const getDOM = (function() {
    let dom = "",
        depth = 0;

    return function(node, n) {
        for (let i = 0; i < depth; i++) {
            dom += '<span>|---</span>';
        }

        dom += '<b>' + node.nodeName.toLowerCase() + '</b>';

        if (node.id) {
            dom += '[#' + node.id + ']';
        }

        if (node.className) {
            dom += '(' + node.className + ')'
        }

        if (typeof n === 'number') {
            dom += '<span>{child #' + n + '}</span>';
        }

        dom += '<br>';
        depth++;

        [].forEach.call(node.children, function(node, childNumber) {
            getDOM(node, childNumber);
        });

        depth--;
        return dom;
    };
})();

console.log(getDOM())

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
//
// const photos = document.getElementsByTagName("img");
// console.log(photos);
//
// let i = 0;
//
// next.onclick = () => {
//     photos[i].style.display = "none";
//     i++;
//
//     if (i === photos.length){
//         i = 0;
//     }
//
//     photos[i].style.display = "block";
// }
//
// prev.onclick = () =>{
//     console.log(i)
//     photos[i].style.display = "none";
//     i--;
//
//     if (i < 0){
//         i = photos.length - 1;
//     }
//
//     photos[i].style.display = "block";
// }


//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//
// const div = document.createElement("div");
//
// div.innerText = "Oleksandr";
//
// document.body.appendChild(div);
// const div1 = document.createElement("div");
//
// div1.innerText = "Popov";
//
// document.body.appendChild(div1);
//
// document.querySelector("*").onmouseup = function(e) {
//
//     const selected_text = window.getSelection();
//     const targetSegment = selected_text.toString();
//     let tagText = e.target.innerText;
//
//     if (e.target.localName === "strong"){
//         tagText = e.target.parentElement.innerText;
//     }
//
//     if(targetSegment.length > 0){
//         if (e.target.localName === "strong"){
//             e.target.parentElement.innerHTML = `${tagText.slice(0, tagText.indexOf(targetSegment))}<strong>${targetSegment}</strong>${tagText.slice(tagText.indexOf(targetSegment) + targetSegment.length)}`;
//         }else if(e.target.localName !== "strong") {
//             e.target.innerHTML = `${tagText.slice(0, tagText.indexOf(targetSegment))}<strong>${targetSegment}</strong>${tagText.slice(tagText.indexOf(targetSegment) + targetSegment.length)}`;
//         }
//     }
// }
//

