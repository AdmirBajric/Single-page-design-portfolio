const slider = document.querySelector(".projects-slider");
const images = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let x = "";
let y = "";
let current = 0;

let imgDimension = 570;

function reportWindowSize() {
  if (window.innerWidth <= 375) {
    imgDimension = 280;
  } else if (window.innerWidth <= 768) {
    imgDimension = 570;
  }
}
reportWindowSize();
window.onresize = reportWindowSize;

function sum() {
  let sumDim = imgDimension * 2;
  return sumDim.toString();
}

const leftClick = () => {
  y = "";
  rightArrow.style.opacity = 1;
  if (x === "") {
    current--;
    slider.style.transform = `translateX(${-current * imgDimension}px)`;
  }
  if (
    document
      .querySelector(".projects-slider")
      .style.transform.replace(/[^\d.]/g, "") === sum()
  ) {
    leftArrow.style.opacity = 0;
    x = sum();
  }
};

leftArrow.addEventListener("click", leftClick);

const rightClick = () => {
  x = "";
  leftArrow.style.opacity = 1;
  if (y === "") {
    current++;
    slider.style.transform = `translateX(${-current * imgDimension}px)`;
  }

  if (
    document
      .querySelector(".projects-slider")
      .style.transform.replace(/[^\d.]/g, "") === sum()
  ) {
    rightArrow.style.opacity = 0;
    y = sum();
  }
};

rightArrow.addEventListener("click", rightClick);
