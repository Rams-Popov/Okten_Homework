
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


function circleArea(radius) {
    chengeString(radius);
    return PI * radius ** 2;
}


function cylinderArea(height, radius) {
    chengeString(height, radius);
    return 2 * PI * radius * height;
}


function unpackingArray(array) {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}


function paragraph(text) {
    document.write(`<p>${text}</p>`);
}


function listThreeElements(textElements) {
    document.write(`<ul>`);
    document.write(`<li>${textElements}</li>`);
    document.write(`<li>${textElements}</li>`);
    document.write(`<li>${textElements}</li>`);
    document.write(`</ul>`);
}


function listElements(textElements, quantityLine) {
    document.write(`<ul>`);
    for (let i = 0; i < +quantityLine; i++) {
        document.write(`<li>${textElements}</li>`);
    }
    document.write(`</ul>`);
}


function listWithArray(array) {
    document.write(`<ul>`);
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}


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


function minNumber(array) {
    let minNum = array[0];
    for (let arrayElement of array) {
        if (minNum > arrayElement){
            minNum = arrayElement;
        }
    }
    return minNum;
}


function sumNumber(array) {
    let sumNum = 0;
    for (let arrayElement of array) {
        sumNum += arrayElement
    }
    return sumNum;
}
