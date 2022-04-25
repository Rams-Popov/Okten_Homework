
function chengeString() {
    for (let argument of arguments) {
        argument = +argument;
    }
}

const PI = 3.14;



function rectangleArea(a, b) {
    chengeString(a, b);
    return a * b;
}

rectangleArea(2,45);

function circleArea(radius) {
    chengeString(radius);
    return PI * radius ** 2;
}

circleArea(34);

function cylinderArea(height, radius) {
    chengeString(height, radius);
    return 2 * PI * radius * height;
}

cylinderArea(2,45);

function unpackingArray(array) {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

unpackingArray([2,3,4,5,6,7])


function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

paragraph("some Text");


function listThreeElements(textElements) {
    document.write(`<ul>`);
    document.write(`<li>${textElements}</li>`);
    document.write(`<li>${textElements}</li>`);
    document.write(`<li>${textElements}</li>`);
    document.write(`</ul>`);
}

listThreeElements("some Text");


function listElements(textElements, quantityLine) {
    document.write(`<ul>`);
    for (let i = 0; i < +quantityLine; i++) {
        document.write(`<li>${textElements}</li>`);
    }
    document.write(`</ul>`);
}

listElements("some Text", 10)


function listWithArray(array) {
    document.write(`<ul>`);
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

listWithArray([2,5,354,654,32,1,45]);


function objectOutput(array) {
    for (let arrayElements of array) {
        document.write(`<div>`);
        document.write(`<ul>`);

        for (let arrayElement in arrayElements) {
            console.log(arrayElements);
            document.write(`<li>${arrayElements[arrayElement]}</li>`);
        }
        document.write(`</ul>`);
        document.write(`</div>`);
    }
}

let users = [
    {id: 'vasya', name: 31, age: false},
    {id: 'petya', name: 30, age: true},
    {id: 'kolya', name: 29, age: true},
    {id: 'olya', name: 28, age: false},
];

objectOutput(users);


function minNumber(array) {
    let minNum = array[0];
    for (let arrayElement of array) {
        if (minNum > arrayElement){
            minNum = arrayElement;
        }
    }
    return minNum;
}

minNumber([2,5,354,654,32,1,45]);


function sumNumber(array) {
    let sumNum = 0;
    for (let arrayElement of array) {
        sumNum += arrayElement
    }
    return sumNum;
}

sumNumber([2,5,32,1,45]);
