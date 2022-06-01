// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


fetch("https://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(usersArray => {
        const mainContainer = document.createElement('div');
        mainContainer.classList.add("main-container");

        for (const user of usersArray) {
            const userDiv = document.createElement('div');

            const {id, name, username, email, address, phone, website, company} = user;

            const addressDiv = document.createElement("div");
            const companyDiv = document.createElement("div");

            for (const value in address) {
                const addressP = document.createElement("p");
                if (typeof address[value] === "object"){
                    for (const valueKey in address[value]) {
                        addressP.innerHTML += `<b>${valueKey.toUpperCase()}:</b> ${address[value][valueKey]}<br>`;
                    }
                }else {
                    addressP.innerHTML += `<b>${value.toUpperCase()}:</b> ${address[value]}`;
                }
                addressDiv.appendChild(addressP);
            }

            for (const value in company) {
                const companyP = document.createElement("p");
                companyP.innerHTML += `<b>${value}:</b> ${company[value]}`;
                companyDiv.appendChild(companyP);
            }

            userDiv.innerHTML = `<h2>ID: ${id} <br>
                                     Name: ${name}<br>
                                     User Name: ${username}<br>
                                     email: ${email} </h2>`;

            userDiv.appendChild(addressDiv);

            userDiv.innerHTML += `<h3>Phone: <span>${phone}</span><br>
                                      Website: <span>${website}</span></h3>`;

            const buttonUserPosts = document.createElement("button");
            buttonUserPosts.innerText = "Posts show"

            buttonUserPosts.onclick = () => {
                if (buttonUserPosts.innerText === "Posts show") {
                    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                        .then(value => value.json())
                        .then(userPosts => {
                            const userPostsDiv = document.createElement('div');
                            userPostsDiv.setAttribute("class", `userPostsDiv posts${id}`);

                            for (const post of userPosts) {
                                const {userId, id, title, body} = post;

                                const postDiv = document.createElement("div");
                                postDiv.innerHTML = `<h4>ID: ${id}</h4>
                                                     <h4>Title:</h4> 
                                                     <p>${title}</p>`;

                                const postP = document.createElement("p");
                                postP.innerHTML = `Post: <br> ${body}`;

                                const buttonPostComments = document.createElement("button");
                                buttonPostComments.innerText = "Comments show";

                                buttonPostComments.onclick = () =>{
                                    if (buttonPostComments.innerText === "Comments show") {
                                        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                                            .then(value => value.json())
                                            .then(postComments => {
                                                const postCommentsDiv = document.createElement('div');
                                                postCommentsDiv.setAttribute("class", `postCommentsDiv comments${id}`);

                                                for (const comment of postComments) {
                                                    const {postId, id, name, email, body} = comment;

                                                    const commentDiv = document.createElement("div");
                                                    commentDiv.innerHTML = `<h4>ID: ${id}</h4>
                                                                         <h4>Name: ${name}</h4> 
                                                                         <h4>email: ${email}</h4>`;

                                                    const commentP = document.createElement("p");
                                                    commentP.innerHTML = `Comment: <br> ${body}`;

                                                    commentDiv.appendChild(commentP);
                                                    postCommentsDiv.appendChild(commentDiv);
                                                }

                                                buttonPostComments.innerText = "Comments hide";
                                                buttonPostComments.style.backgroundColor = "green";
                                                buttonPostComments.style.color = "white";
                                                postDiv.appendChild(postCommentsDiv);
                                            })
                                        } else {
                                        document.getElementsByClassName(`comments${id}`)[0].remove();
                                        buttonPostComments.innerText = "Comments show";
                                        buttonPostComments.style.backgroundColor = "orange";
                                        buttonPostComments.style.color = "#444";
                                    }
                                }

                                postDiv.append(postP, buttonPostComments);
                                userPostsDiv.append(postDiv);
                            }

                            userDiv.appendChild(userPostsDiv);
                        })
                    buttonUserPosts.innerText = "Posts hide";
                    buttonUserPosts.style.backgroundColor = "blue";
                    buttonUserPosts.style.color = "white";
                } else {
                    document.getElementsByClassName(`posts${id}`)[0].remove();
                    buttonUserPosts.innerText = "Posts show";
                    buttonUserPosts.style.backgroundColor = "orange";
                    buttonUserPosts.style.color = "#444";
                }
            }

            userDiv.append(companyDiv,buttonUserPosts);

            mainContainer.appendChild(userDiv);
        }
        document.body.appendChild(mainContainer);
    })
