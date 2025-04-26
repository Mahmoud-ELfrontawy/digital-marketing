
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
