const userInput = document.querySelector("textarea"),
  count = document.querySelectorAll("span");
userInput.value = "";
userInput.focus();
const [counter, subtract] = count;
const dataset = +userInput.maxLength;

function calback() {
  counter.textContent = userInput.value.length;
  subtract.textContent = dataset - userInput.value.length;
}
calback();

userInput.addEventListener("keyup", () => {
  calback();
});
