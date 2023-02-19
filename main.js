const slider = document.querySelector(".projects-slider");
const images = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let x = "";
let y = "";
let current = 0;

if (window.innerWidth <= 375) {
  const leftClick = () => {
    y = "";
    rightArrow.style.opacity = 1;
    if (x === "") {
      current--;
      slider.style.transform = `translateX(${-current * 280}px)`;
    }
    if (
      document
        .querySelector(".projects-slider")
        .style.transform.replace(/[^\d.]/g, "") === "560"
    ) {
      leftArrow.style.opacity = 0;
      x = "560";
    }
  };

  leftArrow.addEventListener("click", leftClick);

  const rightClick = () => {
    x = "";
    leftArrow.style.opacity = 1;
    if (y === "") {
      current++;
      slider.style.transform = `translateX(${-current * 280}px)`;
    }

    if (
      document
        .querySelector(".projects-slider")
        .style.transform.replace(/[^\d.]/g, "") === "560"
    ) {
      rightArrow.style.opacity = 0;
      y = "560";
    }
  };

  rightArrow.addEventListener("click", rightClick);
} else if (window.innerWidth <= 768) {
  console.log("radi");
  const leftClick = () => {
    y = "";
    rightArrow.style.opacity = 1;
    if (x === "") {
      current--;
      slider.style.transform = `translateX(${-current * 570}px)`;
    }
    if (
      document
        .querySelector(".projects-slider")
        .style.transform.replace(/[^\d.]/g, "") === "1140"
    ) {
      leftArrow.style.opacity = 0;
      x = "560";
    }
  };

  leftArrow.addEventListener("click", leftClick);

  const rightClick = () => {
    x = "";
    leftArrow.style.opacity = 1;
    if (y === "") {
      current++;
      slider.style.transform = `translateX(${-current * 570}px)`;
    }

    if (
      document
        .querySelector(".projects-slider")
        .style.transform.replace(/[^\d.]/g, "") === "1140"
    ) {
      rightArrow.style.opacity = 0;
      y = "560";
    }
  };

  rightArrow.addEventListener("click", rightClick);
}
