// Mobile Navigation

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close Menu After Clicking Link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// Parallax Scrolling Effect

const scenes = document.querySelectorAll(".scene");

let ticking = false;

function updateParallax() {

    scenes.forEach(function (scene) {

        const background = scene.querySelector(".parallax-bg");

        if (!background) return;

        const rect = scene.getBoundingClientRect();

        const movement = rect.top * -0.18;

        background.style.transform =
            `translate3d(0, ${movement}px, 0)`;

    });

    ticking = false;

}

window.addEventListener("scroll", function () {

    if (!ticking) {

        window.requestAnimationFrame(updateParallax);

        ticking = true;

    }

}, { passive: true });

updateParallax();


// Reveal Animation

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

document.querySelectorAll(".reveal").forEach(function (element) {

    observer.observe(element);

});


// Automatic Current Year

document.getElementById("year").textContent =
    new Date().getFullYear();