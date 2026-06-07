window.initTestimonialsAnimations = function () {

    gsap.from("#testimonials .text-center", {
        scrollTrigger: {
            trigger: "#testimonials",
            start: "top 80%"
        },
        opacity: 0,
        y: 30,
        duration: 0.8
    });

    gsap.from(".testimonial-card", {
        scrollTrigger: {
            trigger: ".testimonial-card",
            start: "top 85%"
        },
        opacity: 20,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
    });

    document.querySelectorAll(".testimonial-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            gsap.to(card, {
                y: -8,
                duration: 0.3
            });

        });

        card.addEventListener("mouseleave", () => {

            gsap.to(card, {
                y: 0,
                duration: 0.3
            });

        });

    });

};