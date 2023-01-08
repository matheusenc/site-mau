import { carousel } from "./carousel.js"

const buttonsMaisImagens = document.querySelectorAll("[data-MaisImagens]");
const imagesProjects = document.querySelectorAll(".projeto-img img");


buttonsMaisImagens.forEach((button, index) => {
    button.addEventListener('click', ()=>{
        carousel.openCarousel(index)
    })
})

imagesProjects.forEach((button, index) => {
    button.addEventListener('click', ()=>{
        carousel.openCarousel(index)
    })
})

