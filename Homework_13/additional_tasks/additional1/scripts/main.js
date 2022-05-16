//
// const allClasses = [];
//
// const findAllClasses = (where) =>{
//     const element = where.children;
//     for (const el of element) {
//         if (el.classList.value !== ""){
//             const validator = el.classList.value.split(" ")
//             if (typeof validator !== "string"){
//                 for (let string of validator) {
//                     if (!allClasses.find(value => value ===string)){
//                         allClasses.push(string)
//                     }
//                 }
//             }
//         }
//         if (el.children.length !== 0){
//             findAllClasses(el);
//         }
//     }
//
// }
//
// findAllClasses(document.body);
//
// console.log(allClasses);


const array = [1,2,3,[23,[1,2,3,4],[56,78,90,[12,34,456,78,[100,200,300]]],[1,2,3,4]],[45,56,687,89]];

const newArray = [];

let allArrayRecurs = (array) =>{
    for (let arrayElement of array) {
        if (typeof arrayElement === "string" || typeof arrayElement === "number"){
            newArray.push(arrayElement);
        } else{
            allArrayRecurs(arrayElement);
        }
    }
    return newArray;
}

console.log(allArrayRecurs(array));

