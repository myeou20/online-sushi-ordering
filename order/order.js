// order.js

// Get references to the cart elements
const cartItemsElement = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const cartCountElement = document.getElementById("cart-count");
const clearCartButton = document.getElementById("clear-cart");
const editCartButton = document.getElementById("edit-cart");
const placeOrderButton = document.getElementById("place-order");
const orderForm = document.getElementById("order-form");

// Initialize the cart
let cart = [];
let cartTotal = 0;

// Function to update the cart display
function updateCartDisplay() {
  cartItemsElement.innerHTML = ""; // Clear the previous cart items
  cartTotalElement.textContent = cartTotal.toFixed(2); // Update the cart total

  cart.forEach(item => {
    const cartItemElement = document.createElement("li");
    cartItemElement.textContent = `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
    cartItemsElement.appendChild(cartItemElement);
  });

  // Update the cart count
  cartCountElement.textContent = cart.length;
}

// Function to add an item to the cart
function addToCart(name, price) {
  let existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  cartTotal += price;
  updateCartDisplay();
}

// Function to clear the cart
function clearCart() {
  cart = [];
  cartTotal = 0;
  updateCartDisplay();
}

// Function to handle the "Edit Cart" button click
function handleEditCart() {
  // Implement any additional actions you want to perform when the "Edit Cart" button is clicked
  console.log("Edit Cart clicked");
}

// Function to handle the "Place Order" button click
function handlePlaceOrder() {
  // Implement any additional actions you want to perform when the "Place Order" button is clicked
  console.log("Place Order clicked");
  // Submit the form (this is a placeholder, you should replace with your actual form submission code)
  orderForm.submit();
}

// Event listeners for the buttons
clearCartButton.addEventListener("click", () => {
  clearCart();
});

editCartButton.addEventListener("click", () => {
  handleEditCart();
});

placeOrderButton.addEventListener("click", () => {
  handlePlaceOrder();
});

// You can also add event listeners to add items to the cart based on user interactions with the order form
// For example, when a user selects a sushi item from the form, you can call the addToCart function

// Example:
// const sushiItemName = "California Roll";
// const sushiItemPrice = 7.99;
// addToCart(sushiItemName, sushiItemPrice);
