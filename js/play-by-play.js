// document.write(5 + 6)
// $('#video-wrapper').remove();

$(function () {
  // $('#filter-advance-container-mobile').modal('toggle')

  $('#filter-advance-btn').click(function () {
    $('#filter-advance-btn').toggleClass('active')
    if( window.innerWidth > 992 ) {
      $('.filter-advance-container.d-desktop').toggle()
    }
    else {
      $('#filter-advance-container-mobile').modal('toggle')
      
    }
  })

  $('.filter-advance-container.d-desktop #filter-advance-close-btn').click(function () {
    $('#filter-advance-btn').toggleClass('active')
    $('.filter-advance-container.d-desktop').toggle()
  })

  $('.filter-btn').click(function () {
    $(this).toggleClass('active')
  })

})
