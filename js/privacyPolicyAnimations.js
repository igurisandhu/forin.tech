window.initPrivacyPolicyAnimations = function () {

    // Hero Content
    gsap.from("main h1", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from("main h1 + p", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out"
    });

    // All Policy Sections
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

    // Contact Card
    gsap.from("#contact-card", {
        scrollTrigger: {
            trigger: "#contact-card",
            start: "top 85%"
        },
        opacity: 0,
        scale: 0.96,
        duration: 0.6,
        ease: "power2.out"
    });

    // Hover Effect For Contact Card
    const contactCard = document.getElementById("contact-card");

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