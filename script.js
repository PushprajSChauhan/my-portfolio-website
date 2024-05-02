// Scroll Section Active Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Scroll Reveal
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 100,
});

ScrollReveal().reveal("#home p, .heading", { origin: "top" });
ScrollReveal().reveal(".contact-form", {
  origin: "bottom",
});
ScrollReveal().reveal(
  ".about-col-1, .skill-left, .contact-left .content, .contact-left .btn",
  {
    origin: "left",
  }
);
ScrollReveal().reveal(".about-col-2 .content, .skill-right", {
  origin: "right",
});

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navbg = document.querySelector(".nav-bg");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
  navbg.classList.toggle("active");
});
