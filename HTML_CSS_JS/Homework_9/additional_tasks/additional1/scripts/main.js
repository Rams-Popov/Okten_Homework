// - Дано натуральное число n. Выведите все числа от 1 до n.
let cycleToNumber = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

cycleToNumber(10);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.

let rangeOfTwoNumber = (a, b) =>{
    if (a < b){
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }else if(a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }else {
        console.log("Числа рівні")
    }
}

rangeOfTwoNumber(6,2);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// arr1 = [9,8,0,4];
//
// let changeArray = (array, i) => [array[i], array[i+1]] = [array[i+1], array[i]];
//
// changeArray(arr1,2);
// console.log(arr1)



let changeArray2 = (array, i) =>{
    let some = array[i];
    array[i] = array[i+1];
    array[i+1] = some;
}

arr2 = [9,8,0,4];

changeArray2(arr2, 1);
console.log(arr2)




// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr2 = [1,0,6,0,3,0,1,2,3,4,0,0,1,0,0,0,1,0];
//
// let changeBigArray = (array) =>{
//     if (array.length > 100){
//         return "Very big array";
//     }
//     let someArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] !== 0){
//                 someArr.push(array[i]);
//             }
//     }
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === 0){
//             someArr.push(array[i]);
//         }
//     }
//     return someArr;
// }
//
// arr2 = changeBigArray(arr2);
// console.log(arr2);

// Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок остальных элементов.

let arr3 = [1,0,6,0,3,0,1,2,3,4,0,0,1,0,0,0,1,0];

let changeBigArray2 = (array) =>{
    for (let i = 0, j = 0; i < array.length; i++) {
        if(array[i] !==0){
            let some = array[i];
            array[i] = array[j];
            array[j] = some;
            j++;
        }

    }
    return array;
}

arr3 = changeBigArray2(arr3)
console.log(arr3)