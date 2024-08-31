let slideIndex = 1;
// showSlides(slideIndex);

// let reminingTime = 70000;
let sliderClass = document.querySelectorAll(".subscribe-top");
// START OF SLIDER SECTION
function setSlide(input, index) {
  slideIndex = index;
  let item = document.querySelector(`#${input}`);
  let iconActive = document.querySelector(`#icon-${input}`);
  let slides = [...document.querySelector(".slides").children];
  let slideIcon = [...document.querySelector(".tab-icon").children];
  slides.forEach((element) => {
    element.classList.remove("active");
  });
  item.classList.add("active");
  slideIcon.forEach((icon) => {
    icon.classList.remove("fa-regular", "active");
  });
  iconActive.classList.add("fa-solid", "active");
}
// auto slider
setInterval(() => {
  slideIndex += 1;
  if (slideIndex == sliderClass.length + 1) {
    slideIndex = 1;
  }
  setSlide(`slide${slideIndex}`, slideIndex);
}, 15000);

// END OF SLIDER SECTION


// START OF HAMBUTGER MENU
let x = document.getElementById("menu");
function hamburgerMenu() {
  if (x.className === "navmenu") {
    console.log('true', x.className);
    x.className += " responsive";
  } else {
   console.log('false', x.className);
    x.className = "navmenu";
  }
}