/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


$(function() {
	// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Prevents carousel from sliding when mouse is hover over its area
$('#carousel-wrapper').hover(function () { 
  $('#about-carousel').carousel('pause') 
}, function () { 
  $('#about-carousel').carousel('cycle') 
})

/* function resizeEventsSection() {
    var eventsSection = $('#events');
    eventsSection.height($(window).height() - 300);
}

$(window).resize(resizeEventsSection);
resizeEventsSection(); */