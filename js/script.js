/*MOBILE NAVIGATION*/
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("show");
    });

    const navLinks = navbar.querySelectorAll("a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("show");
        });
    });
}

/*CURRENT YEAR*/
const currentYear = document.getElementById("currentYear");
if (currentYear) {
    currentYear.textContent =
        new Date().getFullYear();
}

/*CONTACT FORM*/
const contactForm =
    document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert(
            "Thank you for your message! " +
            "Please contact me directly using my email Or Call ."
        );
        contactForm.reset();
    });
}