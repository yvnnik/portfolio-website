// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up"); //getElementbyId() would work too

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});