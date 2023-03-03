const steps = document.querySelectorAll("li")
const content = document.querySelectorAll(".contents")
console.log(content)
for(let i = 0; i < steps.length; i++){

    steps[i].addEventListener("click", (e)=>{

        const id = e.target.dataset.id
        if(id){
            steps.forEach((element,index) =>{
                content[index].classList.remove("live")
                element.classList.remove("live")
            })

        }
        e.target.classList.add("live")
        const elements = document.getElementById(id)
        elements.classList.add("live")
    })
}