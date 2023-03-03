const xmark = document.querySelector(".fa-xmark")
const bars = document.querySelector(".fa-bars")
const nav = document.querySelector("nav")
const article = document.querySelector("p")

xmark.addEventListener("click", ()=>{
    nav.classList.remove("bars")
    article.classList.remove("p")
})
bars.addEventListener("click",()=>{
    nav.classList.add("bars")
    article.classList.add("p")
})

