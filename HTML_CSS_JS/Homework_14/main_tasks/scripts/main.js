// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
const div1 = document.createElement('div');
const button1 = document.createElement('input');

div1.style.width = "200px";
div1.style.height = "200px";
div1.style.border = "solid red 2px";
div1.setAttribute("id", "text")

button1.setAttribute("type", "button");
button1.value = "PUSH ME";
button1.onclick = () =>{
    const element = document.getElementById("text");
    element.classList.toggle("some-class");
}

document.body.append(div1, button1);
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
const input2 = document.createElement('input');
const button2 = document.createElement('input');

button2.type = "button";
button2.value = "Check";

button2.onclick = () =>{
    if(isNaN(+input2.value)){
        alert("Ви ввели не число!");
        input2.value = "";
        return;
    }
    if(+input2.value < 18){
        alert("You are too young ");
    } else{
        alert("Go to the cite");
    }
    input2.value = "";
}

document.body.append(input2, button2);



//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
const form1 = document.createElement("form");
const form2 = document.createElement("form");

form1.name = "fm1";
form2.name = "fm2";

const input3 = document.createElement('input');
const input4 = document.createElement('input');

form1.appendChild(input3);
form2.appendChild(input4);

const button3 = document.createElement('input');
button3.type = "button";
button3.value = "Click";

button3.onclick = () =>{
    console.log(`${input3.value} ${input4.value}`)
    input3.value = "";
    input4.value = "";
}

document.body.append(form1, form2, button3);

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const input5 = document.createElement('input');
input5.name = "numbersOfLine";
input5.placeholder = "Row";

const input6 = document.createElement('input');
input6.name = "numbersOfCells";
input6.placeholder = "Colum";

const input7 = document.createElement('input');
input7.name = "cellContents";
input7.placeholder = "Content";

const button4 = document.createElement('input');
button4.type = "button";
button4.value = "Click";

const buttonDelete = document.createElement('input');
buttonDelete.type = "button";
buttonDelete.value = "Delete All Table";

document.body.append(input5, input6, input7, button4, buttonDelete);

button4.onclick = () =>{
    if(isNaN(+input5.value) || isNaN(+input6.value)){
        alert("Введіть числа в перші два поля!");
        [input6.value, input5.value, input7.value] = ["", "", ""];
        return;
    }

    const table = document.createElement("div");

    for (let i = 0; i < +input5.value; i++) {
        const divRow = document.createElement("div");

        for (let y = 0; y < +input6.value; y++) {
            const divCell = document.createElement("div");
            divCell.innerText = input7.value;
            divCell.style.border = "solid red 1px";

            divRow.appendChild(divCell);
        }

        divRow.style.display = "flex";
        divRow.style.border = "solid red 2px";

        table.classList.add("table")
        table.appendChild(divRow)
        document.body.appendChild(table);
    }

    [input6.value, input5.value, input7.value] = ["", "", ""];
}

buttonDelete.onclick = () =>{
    const allDiv = document.getElementsByClassName("table");
    for (let i = allDiv.length - 1; i > -1; i--) {
        allDiv[i].remove();
    }
}

// (Додатковачастина для завдання)