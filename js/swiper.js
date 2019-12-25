/* 
Swiper5
以下為全站使用到的所有 swiper 元件初始化與設定檔
API文件 https://www.swiper.com.cn/
by Nick 2019-12
*/

/* 首頁-Banner #top-carousel*/
(function () {
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
    navigation: {
      nextEl: '#star-carousel #next',
      prevEl: '#star-carousel #prev',
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



  /* 首頁-排名-得分王  #king-carousel*/
  /* 額外偵聽螢幕斷點，切換 options */
  /* https://medium.com/p/a947491ddec8/responses/show */
  let ResponsiveSwiper
  const breakpoint = window.matchMedia('(max-width:996px)');
  const breakpointChecker = () => {
    if (ResponsiveSwiper !== undefined) ResponsiveSwiper.destroy(true, true);
    ResponsiveSwiper = new Swiper('#king-carousel',
      breakpoint.matches === true ?
        {
          loop: true,
          allowTouchMove: true,
          spaceBetween: 20,
          slidesPerView: 1,
          slidesPerColumn: 1,
        }
        :
        {
          allowTouchMove: false,
          spaceBetween: 40,
          slidesPerView: 3,
          slidesPerColumn: 2,
        }
    );
  }
  breakpoint.addListener(breakpointChecker);
  breakpointChecker()


  /* model 內 model-carousel*/
  var mySwiper = new Swiper('#model-carousel', {
    observer: true,
    observeParents: true,
    autoHeight: true,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.modal-body .arrow-next',
      prevEl: '.modal-body .arrow-prev',
    },
  });
})()
