// ==========================
// STICKY HEADER
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.padding = "15px 8%";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
    } else {
        header.style.padding = "22px 8%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.05)";
    }

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ==========================
// ACTIVE NAV LINK
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
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

// ==========================
// SCROLL REVEAL
// ==========================

const reveals = document.querySelectorAll(
".card, .project-card, .testimonial, .about-image, .about-content"
);

function revealOnScroll() {

    const trigger = window.innerHeight - 120;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

const buttons = document.querySelectorAll(
".primary-btn, .secondary-btn, .signup-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

// ==========================
// HERO IMAGE PARALLAX
// ==========================

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("scroll", () => {

    if(heroImage){

        let y = window.pageYOffset;

        heroImage.style.transform =
        `translateY(${y * 0.05}px)`;

    }

});

// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".stats h2");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight && !started) {

        started = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 60;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

    }

});