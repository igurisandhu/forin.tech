fetch("./includes/techStack.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("tech-stack-container").innerHTML = data;

        if(typeof initTechStackAnimations === "function"){
            initTechStackAnimations();
        }
    });