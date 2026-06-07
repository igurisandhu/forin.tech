window.initProjectsPageAnimations = function () {

    // HERO
    const tl = gsap.timeline();

    tl.from(".projects-badge", {
        opacity: 0,
        y: 15,
        duration: 0.4
    })

    .from(".projects-title", {
        opacity: 0,
        y: 25,
        duration: 0.7
    }, "-=0.2")

    .from(".projects-description", {
        opacity: 0,
        y: 15,
        duration: 0.5
    }, "-=0.4")

    .from(".projects-stat", {
        opacity: 0,
        y: 10,
        stagger: 0.08,
        duration: 0.4
    }, "-=0.2");


    // PROJECT CARDS
    gsap.utils.toArray(".project-card").forEach(card => {

        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 88%"
            },
            opacity: 0,
            y: 15,
            duration: 0.5,
            ease: "power2.out"
        });

    });


    // PROCESS CARDS
    gsap.utils.toArray(".process-card").forEach(card => {

        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 88%"
            },
            opacity: 0,
            y: 15,
            duration: 0.5,
            ease: "power2.out"
        });

    });


    // WHY US CARDS
    gsap.utils.toArray(".why-card").forEach(card => {

        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 88%"
            },
            opacity: 0,
            y: 15,
            duration: 0.5,
            ease: "power2.out"
        });

    });


    // FLOATING BLOBS
    gsap.to(".hero-blob-1", {
        x: 20,
        y: -15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".hero-blob-2", {
        x: -20,
        y: 15,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });


    // PROJECT CARD HOVER
    document.querySelectorAll(".project-card").forEach(card => {

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


    // PROCESS CARD HOVER
    document.querySelectorAll(".process-card").forEach(card => {

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


    // WHY CARD HOVER
    document.querySelectorAll(".why-card").forEach(card => {

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

};