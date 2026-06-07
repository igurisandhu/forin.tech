window.initHeroAnimations = function () {

    // Entire Hero Fade In
    gsap.from("#home", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power2.out"
    });

    // Background Blob 1
    gsap.to(".hero-blob-1", {
        x: 30,
        y: -20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Background Blob 2
    gsap.to(".hero-blob-2", {
        x: -30,
        y: 20,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Subtle Image Float
    gsap.to(".hero-image", {
        y: -6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Button Hover Animation
    document.querySelectorAll(".hero-buttons a").forEach((btn) => {

        btn.addEventListener("mouseenter", () => {

            gsap.to(btn, {
                y: -3,
                duration: 0.2,
                ease: "power2.out"
            });

        });

        btn.addEventListener("mouseleave", () => {

            gsap.to(btn, {
                y: 0,
                duration: 0.2,
                ease: "power2.out"
            });

        });

    });

};