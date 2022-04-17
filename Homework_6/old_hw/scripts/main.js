

let colorTrafficLights= prompt("Якого кольору світлофор?");
let isRoadClear = prompt("Чи є машини на дорозі? (Так/Ні)");

colorTrafficLights = colorTrafficLights.toLowerCase();
isRoadClear = isRoadClear.toLowerCase();

console.log(isRoadClear);


if (isRoadClear !== "так" && isRoadClear !== "ні"){
    isRoadClear = prompt("Так важко написати Так або Ні?");
}

if (colorTrafficLights === "зелений" && isRoadClear === "ні"){
        alert("Іди спокійно")
    }
else if (colorTrafficLights === "зелений" && isRoadClear === "так"){
        alert("Почекай поки проїдуть СВИНОСОБАКИ!")
    }
else if (colorTrafficLights === "жовтий" && isRoadClear === "ні"){
    alert("Трохи почекай")
}
else if (colorTrafficLights === "жовтий" && isRoadClear === "так"){
    alert("Чекай")
}
else if (colorTrafficLights === "червоний" && isRoadClear === "ні"){
    alert("Стій і чекай всерівно!")
}
else if (colorTrafficLights === "червоний" && isRoadClear === "так"){
    alert("Стій і чекай!")
}

else {
    alert("Молодець, що пишеш білебірдятіну, роби шо хочеш")
}



let a = prompt("Веди перше число")
let b = prompt("Веди друге число")
let c = prompt("Веди третє число")

a = +a;
b = +b;
c = +c;

if (a <= b && b <= c){
    alert(`Ось твої числа в порядку зростання ${a} ${b} ${c}`);
} else if (a <= c && c <= b){
    alert(`Ось твої числа в порядку зростання ${a} ${c} ${b}`);
} else if (b <= a && a <= c){
    alert(`Ось твої числа в порядку зростання ${b} ${a} ${c}`);
} else if (b <= c && c <= a){
    alert(`Ось твої числа в порядку зростання ${b} ${c} ${a}`);
} else if (c <= a && a <= b){
    alert(`Ось твої числа в порядку зростання ${c} ${a} ${b}`);
} else if (c <= b && b <= a){
    alert(`Ось твої числа в порядку зростання ${c} ${b} ${a}`);
} else{
    alert("Напевно ти ввів не числа!")
}