
const favoritesUsers = JSON.parse(localStorage.getItem("favorites"));


const ownDiv = document.createElement("div");
ownDiv.classList.add("users");

const div = document.createElement("div");
const p = document.createElement("p");

for (const user of favoritesUsers) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.classList.add("user");
    p.innerText = `Name: ${user.name}
                   Age: ${user.age}
                   Status: ${user.status}`;


    div.appendChild(p);
    ownDiv.appendChild(div);
}

document.body.appendChild(ownDiv);