// console.log('jq0', $('body'));

// $(document).ready(function () {
//     $('.slogan-title').fadeIn(3000).removeClass('hidden space');
// });

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});