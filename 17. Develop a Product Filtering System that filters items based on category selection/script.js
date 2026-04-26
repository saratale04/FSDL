function filterProducts(category) {

    // Get all products
    const items = document.querySelectorAll(".item");

    // Loop through each product
    items.forEach(item => {

        // Show all
        if (category === "all") {
            item.classList.remove("hide");
        } 
        else {
            // Show only matching category
            if (item.classList.contains(category)) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        }
    });
}