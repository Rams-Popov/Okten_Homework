

const inputName = document.getElementsByName("name")[0];
const inputQuantity = document.getElementsByName("quantity")[0];
const inputPrice = document.getElementsByName("price")[0];
const inputImage = document.getElementsByName("image")[0];

const buttonSend = document.getElementById("button");

buttonSend.onclick = (e) => {
    e.preventDefault();

    if(!inputName.value || !inputQuantity.value || !inputPrice.value || !inputImage.value){
        return alert("You need write in all the fields");
    }

    const good = {name: inputName.value,
                  quantity: inputQuantity.value,
                  price: inputPrice.value,
                  image: inputImage.value
    }
    if (!localStorage.getItem("goods")) {
            localStorage.setItem("goods", JSON.stringify([good]));
        } else {
            const storageArray = JSON.parse(localStorage.getItem("goods"));

            storageArray.push(good);

            localStorage.setItem("goods", JSON.stringify(storageArray));
        }

    [inputName.value, inputQuantity.value, inputPrice.value, inputImage.value] = ["", "", "", ""];
}










