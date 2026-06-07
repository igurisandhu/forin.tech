window.initProjectsPageAnimations = function () {

    // HERO TIMELINE
    const heroTl = gsap.timeline();

    heroTl

    .from(".projects-badge", {
        opacity: 0,
        y: 20,
        duration: 0.5
    })

    .from(".projects-title", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out"
    }, "-=0.2")

    .from(".projects-description", {
        opacity: 0,
        y: 30,
        duration: 0.6
    }, "-=0.5")

    .from(".projects-stat", {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.4
    }, "-=0.3");


    // FLOATING BLOBS
    gsap.to(".hero-blob-1", {
        x: 40,
        y: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".hero-blob-2", {
        x: -40,
        y: 30,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });


    // PROJECT CARDS
    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 75%"
        },
        opacity: 0,
        y: 80,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
    });


    // PROCESS CARDS
    gsap.from(".process-card", {
        scrollTrigger: {
            trigger: "#process",
            start: "top 80%"
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out"
    });


    // WHY US CARDS
    gsap.from(".why-card", {
        scrollTrigger: {
            trigger: "#why-us",
            start: "top 80%"
        },
        opacity: 0,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.7,
        ease: "back.out(1.5)"
    });


    // PROJECT CARD HOVER
    document.querySelectorAll(".project-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            gsap.to(card, {
                y: -10,
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


    // PROCESS CARD HOVER
    document.querySelectorAll(".process-card").forEach(card => {

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


    // WHY CARD HOVER
    document.querySelectorAll(".why-card").forEach(card => {

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