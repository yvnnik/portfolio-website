const scrollUp = document.querySelector("#scroll-up"); //getElementbyId() would work too

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

const btn = document.querySelector('.btn-toggle');

btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme')  
}) 