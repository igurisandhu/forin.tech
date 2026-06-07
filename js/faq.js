window.initFAQAnimations = function () {

    gsap.from("#faq .text-center", {
        scrollTrigger: {
            trigger: "#faq",
            start: "top 80%"
        },
        opacity: 0,
        y: 30,
        duration: 0.8
    });

    gsap.from(".faq-item", {
        scrollTrigger: {
            trigger: ".faq-item",
            start: "top 85%"
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6
    });

};


window.initFAQAccordion = function () {

    document.querySelectorAll(".faq-question").forEach((question) => {

        question.addEventListener("click", () => {

            const item = question.closest(".faq-item");
            const answer = item.querySelector(".faq-answer");
            const icon = item.querySelector(".faq-icon");

            const isOpen = !answer.classList.contains("hidden");

            document.querySelectorAll(".faq-answer").forEach((faq) => {
                faq.classList.add("hidden");
            });

            document.querySelectorAll(".faq-icon").forEach((i) => {
                i.classList.remove("fa-minus");
                i.classList.add("fa-plus");
            });

            if (!isOpen) {

                answer.classList.remove("hidden");

                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");

            }

        });

    });

};