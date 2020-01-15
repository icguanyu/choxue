/* 控制DOM Layout相關之動畫 */
; $(function () {
  const $window = $(window)
  const $hamburger = $('.hamburger')
  const $mobile_menu = $('.mobile_menu')


  function toggleMobileMenu(e) {
    e.stopPropagation()
    $hamburger.toggleClass('active')
    $mobile_menu.toggleClass('active')
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
  }
  function hideMobileMenu(e) {
    $hamburger.removeClass('active')
    $mobile_menu.removeClass('active')
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
  }

  $hamburger.click(toggleMobileMenu)
  $window.click(hideMobileMenu)

})