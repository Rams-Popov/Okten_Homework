
const ownDiv = document.createElement("div");
ownDiv.classList.add("goods");

if(localStorage.getItem("goods")){
    const allGoods = JSON.parse(localStorage.getItem("goods"));
    let i = 0;
    for (const good of allGoods) {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const img = document.createElement("img");
        const buttonDel = document.createElement("button");

        img.src = good.image;
        img.classList.add("goodsImg");

        p.classList.add("good");
        p.innerText = ` Name: ${good.name}
                    Q-ty: ${good.quantity}
                    Price: ${good.price}$`;

        buttonDel.innerHTML = "Del";
        buttonDel.classList.add("btn", "btnOneDelete");

        buttonDel.addEventListener("click", () =>{
            localStorage.setItem("goods", JSON.stringify(allGoods.filter(value => value !== good)));
            location.reload();
        });

        div.append(img, p, buttonDel);
        ownDiv.appendChild(div);
        i++;
    }
}


const buttonDelAllGoods = document.createElement("button");
buttonDelAllGoods.innerText = "Delete All";
buttonDelAllGoods.classList.add("btn", "btnDelete");

buttonDelAllGoods.onclick = () =>{
    localStorage.removeItem("goods");
    location.reload();
}

document.body.append(ownDiv, buttonDelAllGoods);