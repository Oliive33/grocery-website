let cart = document.querySelector(".shopping-cart");

function shopping() {
  document.querySelector("#cart-btn").addEventListener("click", () => {
    cart.classList.toggle("active");
    loginForm.classList.remove("active");
  });
}
shopping();
let loginForm = document.querySelector(".login-form");

function login() {
  document.querySelector("#login-btn").addEventListener("click", () => {
    loginForm.classList.toggle("active");
    cart.classList.remove("active");
    navbar.classList.remove("active");
  });
}
login();
