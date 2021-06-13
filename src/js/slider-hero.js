// * for ".dot"
function currentSlide(n) {
  showSlides((slidePosition = n));
}
const dot_1 = document.querySelector(".dot[data-position-1]");
const dot_2 = document.querySelector(".dot[data-position-2]");
const dot_3 = document.querySelector(".dot[data-position-3]");
dot_1.addEventListener("click", () => currentSlide(1));
dot_2.addEventListener("click", () => currentSlide(2));
dot_3.addEventListener("click", () => currentSlide(3));

let slidePosition = 1;
showSlides(slidePosition);

// * our logic
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("fade");
  const dot = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i = i + 1) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i = i + 1) {
    dot[i].className = dot[i].className.replace(" active", ""); // ? перед active должен бить пробел
  }

  slides[slidePosition - 1].style.display = "block";
  dot[slidePosition - 1].className += " active";
}
