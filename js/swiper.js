/* 首頁頂 */
var mySwiper = new Swiper('#top-carousel', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#top-carousel .swiper-button-next',
    prevEl: '#top-carousel .swiper-button-prev',
  }
});