// Все робити за допомоги js.

// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
const div1 = document.createElement('div');
div1.classList.add("wrap","collapse", "alpha", "beta");

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div1.style.backgroundColor = "red";
div1.style.color = "blue";
div1.style.fontSize = "40px";

// - додати цей блок в body.
document.body.appendChild(div1);

// - клонувати його повністю, та додати клон в body.
const div2 = div1.cloneNode()
document.body.appendChild(div2);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл index.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

const array1 = ['Main','Products','About us','Contacts'];
const classMenu = document.getElementsByClassName('menu')[0];

for (const value of array1) {
    const li1 = document.createElement('li');
    li1.innerHTML = value;
    classMenu.appendChild(li1);
}


//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerHTML = `Title: ${element.title}, Month Duration: ${element.monthDuration}`;
    document.body.appendChild(div);
}


// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const element of coursesAndDurationArray2) {
    const div = document.createElement('div');
    div.classList.add('item');

    // !!!!!!!!!!!!!
    // div.innerHTML = `<h1 class="heading">Title: ${element.title}</h1> <p class='description'>Month Duration: ${element.monthDuration}</p>`;
    // document.body.appendChild(div);
    // !!!!!!!!!!!!!

    document.body.appendChild(div);
    const p = document.createElement('p');
    p.classList.add('description');
    p.innerHTML = element.monthDuration;
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerHTML = element.title;
    div.append(h1,p);
    document.body.appendChild(div);
}