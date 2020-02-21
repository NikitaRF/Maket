window.onload = function() {

    let hiddenElements = document.querySelectorAll('.brand-block__brands');
    let iconReadMore = document.querySelector('.icon-read-more');
    let buttonReadMore = document.querySelector('.read-more');

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

    buttonReadMore.addEventListener("click", visibleMore);

    //slider swiper:

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





    function swiperOnOff() {

        if (window.innerWidth <= 768) {
            for (let i = 0; i < hiddenElements.length; i++) {
                if (hiddenElements[i].classList.contains('swiper-slide') === false) {
                    hiddenElements[i].classList.add('swiper-slide');
                }
            }

            if (document.querySelector('.swiper-container-initialized') === null){
                var mySwiper = new Swiper('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });
                console.log(1)
            }

        } else {

            if (typeof mySwiper !== "undefined"){

                mySwiper.destroy(true, true);
                console.log(2)
            }

            for (let i = 0; i < hiddenElements.length; i++) {
                if (hiddenElements[i].classList.contains('swiper-slide')) {
                    hiddenElements[i].classList.remove('swiper-slide');

                }
            }
        }
    }

    window.onresize = swiperOnOff;


}






