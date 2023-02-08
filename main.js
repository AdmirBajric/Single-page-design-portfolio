const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const projectsSlider = document.querySelector(".projects-slider");

let dim = [280, 560];
let left = [];
let right = [];

arrowLeft.addEventListener("click", (e) => {
  scrollImg("-", left);
});

arrowRight.addEventListener("click", (e) => {
  scrollImg("+", right);
});

const scrollImg = (option, name) => {
  if (left.length < 2 && name === left) {
    console.log("left");
    left.push(dim[left.length]);

    projectsSlider.style.transform = `translateX(${option}${
      left[left.length - 1]
    }px)`;
    left.length === 2 ? (arrowLeft.style.opacity = 0) : null;
  } else if (right.length < 2 && name === right) {
    console.log("right");
    right.push(dim[right.length]);

    projectsSlider.style.transform = `translateX(${option}${
      right[right.length - 1]
    }px)`;
  } else {
    console.log("test");
    projectsSlider.style.transform = `translateX(${option}${
      name[name.length - 1] - 280
    }px)`;
    console.log(name);
    name.pop();
    console.log(name);
  }
};
