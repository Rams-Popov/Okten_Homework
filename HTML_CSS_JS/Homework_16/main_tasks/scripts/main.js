// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// const ownDiv = document.createElement("div");
// ownDiv.classList.add("main-container");
//
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(value => value.json())
//     .then(postsArray => {
//         for (const post of postsArray) {
//             const div = document.createElement("div");
//             div.classList.add("post");
//
//             const userId = document.createElement("div");
//             const id = document.createElement("div");
//             const title = document.createElement("div");
//             const body = document.createElement("div");
//
//             userId.innerHTML = `<b>User Id:</b> ${post.userId}`;
//             id.innerHTML = `<b>ID:</b> ${post.id}`;
//             title.innerHTML = `<b>Title:</b> ${post.title}`;
//             body.innerHTML = `<b>Post:</b> ${post.body}`;
//
//             div.append(userId, id, title, body);
//             ownDiv.appendChild(div);
//         }
//     })
//
// document.body.appendChild(ownDiv);



//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

const ownDiv2 = document.createElement("div");
ownDiv2.classList.add("main-container");

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(value => value.json())
    .then(commentsArray => {
        for (const comment of commentsArray) {
            const div = document.createElement("div");
            div.classList.add("comments");

            const postId = document.createElement("div");
            const id = document.createElement("div");
            const name = document.createElement("div");
            const email = document.createElement("div");
            const body = document.createElement("div");

            postId.innerHTML = `<b>Post Id:</b> ${comment.postId}`;
            id.innerHTML = `<b>ID:</b> ${comment.id}`;
            name.innerHTML = `<b>Name:</b> ${comment.name}`;
            email.innerHTML = `<b>email:</b> ${comment.email}`;
            body.innerHTML = `<b>Comment:</b> ${comment.body}`;

            div.append(postId, id, name, email, body);
            ownDiv2.appendChild(div);
        }
    })

document.body.appendChild(ownDiv2);






















