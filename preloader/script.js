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
function calback(){
    img.style.display="block"
    sendBtn.style.display="none"
    emailInput.style.display="none"

    setTimeout(()=>{
        img.style.display="none"
        sendBtn.style.display="block"
        emailInput.style.display="block"
        alert("information successfully sent")
    },3000)
}
emailInput.focus()
sendBtn.addEventListener("click",e=>{
    e.preventDefault()
    calback()
})
emailInput.addEventListener("submit",(e)=>{
    e.preventDefault()
   calback()
})

