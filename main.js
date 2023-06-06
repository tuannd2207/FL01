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
    autoplayTimeout:1500,
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

gsap.from(".pre-index-right", {
    duration:1, translateY:-50, ease:"linear",
    scrollTrigger: {
        trigger:".pre-index-right",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
gsap.from(".pre-index-left", {
    duration:1, translateY:50, ease:"linear",
    scrollTrigger: {
        trigger:".pre-index-left",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
gsap.from(".left-content-title", {
    duration:1, opacity:0, ease:"linear",
    scrollTrigger: {
        trigger:".left-content-title",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
});
gsap.from(".left-content-text", {
    duration:1, translateY:50, opacity:0, ease:"linear",
    scrollTrigger: {
        trigger:".left-content-text",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
});

gsap.from(".two-two", {
    duration:1, marginTop: -90, ease:"linear",
    scrollTrigger: {
        trigger:".two-two",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
});
gsap.from(".index-center-two-top", {
    duration:1.8, opacity: 0, translateY: -60, ease:"linear",
    scrollTrigger: {
        trigger:".index-center-two-top",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
});

gsap.from(".see-mor", {
    duration:1, opacity: 0, ease:"linear",
    scrollTrigger: {
        trigger:".see-mor",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
gsap.from(".one-img-left", {
    duration:1, opacity: 0, translateX: -50, ease:"linear",
    scrollTrigger: {
        trigger:".one-img-left",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
gsap.from(".one-img-right", {
    duration:1, opacity: 0, translateX: 50, ease:"linear",
    scrollTrigger: {
        trigger:".one-img-right",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
gsap.from(".last-ftitle", {
    duration:1, opacity: 0, translateX: -250, ease:"linear",
    scrollTrigger: {
        trigger:".last-ftitle",
        start:"top 85%", //when top of herman passes 75% viewport height
        end:"bottom 40%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
gsap.from(".last-fcontent", {
    duration:1, opacity: 0, translateY: 250, ease:"linear",
    scrollTrigger: {
        trigger:".last-fcontent",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
gsap.from(".index-last-top", {
    duration:1, opacity: 0, translateY: -150, ease:"linear",
    scrollTrigger: {
        trigger:".index-last-top",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
gsap.from(".index-last-center", {
    duration:1, opacity: 0, translateY: 150, ease:"linear",
    scrollTrigger: {
        trigger:".index-last-center",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
gsap.from(".last-item-left", {
    duration:1, opacity: 0, scale: 1.1, ease:"linear",
    scrollTrigger: {
        trigger:".last-item-left",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
gsap.from(".last-item-center", {
    duration:1.5, scale: 1.3, opacity: 0, ease:"linear",
    scrollTrigger: {
        trigger:".last-item-center",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
gsap.from(".last-item-right", {
    duration:2, opacity: 0,scale: 1.7, ease:"linear",
    scrollTrigger: {
        trigger:".last-item-right",
        start:"top 75%", //when top of herman passes 75% viewport height
        end:"bottom 25%", //when bottom of herman passes 25% viewport height

        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions:"restart complete resume reset"
        //options: play, pause, resume, reset, restart, complete, reverse,none
    }
})
