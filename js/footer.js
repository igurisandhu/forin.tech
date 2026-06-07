window.initFooterAnimations = function () {

    gsap.from("#footer > div > div:first-child > div", {
        scrollTrigger: {
            trigger: "#footer",
            start: "top 85%"
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 2.0,
        ease: "power3.out"
    });

    gsap.from("#footer .mt-16", {
        scrollTrigger: {
            trigger: "#footer",
            start: "top 90%"
        },
        opacity: 0,
        y: 20,
        duration: 2.0
    });

};