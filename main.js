const slider = document.querySelector(".projects-slider");
const images = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let current = 0;

leftArrow.addEventListener("click", function () {
  current--;
  slider.style.transform = `translateX(${-current * 280}px)`;
});

rightArrow.addEventListener("click", function () {
  current++;
  slider.style.transform = `translateX(${-current * 280}px)`;
});
