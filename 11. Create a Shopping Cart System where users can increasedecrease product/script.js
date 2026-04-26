let prices = [50, 30, 40];
let quantities = [1, 1, 1];

function changeQty(index, change) {
  quantities[index] += change;

  // Allow quantity to go to 0 (but not negative)
  if (quantities[index] < 0) quantities[index] = 0;

  document.getElementById("qty" + index).innerText = quantities[index];

  updateTotal();
}

function updateTotal() {
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total += prices[i] * quantities[i];
  }

  document.getElementById("total").innerText = total;
}