let array1 = [];

// for (let i = 2, j = 0; i <= 100; i += 2, j++) {
// 	array1[j] = i;
// }

// for (let i = 1, j = 0; i <= 100; i += 2, j++) {
// 	array1[j] = i;
// }

// for (leti = 0; i < 20; i++){
//     array1[i] = Math.random();
// }



for (let i = 0; i < 20; i++){
    array1[i] = Math.floor(Math.random() * (732 - 8) + 8);
}
console.log(array1)

// for (let i = 0; i < array1.length; i+=3){
//     console.log(array1[i])
// }


// for (let i = 0; i < array1.length; i+=3){
//     if (array1[i] % 2 == 0){
//         console.log(array1[i])
//     }

// }



// let array2 = [];
// for (let i = 0, j = 0; i < array1.length; i+=3){
//     if (array1[i] % 2 == 0){
//         array2[j] = array1[i];
//         console.log(array1[i])
//         j++
//     }

// }



// for (let i = 0; i < array1.length; i++){
//     if (array1[i+1] % 2 == 0){
//         console.log(array1[i])
//     }

// }





// let array3 = [100,250,50,168,120,345,188];
// let sum = 0;

// for (let i = 0; i < array3.length; i++){
//     sum += array3[i];
// }
// console.log(sum);



// let array4 = [];

// for (let i = 0; i < array1.length; i++){
//     array4[i] = array1[i] * 5
// }


// let array5 = [1, "qwerty", true, 5, false, 567, "items", "price", true, 1234, false, "name", "user", 75, true];
// let array6 = [];

// for (let i = 0, j = 0; i < array5.length; i++){
//     if (typeof array5[i] == "number"){
//         array6[j] = array5[i];
//         j++;
//     }
// }





// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// let usersWithCities = [];

// for (let i = 0; i < usersWithId.length; i++){
//     usersWithCities[i] = usersWithId[i]
//     for (let j = 0; j < citiesWithId.length; j++){
//         if (citiesWithId[j].user_id == usersWithCities[i].id){
//             usersWithCities[i].aaddress = citiesWithId[j]
//         }
//     }
// }
// console.log(usersWithCities)





// let array7 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67, 165];
// for(let i = 0; i < array7.length; i++){
//     if (array7[i] % 2 == 0){
//         console.log(array7[i]);
//     }
// }


// let array7 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67, 165];
// let array8 = [];
// for(let i = 0; i < array7.length; i++){
//     array8[i] = array7[i];
// }




let abcList = [ 'a', 'b', 'c'];
let abcString = "";

// for (let i = 0; i < abcList.length; i++){
//     abcString += abcList[i];
// }


// x = 0;
// while (x < abcList.length){
//     abcString += abcList[x];
//     x++;
// }


// for (leter of abcList){
//     abcString += leter;
// }