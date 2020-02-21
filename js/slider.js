window.onload = function() {

    if(window.innerWidth <= 768) {

        var mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });

    }

    if(window.innerWidth > 768) {

        for (let i = 0; i < hiddenElements.length; i++) {
            if (hiddenElements[i].classList.contains('swiper-slide')) {
                hiddenElements[i].classList.remove('swiper-slide');

            }
        }
    }

   function visibleMore () {

       for (let i = 0; i < hiddenElements.length; i++){
            if (hiddenElements[i].classList.contains("visible")) {
                hiddenElements[i].classList.remove('visible');
                hiddenElements[i].classList.add('unvisible');
                buttonReadMore.innerHTML = "Показать все";
                iconReadMore.style.transform = "rotate(360deg)";
            } else {
                hiddenElements[i].classList.add('visible');
                buttonReadMore.innerHTML = "Скрыть";
                iconReadMore.style.transform = "rotate(180deg)";
                hiddenElements[i].classList.remove('unvisible');
            }
    }
}
    let iconReadMore = document.querySelector('.icon-read-more');
    let buttonReadMore = document.querySelector('.read-more');
        buttonReadMore.addEventListener("click", visibleMore);



}






