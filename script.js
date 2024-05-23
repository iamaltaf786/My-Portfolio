
// On scroll navbar hide script.
var lastScrollTop = 0;
    navbar = document.getElementById("desktop-nav");
window.addEventListener("scroll", function(){
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    navbar.style.top = "-75px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
})



function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Project Section
const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
  (slide, index) => {
    slide.style.left = `${index * 100}%`
  }
)

const goPrev = () => {
  counter--;
  if (counter == -1) counter = 2;
  slideImage();
}

const goNext = () => {
  counter++;
  if (counter == 3) counter = 0;
  slideImage();
}

const slideImage = () => {
  slides.forEach(
    (slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`
    }
  )
}