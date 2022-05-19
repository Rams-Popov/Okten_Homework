
// Task 1
for (let i = 0; i < 10; i++){
    document.write("<div>Перше завдання</div>")
}

// Task 2
for (let i = 0; i < 10; i++){
    document.write(`<div>Div number ${i}</div>`)
}

// Task 3
let i = 0;
while (i < 20){
    document.write("<h1>Довільний текст</h1>")
    i++;
}

// Task 4
let x = 0;
while (x < 20){
    document.write(`<h1>Довільний текст ${x}</h1>`)
    x++;
}


// Task 5
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write("<ul>")
for (let j = 0; j < listOfItems.length; j++) {
    // let listOfItem = listOfItems[j];
    document.write(`<li>${listOfItems[j]}</li>`)
}
document.write("</ul>")



// Task 6
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write("<div class='product-cards' style='display: flex; justify-content: space-evenly'>")
for (let product of products) {
    document.write("<div class='product-card'>")
    document.write(`<h3 class="product-title" style="text-align: center">${product.title.toUpperCase()}. Price - ${product.price}</h3>`)
    document.write(`<img class="product-image" style="width: 300px" src="${product.image}" alt="">`)
    document.write("</div>")

}
document.write("</div>")