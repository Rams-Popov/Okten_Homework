
function changeString() {
    for (let argument of arguments) {
        argument = +argument;
    }
}

function minNumberWithThree(num1, num2, num3) {
    changeString(num1,num2,num3);

    if (num1 <= num2 && num1 <= num3){
        return num1;
    } else if(num2 <= num1 && num2 <= num3){
        return num2;
    } else if(num3 <= num1 && num3 <= num2){
        return num3;
    } else {
        return NaN;
    }
}

minNumberWithThree(3,2,1);

function maxNumberWithThree(num1, num2, num3) {
    changeString(num1,num2,num3);

    if (num1 >= num2 && num1 >= num3){
        return num1;
    } else if(num2 >= num1 && num2 >= num3){
        return num2;
    } else if(num3 >= num1 && num3 >= num2){
        return num3;
    } else {
        return NaN;
    }
}

maxNumberWithThree(5,65,-20);

function maxNumberWithArray(array) {
    let maxNum = array[0];
    for (let arrayElement of array) {
        if (maxNum > arrayElement){
            maxNum = arrayElement;
        }
    }
    return maxNum;
}

maxNumberWithArray([2,5,354,654,32,1,45]);

function minAndMax() {
    let maxNum = arguments[0];
    let minNum = arguments[0];
    for (let argument of arguments) {
        if (maxNum < argument){
            maxNum = argument;
        }
        if (minNum > argument){
            minNum = argument;
        }
    }
    console.log(maxNum);
    return minNum;
}

minAndMax(2,5,354,654,32,1,45);

function randomTenNumbers() {
    let array = []
    for (let i = 0; i < 10; i++) {
        array.push(Math.round(Math.random()*100))
    }
    console.log(array);
    return array;
}

randomTenNumbers();

function randomTenNumbersWithMaxLimit(maxLimit) {
    let array = []
    for (let i = 0; i < 10; i++) {
        array.push(Math.round(Math.random()*maxLimit))
    }
    return array;
}

randomTenNumbersWithMaxLimit(856);

function arrayInversion(array) {
    // return array.reverse();
    let reverseArray = []
    for (let i = array.length-1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
}

arrayInversion([2,5,354,654,32,1,45]);


function concatenation() {
    let line = "";
    for (let argument of arguments) {
        line += argument;
    }
    return line;
}

concatenation("first", "second", 3);

function addArrays(array1, array2) {
    let addArray = [];
    for (let i = 0; i < array1.length; i++){
        addArray.push(array1[i] + array2[i])
    }
    return addArray;
}

addArrays([2,3,4], [5,8,3]);




let arrayWithObject = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function keysWithArray(array) {
    let arrayKeys = [];
    for (let arrayElement of array) {
        for (let arrayElementKey in arrayElement) {
            // console.log(arrayElementKey);
            arrayKeys.push(arrayElementKey);
        }
    }
    return arrayKeys;
}

keysWithArray(arrayWithObject);

function valuesKeysWithArray(array) {
    let arrayValues = [];
    for (let arrayElement of array) {
        for (let arrayElementKey in arrayElement) {
            arrayValues.push(arrayElement[arrayElementKey]);
        }
    }
    return arrayValues;
}

valuesKeysWithArray(arrayWithObject);

