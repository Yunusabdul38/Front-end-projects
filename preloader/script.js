"use strict";
const emailInput = document.querySelector("#email"),
  sendBtn = document.querySelector("button"),
  img = document.querySelector("img")

emailInput.addEventListener("keyup", function () {
  if (emailInput.value) {
    sendBtn.classList.remove("hidden");
  } else {
    sendBtn.classList.add("hidden");
  }
});

emailInput.addEventListener("submit",(e)=>{
    e.preventDefault()
    img.style.display="block"
    console.log(img)
})