
// window.addEventListener('scroll', () => {
// const scrollY = window.scrollY;
// console.log(`Scrolled: ${scrollY}px`);
// });

// window.onscroll = function(){

//     if(window.scrollY >= 5500){
//         btn.style.display = "flex";

//     }else{
//         btn.style.display = "none";
//     }
// }


const btn = document.querySelector(".Our-Working .list1 .open-icon .close-icon");
const cards = document.querySelectorAll(".Our-Working .lists-ourWorking .list1");

cards.forEach((card) => {
    const btn = card.querySelector(".open-icon");

    btn.addEventListener("click", function () {
        card.classList.toggle("active");
    });
});

// bulllets active

const bullets = document.querySelectorAll(".Testimonials .testimonials-cards .buttons .bullets i");
const prev = document.querySelector(".Testimonials .testimonials-cards .buttons .swiper-button-prev i");
const next = document.querySelector(".Testimonials .testimonials-cards .buttons .swiper-button-next i");

function checkButtons() {
    let currentIndex = [...bullets].findIndex(b => b.classList.contains("active"));

    if (currentIndex === 0) {
        prev.classList.add("none");
    } else {
        prev.classList.remove("none");
    }

    if (currentIndex === bullets.length - 1) {
        next.classList.add("none");
    } else {
        next.classList.remove("none");
    }
}

function activeBullet() {
    bullets.forEach(bullet => {
        bullet.addEventListener("click", (e) => {
            bullets.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");

            checkButtons(); 
        });
    });
}

function NextAndPrev() {
    next.addEventListener("click", () => {
        let currentIndex = [...bullets].findIndex(b => b.classList.contains("active"));
        if (currentIndex < bullets.length - 1) {
            bullets.forEach(b => b.classList.remove("active"));
            bullets[currentIndex + 1].classList.add("active");

            checkButtons(); 
        }
    });

    prev.addEventListener("click", () => {
        let currentIndex = [...bullets].findIndex(b => b.classList.contains("active"));
        if (currentIndex > 0) {
            bullets.forEach(b => b.classList.remove("active"));
            bullets[currentIndex - 1].classList.add("active");

            checkButtons(); 
        }
    });
}

activeBullet();
NextAndPrev();
checkButtons(); 


// contact-us bullet active

let dots = document.querySelectorAll(".dot-span")

function alldots() {
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            dots.forEach(b => b.classList.remove("dot"));
            e.currentTarget.classList.add("dot");
        });
    });
}
alldots()