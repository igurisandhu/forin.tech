fetch("./includes/faq.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("faq-container").innerHTML = data;

        if (typeof initFAQAnimations === "function") {
            initFAQAnimations();
        }

        if (typeof initFAQAccordion === "function") {
            initFAQAccordion();
        }

    });