const postInfo = JSON.parse(localStorage.getItem("post"));

const postMainDiv = document.createElement('div');
postMainDiv.setAttribute("class", "post-main-container");

const {userId, id, title, body} = postInfo;

const postDiv = document.createElement('div');
postDiv.setAttribute("class", "post-container");

postDiv.innerHTML = `<h2>User ID: <span>${userId}</span><br>
                         ID: <span>${id}</span><br>
                         Title: <span>${title}</span><br>
                         Post: <br><span>${body}</span></h2>`;


const commentsDiv = document.createElement("div");
commentsDiv.classList.add("comments-container")

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(value => value.json())
    .then((commentsArray => {
        for (const comment of commentsArray) {
            const commentDiv = document.createElement("div");


            const {postId, id, name, email, body} = comment;

            commentDiv.innerHTML = `<h3>Post Id: <span>${postId}</span></h3>
                                    <h3>Id: <span>${id}</span></h3>
                                    <h3>Name: <span>${name}</span></h3>
                                    <h3>Email: <span class="email">${email}</span></h3>
                                    <p>Comment:<br><span>${body}</span></p>`;

            commentsDiv.appendChild(commentDiv);
        }
    }))





postMainDiv.append(postDiv, commentsDiv);
document.body.appendChild(postMainDiv);