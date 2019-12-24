// document.write(5 + 6)
// $('#video-wrapper').remove();
var isMobile = window.innerWidth < 992;

$(function () {
  // $('#video-wrapper').remove();

  var h = $('#nav-wrapper nav').innerHeight()
  $('#nav-space').innerHeight(h)
	// console.log($('#nav-wrapper nav'))
	
	$(document).on('click', '.dropdown-item', function() {
		var $container = $(this).parents('.dropdown');
		var $select = $container.find('.dropdown-toggle');
		$select.text($(this).text())
	})

  // $('.video-container #slick-container').slick({
  //   lazyLoad: 'ondemand',
  //   dots: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,

  //   // prevArrow: '<button type="button"><i class="fas fa-chevron-left"></i></button>',
  //   // nextArrow: '<button type="button"><i class="fas fa-chevron-right"></i></button>',
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     },
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ]
	// });
	
	

})

function addStatisticToggle(name, container, desktopOptions, mobileOptions) {

  var grid = container.data("kendoGrid");

  if (!isMobile) {

  }
  function toggleStatistic(options, selectedName) {
    return function () {
      var value = $(this).val();  // two-three, freethrow-rebound, other, detail
      for (var i = 0; i < options.length; i++) {
        grid.hideColumn(options[i]);
      }
      var selected = value.split('-');
      for (var j = 0; j < selected.length; j++) {
        grid.showColumn(selected[j]);
      }
    }

  }

  $('input[type=radio][name=' + name + ']').change(
    isMobile ? toggleStatistic(mobileOptions) : toggleStatistic(desktopOptions)
  );
}

function initArray(length, value) {
  var arr = []
  var i = 0;
  arr.length = length;
  for (var i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}

(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		plusMark: false,
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		// console.log(value.toFixed(settings.decimals).replace(/\B(?=(\d{3})+(?!\d))/g,","))
		return value.toFixed(settings.decimals).replace(/\B(?=(\d{3})+(?!\d))/g,",")
	}
}(jQuery));

// function isMobile() {
//   var res = window.innerWidth < 992
//   console.log(res);
//   return res;
// }
