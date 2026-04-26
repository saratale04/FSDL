/*
========================================================
PRODUCT GALLERY - JAVASCRIPT FILE
========================================================

📌 HOW TO RUN:

1. Create folder → product-gallery
2. Add files:
   - index.html
   - style.css
   - script.js

3. Open index.html in browser

4. Products will display automatically
5. Click "Buy Now" → alert will show

========================================================

📌 LOGIC:

- We create JSON data (array of products)
- Loop through products
- Create cards dynamically using JavaScript
- Add "Buy Now" button for interaction

========================================================
*/


// Step 1: Create JSON data (product list)
let products = [
    {
        name: "Laptop",
        price: "₹50000",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Mobile",
        price: "₹20000",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Headphones",
        price: "₹3000",
        image: "https://via.placeholder.com/200"
    }
];


// Step 2: Get container
let container = document.getElementById("productContainer");


// Step 3: Loop through products
products.forEach(function (product) {

    // Create card div
    let card = document.createElement("div");
    card.className = "card";

    // Add HTML inside card
    card.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="buyProduct('${product.name}')">Buy Now</button>
    `;

    // Add card to container
    container.appendChild(card);
});


// Step 4: Buy button function
function buyProduct(name) {

    // Show alert when user clicks
    alert("You selected: " + name);
}