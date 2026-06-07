window.initAboutPageAnimations = function () {

    // HERO
    const heroTl = gsap.timeline();

    heroTl.from(".about-badge", {
        opacity: 0,
        y: 15,
        duration: 0.4
    })

    .from(".about-title", {
        opacity: 0,
        y: 25,
        duration: 0.7
    }, "-=0.2")

    .from(".about-description", {
        opacity: 0,
        y: 15,
        duration: 0.5
    }, "-=0.4")

    .from(".about-stat", {
        opacity: 0,
        y: 10,
        stagger: 0.08,
        duration: 0.4
    }, "-=0.2");


    // OUR STORY LEFT CONTENT

    gsap.from(".story-content", {
        scrollTrigger: {
            trigger: "#our-story",
            start: "top 80%"
        },
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out"
    });


    // STORY CARDS

    gsap.utils.toArray("#our-story .grid.sm\\:grid-cols-2 > div").forEach(card => {

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


    // FOUNDER SECTION

    gsap.from(".founder-image", {
        scrollTrigger: {
            trigger: "#founder",
            start: "top 80%"
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from(".founder-content", {
        scrollTrigger: {
            trigger: "#founder",
            start: "top 80%"
        },
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power2.out"
    });


    // VALUE CARDS

    gsap.utils.toArray(".value-card").forEach(card => {

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


    // STORY CARDS HOVER

    document.querySelectorAll("#our-story .grid.sm\\:grid-cols-2 > div").forEach(card => {

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


    // VALUE CARDS HOVER

    document.querySelectorAll(".value-card").forEach(card => {

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


    // FOUNDER BUTTON HOVER

    document.querySelectorAll("#founder a").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            gsap.to(btn, {
                y: -3,
                scale: 1.03,
                duration: 0.25,
                ease: "power2.out"
            });

        });

        btn.addEventListener("mouseleave", () => {

            gsap.to(btn, {
                y: 0,
                scale: 1,
                duration: 0.25,
                ease: "power2.out"
            });

        });

    });

};