window.onload = function() {

    let hiddenElements = document.querySelectorAll('.brand-block__brands');
    let hiddenBrandBlock = document.querySelector('.brand-block');
    if(window.innerWidth <= 768) {

        var mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });
        hiddenBrandBlock.classList.remove('brand-block');
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

    if(window.innerWidth >= 768) {
    let hiddenElements = document.querySelectorAll('.brand-block__brands');
    for (let i = 0; i < hiddenElements.length; i++) {
        if (hiddenElements[i].classList.contains("swiper-slide")) {
            hiddenElements[i].classList.remove('swiper-slide');
        }
      }
    }








}






