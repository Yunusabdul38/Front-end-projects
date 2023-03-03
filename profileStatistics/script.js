// document.addEventListener("DOMContentLoaded", (e)=>{
//     console.log("loaded")
//     console.log(e)
// })
const counter = document.querySelectorAll(".num");
const [num1, num2, num3, num4] = counter;
let [count1, count2, count3, count4] = [0, 0, 0,0];

function Experience() {
  num1.textContent = count1;
  count1++
  const id = +num1.dataset.ceil;   
  if (count1 > id) {
    clearInterval(timer1);
  }
  
}
function project() {
  num2.textContent = count2;
  count2++
  const id = +num2.dataset.ceil;   
  if (count2 > id) {
    clearInterval(timer2);
  }
  
}
function tools() {
  num3.textContent = count3;
  count3++
  const id = +num3.dataset.ceil;   
  if (count3 > id) {
    clearInterval(timer3);
  }
  
}

function content() {
  num4.textContent = count4;
  count4++
  const id = +num4.dataset.ceil;   
  if (count4 > id) {
    clearInterval(timer4);
  } 
}
const timer1 = setInterval(Experience,10)
const timer2 = setInterval(project,10)
const timer3 = setInterval(tools,10)
const timer4 = setInterval(content,10)
