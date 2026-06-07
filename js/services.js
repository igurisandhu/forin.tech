window.initServicesAnimations = function () {

    // Section Heading
    gsap.from("#services .text-center", {
        scrollTrigger: {
            trigger: "#services",
            start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
    });

    // Service Rows Reveal
    gsap.from(".service-row", {
        scrollTrigger: {
            trigger: "#services",
            start: "top 70%",
        },
        opacity: 20,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
    });

    // Service Numbers
    gsap.utils.toArray(".service-number").forEach((number) => {

        gsap.from(number, {
            scrollTrigger: {
                trigger: number,
                start: "top 85%",
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: "power2.out",
        });

    });

    // Hover Effects
    document.querySelectorAll(".service-row").forEach((row) => {

        const arrow = row.querySelector(".service-arrow");

        row.addEventListener("mouseenter", () => {

            gsap.to(row, {
                x: 10,
                duration: 0.3,
                ease: "power2.out",
            });

            if (arrow) {
                gsap.to(arrow, {
                    x: 8,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }

        });

        row.addEventListener("mouseleave", () => {

            gsap.to(row, {
                x: 0,
                duration: 0.3,
                ease: "power2.out",
            });

            if (arrow) {
                gsap.to(arrow, {
                    x: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }

        });

    });

};