// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");
  //console.log(`value is ${quantity.value}`)
  //console.log(price)
  //console.log (quantity)
  let subTotal = price.innerText * quantity.value;

  let displayedSubTotal = product.querySelector(".subtotal span");
  displayedSubTotal.innerText = Number(subTotal);
  return Number(subTotal);
  //console.log(subTotal)
  //console.log(displayedSubTotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test
  //DOM Nodes: 1rst row: Products
  //updateSubtotal()

  // ITERATION 2
  let allProducts = document.querySelectorAll(".product");
  allProducts.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  let total = 0;
  allProducts.forEach((product) => {
    total = total + updateSubtotal(product);
  });

  //document.querySelector('#"total-value" span').innerText
  let totalPrice = document.querySelector("#total-value span");
  totalPrice.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
