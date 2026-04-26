const list = document.getElementById("list"); // Get the container element that holds the list items
let draggingItem = null; // Variable to keep track of the currently dragged item

// Add drag events to each item
list.querySelectorAll("li").forEach(item => {

  // Start dragging
  item.addEventListener("dragstart", () => {
    draggingItem = item; // Store the item being dragged
    item.classList.add("dragging"); // Add a class for styling (e.g., opacity or highlight)
  });

  // End dragging
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging"); // Remove the dragging style when drag ends
  });

  // Drag over other items
  item.addEventListener("dragover", (e) => {
    e.preventDefault(); // Necessary to allow dropping

    const afterElement = getDragAfterElement(list, e.clientY); // Find the element after which the dragged item should be placed

    if (afterElement == null) {
      list.appendChild(draggingItem); // If no element found, move item to the end
    } else {
      list.insertBefore(draggingItem, afterElement); // Insert dragged item before the found element
    }
  });
});

// Function to find correct position
function getDragAfterElement(container, y) {
  const elements = [...container.querySelectorAll("li:not(.dragging)")]; // Select all list items except the one being dragged

  return elements.reduce((closest, child) => {
    const box = child.getBoundingClientRect(); // Get position and size of current item
    const offset = y - box.top - box.height / 2; // Calculate distance from cursor to the middle of the item

    // Check if the current item is above the cursor and closer than previous closest
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }; // Update closest element
    } else {
      return closest; // Keep previous closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element; // Start with a very low offset and return the matched element
}