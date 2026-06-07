window.initTermsPageAnimations = function () {

    // Page Heading
    gsap.from("main h1", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out"
    });

    // Last Updated Text
    gsap.from("main h1 + p", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out"
    });

    // Terms Sections
    gsap.utils.toArray("main section section").forEach(section => {

        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%"
            },
            opacity: 0,
            y: 25,
            duration: 0.6,
            ease: "power2.out"
        });

    });

    // Contact Information Card
    gsap.from("#terms-contact-card", {
        scrollTrigger: {
            trigger: "#terms-contact-card",
            start: "top 85%"
        },
        opacity: 0,
        scale: 0.96,
        duration: 0.6,
        ease: "power2.out"
    });

    // Hover Effect
    const contactCard = document.getElementById("terms-contact-card");

    if (contactCard) {

        contactCard.addEventListener("mouseenter", () => {

            gsap.to(contactCard, {
                y: -6,
                duration: 0.3,
                ease: "power2.out"
            });

        });

        contactCard.addEventListener("mouseleave", () => {

            gsap.to(contactCard, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });

        });

    }

};