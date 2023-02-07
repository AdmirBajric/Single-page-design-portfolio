const arrowLeft = document.querySelector(".arrow-left");
const projectsSlider = document.querySelector(".projects-slider");

arrowLeft.addEventListener("click", (e) => {
  refreshImages(-1);
});

const refreshImages = (num) => {
  const slides = document.querySelectorAll(".slide");
  projectsSlider.innerHTML = "";

  console.log(num >= -1);
  for (let i = 0; i < slides.length; i++) {
    projectsSlider.innerHTML += `<img
        id=${num}
        class="slide"
        src="./assets/image-slide-${num}.jpg"
        alt="Image ${num}"
      />`;
  }
};

const fillImages = () => {
  projectsSlider.innerHTML = `<img
    id="1"
    class="slide"
    src="./assets/image-slide-1.jpg"
    alt="Image 1"
  />
  <img
    id="2"
    class="slide"
    src="./assets/image-slide-2.jpg"
    alt="Image 2"
  />
  <img
    id="3"
    class="slide"
    src="./assets/image-slide-3.jpg"
    alt="Image 3"
  />
  <img
    id="4"
    class="slide"
    src="./assets/image-slide-4.jpg"
    alt="Image 4"
  />
  <img
    id="5"
    class="slide"
    src="./assets/image-slide-5.jpg"
    alt="Image 5"
  />`;
};

fillImages();
