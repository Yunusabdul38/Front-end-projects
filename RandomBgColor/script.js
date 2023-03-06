const container = document.querySelector(".container");
const html = ` <div class="box">
<h1></h1>
</div>`;
for(let i = 0; i<=53;i++){
    container.insertAdjacentHTML("beforeend",html)
}
const box = document.getElementsByClassName("box")
const text = document.querySelectorAll("h1");

function randomNum() {
  let random = Math.trunc(Math.random() * 225) + 1;
  return random;
}

[...box].forEach((el) => {
  el.style.backgroundColor = `RGB(${randomNum()},${randomNum()},${randomNum()})`;
  el.querySelector("h1").innerText = `${el.style.backgroundColor}`;
});

//hunger;
function getMaskedValue(valueToMask, propName) {
  if (propName === "name") {
    return "*".repeat(valueToMask.length);
  }
  if (propName === "authorization" || propName === "Authorization") {
    const propValue = valueToMask.split(" ");
    if (propValue.length < 2) {
      return propValue.at(0);
    }
    if (propValue.length >= 2) {
      return `${propValue.at(0)} ${"*".repeat(propValue[1].length)}`;
    }
  }
}
console.log(getMaskedValue("kelvin", "name"));
console.log(getMaskedValue("Bearer", "name"));
console.log(getMaskedValue("yunus", "authorization"));
console.log(getMaskedValue("Bearer kelvin", "Authorization"));
console.log(getMaskedValue("Basic kelvin", "authorization"));
