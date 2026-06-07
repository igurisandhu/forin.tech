console.log("Animation JS Loaded");

window.initNavbarAnimations = function () {

    console.log("Navbar Animation Running");

    gsap.from("#navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

};