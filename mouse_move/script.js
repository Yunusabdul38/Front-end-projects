const mouseY = document.querySelector(".mouseY")
const mouseX = document.querySelector(".mouseX")

document.addEventListener("mousemove", e =>{
    console.log(e)

    mouseX.textContent=e.clientX
    mouseY.textContent=e.clientY
})
// let   movements =[200, 450, -400, 3000, -650, -130, 70, 1300]
// let mov = movements.some(a =>{
//     console.log(a)
//     return a > 5000*10/100
// })

// let sorted = true
// document.addEventListener("click", () =>{
//     sorted =!sorted
//     if(sorted){
//         console.log(sort)
//     }
//     console.log(sorted)
// })

// let sort = movements.sort((a,b)=> a-b)
// console.log(mov,sort)