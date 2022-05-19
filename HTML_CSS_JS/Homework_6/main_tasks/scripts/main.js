
let x = -3;
if (x === 0){
    console.log("Невірно")
} else {
    console.log("Вірно")
}

let time = 49;

if (time >= 0 && time <= 14){
    console.log("Перша четверть")
} else if (time >= 15 && time <= 29){
    console.log("Друга четверть")
} else if (time >= 30 && time <= 44){
    console.log("Третя четверть")
} else if (time >= 45 && time <= 59){
    console.log("Четверта четверть")
} else {
    console.log("Введене число не в діапазоні")
}

let day = 25;

if (day >= 1 && day <= 10){
    console.log("Перша декада")
} else if (day >= 11 && day <= 20){
    console.log("Друга декада")
} else if (day >= 21 && day <= 31){
    console.log("Третя декада")
} else {
    console.log("Введене число не в діапазоні")
}

// let weekDay = prompt("Ведіть день тижня (1-7)");

switch (prompt("Ведіть день тижня (1-7)")){
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("В тижні тільки 7 днів");
}


let number1 = 25;
let number2 = 25;

console.log(number1 === number2 ? `Числа рівні ${number1}` : number1 > number2 ? number1 : number2);
