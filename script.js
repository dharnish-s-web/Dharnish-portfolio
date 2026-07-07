// ===============================
// Smooth Scrolling Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ===============================
// Navbar Shadow on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(7,17,31,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
    }
    else {
        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";
    }

});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    ".card, .timeline-card, .skill, .service-card"
);

const reveal = () => {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;
        const visible = window.innerHeight - 100;

        if (top < visible) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }

    });

};

reveal();

window.addEventListener("scroll", reveal);

// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "22px";
topButton.style.background = "#00d9ff";
topButton.style.color = "#07111f";
topButton.style.display = "none";
topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.35)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400)
        topButton.style.display = "block";
    else
        topButton.style.display = "none";

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===============================
// Welcome Message
// ===============================

window.onload = () => {

    console.log("Welcome to DHARNISH Portfolio");

};
/* Typing Animation */

const text = [
    "Senior Process Consultant",
    "US Healthcare Claims Specialist",
    "Appeals & Denial Expert",
    "Available for Freelance"
];

let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type() {

    if (count === text.length) {

        count = 0;

    }

    current = text[count];

    letter = current.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === current.length) {

        count++;

        index = 0;

        setTimeout(type, 1500);

    }

    else {

        setTimeout(type, 80);

    }

})();
/* ===========================
COUNTER
=========================== */

const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter => {

    const update = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(update, 10);

        }

        else {

            counter.innerText = target;

        }

    }

    update();

});
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 1000);

});