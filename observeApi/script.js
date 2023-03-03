// const el = document.createElement("div")//.classList.add("card")
// const text = document.createTextNode("js card el")

// el.appendChild(text)
// // container.appendChild(el)
// el.classList.add("card")
// console.log(el.parentElement)
const html = `<div class="card">js cards</div>`


const card = document.getElementsByClassName("card")
const container = document.querySelector(".container")
const callBack = (entries) =>{
    entries.forEach(element => {
        //  if(!element.isIntersecting){
        //     return
        // };
        
        element.target.classList.toggle("transform", element.isIntersecting)
        // observerApi.unobserve(element.target)
       console.log(element.target)
    });
}

const observerApi = new IntersectionObserver(callBack,{
    root:null,
    threshold:0.1,
    rootMargin:"-50px"
})
// const [...cards] = card
// cards.forEach(el=>{
//     observerApi.observe(el)
// })

const el = document.createElement("div")//.classList.add("card")
const text = document.createTextNode("js card doc")

el.appendChild(text)
container.appendChild(el)
el.classList.add("card")
console.log(el.parentElement)

console.log(card)

for(let i = 0; i < 5; i++){
    container.insertAdjacentHTML("beforeend", html)
}
const [...cards] = card
cards.forEach(el=>{
    observerApi.observe(el)
})
