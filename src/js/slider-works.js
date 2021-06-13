let slidePosition = 1;
showSlides(slidePosition);

function currentSlide(n) {
  showSlides((slidePosition = n));
  console.log(slidePosition);
}

// ? for "category works"
const allCategoryRef = document.querySelector(".btn-works[data-category-all]");
const btnWorksCategoryRef_1 = document.querySelector(
  ".btn-works[data-category-1]"
);
const btnWorksCategoryRef_2 = document.querySelector(
  ".btn-works[data-category-2]"
);
const btnWorksCategoryRef_3 = document.querySelector(
  ".btn-works[data-category-3]"
);
allCategoryRef.addEventListener("click", () => currentSlide(1));
btnWorksCategoryRef_1.addEventListener("click", () => currentSlide(2));
btnWorksCategoryRef_2.addEventListener("click", () => currentSlide(3));
btnWorksCategoryRef_3.addEventListener("click", () => currentSlide(4));

// ? for arrow prev & next
const getPrevRef = document.querySelector("a.prev");
console.log("🚀 ~ file: slider-works.js ~ line 22 ~ getPrevRef", getPrevRef);
const getNextRef = document.querySelector("a.next");
console.log("🚀 ~ file: slider-works.js ~ line 26 ~ getNextRef", getNextRef);
getPrevRef.addEventListener("click", () => plusSlides(-1));
getNextRef.addEventListener("click", () => plusSlides(1));

function plusSlides(n) {
  showSlides((slidePosition = slidePosition + n));
}

// ? our logic
function showSlides(n) {
  console.log("🚀 ~ file: slider-works.js ~ line 38 ~ showSlides ~ n show", n);
  let i;
  const slides = document.getElementsByClassName("fade-works");
  const category = document.getElementsByClassName("item-works");

  // ? если slidePosition > длины псевдомассива slides
  if (n > slides.length) {
    slidePosition = 1;
  }
  // ? если slidePosition < 1 => возвращаем позицию последнего элемента
  if (n < 1) {
    slidePosition = slides.length;
  }

  for (i = 0; i < slides.length; i = i + 1) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < category.length; i = i + 1) {
    category[i].className = category[i].className.replace(" active", "");
  }

  slides[slidePosition - 1].style.display = "flex";
  category[slidePosition - 1].className += " active";
}
