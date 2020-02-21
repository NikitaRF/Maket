window.onload = function bbb () {

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

    if(window.innerWidth > 768) {

        for (let i = 0; i < hiddenElements.length; i++) {
            if (hiddenElements[i].classList.contains('swiper-slide')) {
                hiddenElements[i].classList.remove('swiper-slide');

            }
        }
    }

    var mySwiper = undefined;
    function swiperInitoff() {

    if (window.innerWidth <= 768 && mySwiper == undefined) {

             mySwiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
            });

        for (let i = 0; i < hiddenElements.length; i++) {
            if (hiddenElements[i].classList.contains('swiper-slide') === false) {
                hiddenElements[i].classList.add('swiper-slide');
            }
        }

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


    // //slider swiper:
    //
    //
    //
    //
    // if(window.innerWidth <= 768) {
    //
    //     var mySwiper = new Swiper('.swiper-container', {
    //         pagination: {
    //             el: '.swiper-pagination',
    //         },
    //     });
    //
    // }
    //
    //
    // if(window.innerWidth > 768) {
    //
    //     for (let i = 0; i < hiddenElements.length; i++) {
    //         if (hiddenElements[i].classList.contains('swiper-slide')) {
    //             hiddenElements[i].classList.remove('swiper-slide');
    //
    //         }
    //     }
    // }
    //
    //
    //
    // function swiperOnOff() {
    //
    //     if (window.innerWidth <= 768) {
    //
    //
    //         if (document.querySelector('.swiper-container-initialized') === null){
    //             console.log(mySwiper)
    //             var mySwiper = new Swiper('.swiper-container', {
    //                 pagination: {
    //                     el: '.swiper-pagination',
    //                 },
    //             });
    //
    //
    //
    //         }
    //
    //         for (let i = 0; i < hiddenElements.length; i++) {
    //             if (hiddenElements[i].classList.contains('swiper-slide') === false) {
    //                 hiddenElements[i].classList.add('swiper-slide');
    //             }
    //         }
    //
    //     } else {
    //
    //         if (typeof mySwiper !== "undefined"){
    //             mySwiper.destroy(true, true);
    //
    //         }
    //
    //         for (let i = 0; i < hiddenElements.length; i++) {
    //             if (hiddenElements[i].classList.contains('swiper-slide')) {
    //                 hiddenElements[i].classList.remove('swiper-slide');
    //             }
    //         }
    //     }
    // }
    //
    // window.onresize = swiperOnOff;
};






