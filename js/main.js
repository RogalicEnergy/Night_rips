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

