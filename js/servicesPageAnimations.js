window.initServicesPageAnimations = function () {

    // HERO
    const tl = gsap.timeline();

    tl.from(".services-badge", {
        opacity: 0,
        y: 15,
        duration: 0.4
    })

    .from(".services-title", {
        opacity: 0,
        y: 25,
        duration: 0.7
    }, "-=0.2")

    .from(".services-description", {
        opacity: 0,
        y: 15,
        duration: 0.5
    }, "-=0.4")

    .from(".service-stat", {
        opacity: 0,
        y: 10,
        stagger: 0.08,
        duration: 0.4
    }, "-=0.2");


    // SERVICES
    gsap.utils.toArray("#services .service-card").forEach(card => {

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


    // PROCESS
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


    // WHY US
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


    // HERO BLOBS
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
};

// SERVICE CARD HOVER
document.querySelectorAll(".service-card").forEach((card) => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            y: -8,
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.to(card.querySelector("div"), {
            boxShadow: "0 20px 40px rgba(14,165,233,0.15)",
            borderColor: "rgba(56,189,248,0.35)",
            duration: 0.3
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.to(card.querySelector("div"), {
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            borderColor: "rgba(255,255,255,0.1)",
            duration: 0.3
        });

    });

});


// PROCESS CARD HOVER
document.querySelectorAll(".process-card").forEach((card) => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            y: -8,
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.to(card, {
            boxShadow: "0 20px 40px rgba(14,165,233,0.15)",
            borderColor: "rgba(56,189,248,0.35)",
            duration: 0.3
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.to(card, {
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            borderColor: "rgba(255,255,255,0.1)",
            duration: 0.3
        });

    });

});


// WHY CARD HOVER
document.querySelectorAll(".why-card").forEach((card) => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            y: -8,
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.to(card, {
            boxShadow: "0 20px 40px rgba(14,165,233,0.15)",
            borderColor: "rgba(56,189,248,0.35)",
            duration: 0.3
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.to(card, {
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            borderColor: "rgba(255,255,255,0.1)",
            duration: 0.3
        });

    });

});
