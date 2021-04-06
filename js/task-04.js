var counter = 0;
var counterValue = document.getElementById("value");
document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", handleDecrementBtnClick);
document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", handleIncrementBtnClick);
function handleDecrementBtnClick() {
  console.log("click");
  counter -= 1;
  counterValue.textContent = counter;
}
function handleIncrementBtnClick() {
  console.log("click");
  counter += 1;
  counterValue.textContent = counter;
}
