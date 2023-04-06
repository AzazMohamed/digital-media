// Navbar Toggle Menu
let navToggleBtn = document.querySelector("header button.toggle-menu");
let navList = document.querySelector("header nav");

navToggleBtn.addEventListener("click", () => {
  navList.classList.toggle("toggled");
});

// Paralex Effect
let parallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", (event) => {
  parallaxElements.forEach((el) => {
    let moveX = (event.clientX / window.innerWidth) * el.dataset.parallaxSpeed;
    let moveY = (event.clientY / window.innerHeight) * el.dataset.parallaxSpeed;

    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
