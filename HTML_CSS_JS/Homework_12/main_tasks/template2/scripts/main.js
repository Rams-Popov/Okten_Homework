
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header
//
// const addedClass = (elementId, newClass) => document.getElementById(elementId).classList.add(newClass);
//
// addedClass("main_header", "h1");
// console.log(document.getElementById("main_header").classList);

// b) робить шириниу елементу ul 400px
//
// const changeWidthTags = (tagName, newWidth) => {
//     const element = document.getElementsByTagName(tagName);
//     for (let i = 0; i < element.length; i++) {
//         element[i].style.width = newWidth;
//     }
// }
//
// changeWidthTags("ul", "400px");

// c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// const changeWidthClasses = (className, newWidth) => {
//     const element = document.getElementsByClassName(className);
//     for (let i = 0; i < element.length; i++) {
//         element[i].style.width = newWidth;
//     }
// }
//
// changeWidthClasses("linkList", "50%");

// d) отримує текст який зберігається в елементі з класом listElement2
//
// const changeTextClass = (className, newText) => {
//     const element = document.getElementsByClassName(className)[0];
//     element.innerHTML = newText;
// }
//
// changeTextClass("listElement2", "Some Text")

// e) отримує всі елементи li та змінює ім колір фону на сірий
//
// const changeBackgroundColorAllLi = (searchArea, newColor) => {
//     const element = document.querySelectorAll(searchArea + " li");
//     for (let i = 0; i < element.length; i++) {
//         element[i].style.backgroundColor = newColor;
//
//     }
// }
//
// changeBackgroundColorAllLi("*", "gray");

// f) отримує всі елементи 'a' та додає їм клас anchor
//
// const addedClassInTags = (tagName, newClass) =>{
//     const element = document.getElementsByTagName(tagName);
//     for (let i = 0; i < element.length; i++) {
//         element[i].classList.add(newClass)
//
//     }
// }
//
// addedClassInTags('a', 'anchor');

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// const changeSizeTextTagsWithContext = (tagName, findContext, newSize) => {
//     const element = document.getElementsByTagName(tagName);
//     for (let i = 0; i < element.length; i++) {
//         if (element[i].innerHTML === findContext){
//             element[i].style.fontSize = newSize
//         }
//     }
// }
//
// changeSizeTextTagsWithContext("a", 'link3', '40px');

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// const addedClassThemTextInTags = (tagName) => {
//     const element = document.getElementsByTagName(tagName);
//     for (let i = 0; i < element.length; i++) {
//         element[i].classList.add("element_"+ element[i].innerHTML);
//     }
// }
//
// addedClassThemTextInTags('a');

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// const changeBackgroundColorClassWithPrompt = (nameClass) =>{
//     const element = document.getElementsByClassName(nameClass);
//     const color = prompt('Enter a color').toLowerCase();
//     for (let i = 0; i < element.length; i++) {
//         element[i].style.backgroundColor = color;
//
//     }
// }
//
// changeBackgroundColorClassWithPrompt('sub-header');

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// const changeBackgroundColorClassWithPromptIf = (nameClass, iftext) =>{
//     const element = document.getElementsByClassName(nameClass);
//     for (let i = 0; i < element.length; i++) {
//         if (element[i].innerHTML === iftext){
//             element[i].style.backgroundColor = prompt('Enter a color').toLowerCase();
//         }
//     }
// }
//
// changeBackgroundColorClassWithPromptIf('sub-header', 'content 2 segment');

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// const changeTextInClassWithPrompt = (nameClass) =>{
//     const element = document.getElementsByClassName(nameClass);
//     for (let i = 0; i < element.length; i++) {
//         element[i].innerHTML = `<p>${prompt("New Text")}</p>`;
//     }
// }
//
// changeTextInClassWithPrompt('content_1');

// l) отримати елементи p та змінити їм padding на 20px
//
// const changePaddingTags = (nameTags, newPadding) =>{
//     const element = document.getElementsByTagName(nameTags)
//     for (let i = 0; i < element.length; i++) {
//         element[i].style.padding = newPadding;
//
//     }
// }
//
// changePaddingTags('p', '20px');

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

const changeTextTagsWithClass = (nameClass, newText) =>{
    const element = document.getElementsByClassName(nameClass);
    for (let i = 0; i < element.length; i++) {
        element[i].innerHTML = newText;

    }
}

changeTextTagsWithClass('text2', 'Some Text');
