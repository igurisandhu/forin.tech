window.initCTAAnimations = function () {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#cta",
            start: "top 75%"
        }
    });

    tl.from("#cta .max-w-4xl", {
        opacity: 0,
        y: 80,
        scale: 0.95,
        duration: 1,
        ease: "power3.out"
    })

    .from("#cta .inline-flex", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out"
    }, "-=0.6")

    .from("#cta h2", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out"
    }, "-=0.3")

    .from("#cta p", {
        opacity: 0,
        y: 25,
        duration: 0.5,
        ease: "power2.out"
    }, "-=0.4")

    // Animate both buttons together
    .from(".cta-buttons", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "back.out(1.7)"
    }, "-=0.3");



    // Floating card effect
    gsap.to("#cta .max-w-4xl", {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });


    // Hover Effects
    document.querySelectorAll(".btn-primary, .btn-secondary").forEach((button) => {

        button.addEventListener("mouseenter", () => {

            gsap.to(button, {
                y: -5,
                scale: 1.03,
                duration: 0.25,
                ease: "power2.out"
            });

        });

        button.addEventListener("mouseleave", () => {

            gsap.to(button, {
                y: 0,
                scale: 1,
                duration: 0.25,
                ease: "power2.out"
            });

        });

    });

};