const wrapper = document.querySelector(".wrapper")
const prev = document.querySelector(".fa-angles-left")
const next = document.querySelector(".fa-angles-right")

// wrapper.style.translate='-1000px'

let index = 0

next.addEventListener("click", ()=>{
    index +=500
   if(index >4000){
    index=0
   }
    wrapper.style.translate=-index +"px"
})


prev.addEventListener("click", ()=>{
    index -=500
    if(index <0){
        index=4000
       }
    wrapper.style.translate=-index +"px"
})

