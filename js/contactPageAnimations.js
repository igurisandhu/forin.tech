window.initContactPageAnimations = function () {

    // HERO
    const tl = gsap.timeline();

    tl.from(".contact-badge", {
        opacity: 0,
        y: 15,
        duration: 0.4
    })

    .from(".contact-title", {
        opacity: 0,
        y: 25,
        duration: 0.7
    }, "-=0.2")

    .from(".contact-description", {
        opacity: 0,
        y: 15,
        duration: 0.5
    }, "-=0.4")

    .from("#contact-hero .flex.flex-col", {
        opacity: 0,
        y: 15,
        duration: 0.5
    }, "-=0.3");


    // CONTACT CARDS HEADING

    gsap.from("#contact-cards .text-center", {
        scrollTrigger: {
            trigger: "#contact-cards",
            start: "top 80%"
        },
        opacity: 0,
        y: 20,
        duration: 0.6
    });


    // CONTACT CARDS

    gsap.utils.toArray(".contact-card").forEach(card => {

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


    // CONTACT FORM SECTION

    gsap.from("#contact-form > .container > .grid > div:first-child", {
        scrollTrigger: {
            trigger: "#contact-form",
            start: "top 80%"
        },
        opacity: 0,
        x: -25,
        duration: 0.7,
        ease: "power2.out"
    });

    gsap.from("#contact-form form", {
        scrollTrigger: {
            trigger: "#contact-form",
            start: "top 80%"
        },
        opacity: 0,
        x: 25,
        duration: 0.7,
        ease: "power2.out"
    });


    // CONTACT INFO BOXES

    gsap.utils.toArray("#contact-form .space-y-6 > div").forEach(card => {

        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%"
            },
            opacity: 0,
            y: 15,
            duration: 0.5
        });

    });


    // FLOATING BLOBS

    gsap.to(".contact-blob-1", {
        x: 20,
        y: -15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".contact-blob-2", {
        x: -20,
        y: 15,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });


    // CONTACT CARDS HOVER

    document.querySelectorAll(".contact-card").forEach(card => {

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


    // CONTACT INFO BOXES HOVER

    document.querySelectorAll("#contact-form .space-y-6 > div").forEach(card => {

        card.addEventListener("mouseenter", () => {

            gsap.to(card, {
                y: -6,
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


    // FORM BUTTON HOVER

    const submitBtn = document.querySelector("#contact-form button");

    if (submitBtn) {

        submitBtn.addEventListener("mouseenter", () => {

            gsap.to(submitBtn, {
                y: -3,
                scale: 1.02,
                duration: 0.25,
                ease: "power2.out"
            });

        });

        submitBtn.addEventListener("mouseleave", () => {

            gsap.to(submitBtn, {
                y: 0,
                scale: 1,
                duration: 0.25,
                ease: "power2.out"
            });

        });

    }

};