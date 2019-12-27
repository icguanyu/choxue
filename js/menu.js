;(function () {
  const $window = $(window)
  const $hamburger = $('.hamburger')
  const $mobile_menu = $('.mobile_menu')

  function toggleMobileMenu(e) {
    e.stopPropagation()
    $hamburger.toggleClass('active')
    $mobile_menu.toggleClass('active')
  }
  function hideMobileMenu(e) {
    $hamburger.removeClass('active')
    $mobile_menu.removeClass('active')
  }

  $hamburger.click(toggleMobileMenu)
  $window.click(hideMobileMenu)

})()