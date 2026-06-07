window.initAboutAnimations = function () {

    // Section Header
    gsap.from("#about .text-center", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out"
    });

    // Left Content
    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%"
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
    });

    // Right Image
    gsap.from(".about-image", {
        scrollTrigger: {
            trigger: ".about-image",
            start: "top 80%"
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power3.out"
    });

    // Stats Cards
    gsap.from(".about-stat", {
        scrollTrigger: {
            trigger: ".about-stat",
            start: "top 90%"
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out"
    });

    // Floating Card Animation
    gsap.to(".about-image .absolute", {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Image Hover Effect
    const image = document.querySelector(".about-image img");

    if (image) {

        image.addEventListener("mouseenter", () => {

            gsap.to(image, {
                scale: 1.04,
                duration: 0.4,
                ease: "power2.out"
            });

        });

        image.addEventListener("mouseleave", () => {

            gsap.to(image, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            });

        });

    }

};