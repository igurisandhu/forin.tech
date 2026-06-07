fetch("./includes/footer.html")
    .then(response => response.text())
    .then(data => {

        const footerContainer = document.getElementById("footer");

        if (!footerContainer) return;

        footerContainer.innerHTML = data;

        if (typeof initFooterAnimations === "function") {
            initFooterAnimations();
        }

    })
    .catch(error => {
        console.error("Footer Load Error:", error);
    });