const hamburger = document.querySelector(".hamburger");
const bars = document.querySelector(".bars");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("isEaten");
  bars.classList.toggle("open");
});
