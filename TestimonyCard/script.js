const image = document.querySelector("img"),
content = document.querySelector("p"),
Name = document.querySelector("h3")

const data = [{
    img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text:"Not able to tell you how happy I am with tech. It really saves me time and effort. tech is exactly what our business has been lacking. It's incredible. Great job, I will definitely be ordering again!",
    autor:"- Brant T."
},{
    img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text:"After using tech my business skyrocketed! I am so pleased with this product. If you aren't sure, always go for tech. Dude, your stuff is the bomb!",
    autor:"- Bryn E."
},{
    img:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text:"I STRONGLY recommend tech to EVERYONE interested in running a successful online business! It's really wonderful.",
    autor:"- Lotte W."
},{
    img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    text:"If you want real marketing that works and effective implementation - tech's got you covered. We've seen amazing results already. I use tech often.",
    autor:"- Jeniece A."
},{
    img:"https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    text:"Tech is both attractive and highly adaptable. The service was excellent. Thank you for making it painless, pleasant and most of all hassle free! Tech is the most valuable business resource we have EVER purchased.",
    autor:"- Con O."
},{
    img:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text:"The service was excellent. Tech has got everything I need. The best on the net! After using tech my business skyrocketed!",
    autor:"- Hazel S"
}
]
let counter =0
const testimonys = function(){
    const {img, text,autor} = data[counter]
    image.src=img
    content.textContent =text
    Name.textContent = autor
    counter++
    if(counter === data.length){
        counter=0
    }
}

testimonys()
setInterval(testimonys,3000)