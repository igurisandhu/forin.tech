window.initProjectsAnimations = function () {

    // Section Heading
    gsap.from("#projects .text-center", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%"
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out"
    });

    // Project Cards
    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 70%"
        },
        opacity: 20,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
    });

};


document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".project-card").forEach((card) => {

        card.addEventListener("mouseenter", () => {

            gsap.to(card, {
                y: -8,
                duration: 0.3,
                ease: "power2.out"
            });

        });

        card.addEventListener("mouseleave", () => {

            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });

        });

    });

});