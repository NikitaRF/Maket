window.onload = function bbb () {

    let hiddenElements = document.querySelectorAll('.brand-block__brands');
    let iconReadMore = document.querySelector('.icon-read-more');
    let buttonReadMore = document.querySelector('.read-more');

    function visibleMore () {

        for (let i = 0; i < hiddenElements.length; i++){
            if (hiddenElements[i].classList.contains("brand-block__brands--visible")) {
                hiddenElements[i].classList.remove('brand-block__brands--visible');
                hiddenElements[i].classList.add('brand-block__brands--unvisible');
                buttonReadMore.innerHTML = "Показать все";
                iconReadMore.style.transform = "rotate(360deg)";
            } else {
                hiddenElements[i].classList.add('brand-block__brands--visible');
                buttonReadMore.innerHTML = "Скрыть";
                iconReadMore.style.transform = "rotate(180deg)";
                hiddenElements[i].classList.remove('brand-block__brands--unvisible');
            }
        }
    }

    buttonReadMore.addEventListener("click", visibleMore);

    //slider swiper:


    let mySwiper = undefined;
    function swiperInitoff() {

    if (window.innerWidth <= 768 && mySwiper == undefined) {
        for (let i = 0; i < hiddenElements.length; i++) {
            if (hiddenElements[i].classList.contains('swiper-slide') === false) {
                hiddenElements[i].classList.add('swiper-slide');
            }
        }

             mySwiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },

            });



        } else if (window.innerWidth > 768 && mySwiper !== undefined) {

                    mySwiper.destroy(true, true);
                    mySwiper = undefined;
                    for (let i = 0; i < hiddenElements.length; i++) {
                        if (hiddenElements[i].classList.contains('swiper-slide')) {
                            hiddenElements[i].classList.remove('swiper-slide');
                        }
                    }
                }

}

    swiperInitoff();




    window.onresize = swiperInitoff;

};






