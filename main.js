const arrowLeft = document.querySelector(".arrow-left");
const projectsSlider = document.querySelector(".projects-slider");

arrowLeft.addEventListener("click", (e) => {
  const slides = document.querySelectorAll(".slide");
  let newHtml = ``;

  let imgShowing = slides[0].id;

  for (let i = 0; i < slides.length; i++) {
    newHtml += `<img id=${imgShowing} class="slide" src="./assets/image-slide-${imgShowing}.jpg" alt="Image ${imgShowing}" />`;
  }

  projectsSlider.innerHTML = "";
  projectsSlider.innerHTML = newHtml;
});

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
