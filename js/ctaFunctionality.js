fetch("./includes/cta.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("cta-container").innerHTML = data;

        if (typeof initCTAAnimations === "function") {
            initCTAAnimations();
        }

    });