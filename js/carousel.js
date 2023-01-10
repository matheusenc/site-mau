import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const allCarousel = document.querySelectorAll(".projeto-carousel");

const btnCloseCarousel = document.querySelector(".close-carousel-btn");

function openCarousel(indexClick){
    allCarousel[indexClick].style.display = "flex";
    btnCloseCarousel.style.display = "block";
    createSwipers();
    document.addEventListener("click", (event) => {
        closeCarousel(event.target.parentNode.parentNode.parentNode)
    })
    
    document.onkeydown = function (event){
        if(event.code === "Escape"){
            closeCarousel(allCarousel[indexClick])
        }
    }
    btnCloseCarousel.addEventListener("click", ()=>{
        closeCarousel(allCarousel[indexClick])
    });  
}

function closeCarousel(element){
    allCarousel.forEach((carousel) => {
        if (element == carousel) {
            btnCloseCarousel.style.display = "none";
            element.style.display = "none"
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


