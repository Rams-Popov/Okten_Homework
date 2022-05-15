// Візьміть файл template2.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

const textOnParagraph = document.getElementById("content").innerHTML;

// -- отримує текст з блоку з id "rules"

const textOnDiv = document.getElementById("rules").textContent;


// -- замініть текст параграфа з id 'content' на будь-який інший

let textOnParagraph2 = document.getElementById('content');
textOnParagraph2.innerHTML = '<p>Some text</p>'

// -- замініть текст параграфа з id 'rules' на будь-який інший

let textOnDiv2 = document.getElementById('rules');
textOnDiv2.innerHTML = '<p>Some another text</p>'

// -- змініть кожному елементу колір фону на червоний

const tagsArray = document.querySelectorAll('body *');

for (let i = 0; i < tagsArray.length; i++) {
    tagsArray[i].style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій

const tagsArray2 = document.getElementsByTagName("body")[0].getElementsByTagName("*");

for (let i = 0; i < tagsArray2.length; i++) {
    tagsArray2[i].style.background = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(document.getElementById("rules").classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

const arrayFcRules = document.getElementsByClassName('fc_rules');

for (let i = 0; i < arrayFcRules.length; i++) {
    arrayFcRules[i].style.background = 'red';
}