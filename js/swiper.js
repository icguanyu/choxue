/* 
Swiper5
以下為全站使用到的所有 swiper 元件初始化與設定檔
API文件 https://www.swiper.com.cn/
by Nick 2019-12
*/

/* 首頁-Banner #top-carousel*/
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
/* 首頁-即時賽況 #live-game*/
var mySwiper = new Swiper('#live-game', {
  loop: true,
  slidesPerView: 4,
  navigation: {
    nextEl: '#live-game .swiper-button-next',
    prevEl: '#live-game .swiper-button-prev',
  },
  breakpoints: {
    1330: {
      slidesPerView: 3,
    },
    1080: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    }
  }
});

/* 首頁-點球星 star-rank-wrapper #star-carousel*/
var mySwiper = new Swiper('#star-carousel', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    996: {
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 10,
      slidesPerView: 1,
    }
  }
});