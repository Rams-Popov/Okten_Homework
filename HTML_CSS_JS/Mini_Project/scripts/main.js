//
// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch("https://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(usersArray => {
        const mainContainer = document.createElement('div');
        mainContainer.classList.add("main-container");

        for (const user of usersArray) {
            const userDiv = document.createElement('div');

            const r = Math.round( Math.random() * 245);
            const g = Math.round( Math.random() * 245);
            const b = Math.round( Math.random() * 245);

            userDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            const userDivH2 = document.createElement("h2");
            userDivH2.innerHTML = `ID: ${user.id}<br>Name: ${user.name}`;
            // userDiv.innerHTML = `ID: ${user.id}<br>Name: ${user.name}`;


            const buttonUser = document.createElement("button");
            buttonUser.innerText = "Open User";

            buttonUser.onclick = () => {
                localStorage.setItem("user", JSON.stringify(user));
                document.location = "user-details.html";
            }

            userDiv.append(userDivH2, buttonUser);
            mainContainer.appendChild(userDiv);
        }

        document.body.appendChild(mainContainer);
    })

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
