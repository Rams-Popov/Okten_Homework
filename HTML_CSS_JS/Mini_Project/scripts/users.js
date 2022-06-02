const userInfo = JSON.parse(localStorage.getItem("user"));

const userMainDiv = document.createElement('div');
userMainDiv.setAttribute("class", "users-main-container");

const userDiv = document.createElement('div');
userDiv.setAttribute("class", "user-div")

const {id, name, username, email, address, phone, website, company} = userInfo;

const addressDiv = document.createElement("div");
const companyDiv = document.createElement("div");

addressDiv.innerHTML = `<h2>Address:</h2>`;
for (const value in address) {
    const addressP = document.createElement("p");
    if (typeof address[value] === "object"){
        for (const valueKey in address[value]) {
            addressP.innerHTML += `<b>${valueKey.toUpperCase()}:</b> <span>${address[value][valueKey]}</span><br>`;
        }
    }else {
        addressP.innerHTML += `<b>${value.toUpperCase()}:</b> <span>${address[value]}</span>`;
    }
    addressDiv.appendChild(addressP);
}

companyDiv.innerHTML = `<h3>Company:</h3>`
for (const value in company) {
    const companyP = document.createElement("p");
    companyP.innerHTML += `<b>${value}:</b> <span>${company[value]}</span>`;
    companyDiv.appendChild(companyP);
}

userDiv.innerHTML = `<h2>ID: <span>${id}</span><br>
                     Name: <span>${name}</span><br>
                     User Name: <span>${username}</span><br>
                     email: <span>${email}</span></h2>`;

userDiv.appendChild(addressDiv);

userDiv.innerHTML += `<h3>Phone: <span>${phone}</span><br>
                          Website: <span>${website}</span></h3>`;

userDiv.appendChild(companyDiv);

const buttonPosts = document.createElement("button");
buttonPosts.setAttribute("class", "btn-posts");
buttonPosts.innerText = "Posts show";

const postsDiv = document.createElement("div");
postsDiv.classList.add("posts-titles-container-hide")

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(value => value.json())
    .then(userPosts => {
        for (const post of userPosts) {
            const titlePostDiv = document.createElement("div");

            setInterval(() => {
                const r = Math.round( Math.random() * 245);
                const g = Math.round( Math.random() * 245);
                const b = Math.round( Math.random() * 245);
                titlePostDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }, 2000)

            // const r = Math.round( Math.random() * 245);
            // const g = Math.round( Math.random() * 245);
            // const b = Math.round( Math.random() * 245);

            // titlePostDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            const titlePostH4 = document.createElement("h4");
            titlePostH4.innerHTML = `Title:<br> <span>${post.title}</span>`;

            const buttonPostDetails = document.createElement("button");
            buttonPostDetails.innerText = "Post Details";

            buttonPostDetails.onclick = () =>{
                localStorage.setItem("post", JSON.stringify(post));
                document.location = "post-details.html";
            }

            titlePostDiv.append(titlePostH4, buttonPostDetails);
            postsDiv.appendChild(titlePostDiv);
        }
    })

buttonPosts.onclick = () => {
    if(buttonPosts.innerText === "Posts show"){
        buttonPosts.innerText = "Posts hide";
    } else {
        buttonPosts.innerText = "Posts show";
    }
    postsDiv.classList.toggle("posts-titles-container-show");
}

userMainDiv.append(userDiv, buttonPosts, postsDiv);

document.body.appendChild(userMainDiv);