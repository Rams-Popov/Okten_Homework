// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// const formOne = document.createElement("form");
// const inputName = document.createElement("input");
// const inputAge = document.createElement("input");
// const send1 = document.createElement("button");
//
// formOne.name = "form1";
// inputName.name = "name";
//
// inputAge.type = "number";
// inputAge.name = "age";
//
// send1.innerText = "Send";
//
// formOne.append(inputName, inputAge, send1);
// document.body.appendChild(formOne);
//
// send1.addEventListener("click",()=>{
//     const objectUser = {name: inputName.value, age: inputAge.value};
//     localStorage.setItem("user", JSON.stringify(objectUser));
// })


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

const formTwo = document.createElement("form");
const inputModel = document.createElement("input");
const inputType = document.createElement("input");
const inputVolume = document.createElement("input");
const send2 = document.createElement("button");

formTwo.name = "form2";
inputModel.name = "model";
inputType.name = "type";
inputVolume.name = "volume";

send2.innerText = "Send2";

formTwo.append(inputModel, inputType, inputVolume, send2);
document.body.appendChild(formTwo);


send2.addEventListener("click",()=>{
    const objectUser = {model: inputModel.value, type: inputType.value, volume: inputVolume.value};

    if(!localStorage.getItem("cars")){
        localStorage.setItem("cars", JSON.stringify([objectUser]));
    }else {
        const storageArray = JSON.parse(localStorage.getItem("cars"));

        storageArray.push(objectUser);

        localStorage.setItem("cars", JSON.stringify(storageArray));
    }
})




