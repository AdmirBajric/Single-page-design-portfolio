const arrowLeft = document.querySelector(".arrow-left");

arrowLeft.addEventListener("click", (e) => {
  const slides = document.querySelectorAll(".slide");
  const projectsSlider = document.querySelector(".projects-slider");

  let newHtml = ``;

  let imgShowing = parseInt(slides[0].id) - 1;

  for (let i = 0; i < slides.length; i++) {
    newHtml += `<img id=${imgShowing} class="slide" src="./assets/image-slide-${imgShowing}.jpg" alt="Image ${imgShowing}" />`;
  }

  projectsSlider.innerHTML = "";
  projectsSlider.innerHTML = newHtml;
});
