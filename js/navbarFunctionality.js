fetch("./includes/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;

    console.log("Navbar loaded");

    if (typeof window.initNavbarAnimations === "function") {
    window.initNavbarAnimations();
    }
  })
  .catch((error) => {
    console.error(error);
  });

function initializeNavbar() {
  console.log("Navbar initialized");

  const menuBtn = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.getElementById("navbar");

  if (!menuBtn || !mobileMenu || !navbar) {
    console.log("Navbar elements missing");
    return;
  }

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    const icon = menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark-900/95", "shadow-xl");
    } else {
      navbar.classList.remove("bg-dark-900/95", "shadow-xl");
    }
  });
}