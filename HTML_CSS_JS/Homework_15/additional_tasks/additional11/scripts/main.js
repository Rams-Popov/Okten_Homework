// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку list.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

const ownDiv = document.createElement("div");
ownDiv.classList.add("users");

const div = document.createElement("div");
const p = document.createElement("p");
const button = document.createElement("button");

for (const user of users) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");
    p.classList.add("user");
    p.innerText = `Name: ${user.name}
                   Age: ${user.age}
                   Status: ${user.status}`;

    button.classList.add("btn");
    button.innerText = "My Favorite"

    div.append(p, button);
    ownDiv.appendChild(div);

}

document.body.appendChild(ownDiv);

const arrayButtons = document.getElementsByTagName("button");

for (let i = 0; i < arrayButtons.length; i++) {
    console.log()
    arrayButtons[i].addEventListener("click", () => {
        console.log(i)
        const user = users[i];

        if (!localStorage.getItem("favorites")) {
            localStorage.setItem("favorites", JSON.stringify([user]));
        } else {
            const storageArray = JSON.parse(localStorage.getItem("favorites"));

            storageArray.push(user);

            localStorage.setItem("favorites", JSON.stringify(storageArray));
        }
    })
}

const favorites = document.createElement("a");

favorites.innerText = "Favorites Users";
favorites.href = "favorites.html";

document.body.appendChild(favorites);

