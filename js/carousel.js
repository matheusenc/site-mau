import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const allCarousel = document.querySelectorAll(".projeto-carousel");
const imagesCarousel = document.querySelectorAll(".projeto-carousel img");

function openCarousel(indexClick){
    allCarousel[indexClick].style.display = "flex";
    createSwipers();
    document.addEventListener("click", (event) => {
        console.log("teste")
        closeCarousel(event.target)
    })
}

function closeCarousel(element){
    imagesCarousel.forEach(image => {
        if (element == image.parentNode.parentNode) {
            element.parentNode.parentNode.parentNode.style.display = "none"
        }
    })
}

function createSwipers(){
    var swiper = new Swiper(".swiper", {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination"
        },
        keyboard: true
    })    
}

export const carousel= {
    openCarousel,
    createSwipers
}


