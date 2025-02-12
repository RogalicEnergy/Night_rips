const scrollButton = document.querySelector('.scroll');


document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper(".mySwiper", {
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    direction: "horizontal",
    spaceBetween: 150,
    slidesOffsetBefore: 110,
  });
});




window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block"; 
    } else {
        scrollButton.style.display = "none"; 
    }
};


scrollButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

