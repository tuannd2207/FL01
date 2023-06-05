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
gsap.registerPlugin(ScrollTrigger);
// gsap.from(".pre-index-content-title", {
//     scrollTrigger: ".pre-index-content-title", // same as scrollTrigger: {trigger: ".line-1", toggleActions: "play none none none", start: "top bottom", end: "bottom top"}
//     fontSize: 0,
//     duration: 3,
//     transformOrigin: "left center",
//     toggleActions:"restart complete reverse reset"
//     easing\
// });
gsap.from(".pre-index-content-title", {
    duration:2, opacity:0, ease:"linear",
    scrollTrigger: {
        trigger:".pre-index-content-title",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
});
gsap.from(".pre-img", {
    duration:2, opacity:0, ease:"linear",
    scrollTrigger: {
        trigger:".pre-img",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
gsap.from(".border-deco", {
    duration:1, scaleY:0, ease:"linear",
    scrollTrigger: {
        trigger:".border-deco",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
