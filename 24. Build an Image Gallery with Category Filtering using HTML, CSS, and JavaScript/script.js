function filterImages(category) {

    // Step 1: Select all images (elements having class "image")
    const images = document.querySelectorAll(".image");

    // Step 2: Loop through each image
    images.forEach(img => {

        // Step 3: If user selects "all"
        if (category === "all") {

            // Remove "hide" class → show all images
            img.classList.remove("hide");

        } else {

            // Step 4: Check if image belongs to selected category
            if (img.classList.contains(category)) {

                // If yes → show image
                img.classList.remove("hide");

            } else {

                // If not → hide image
                img.classList.add("hide");
            }
        }
    });
}