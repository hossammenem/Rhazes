const initApp = ()=> {
  const hamburgerButton = document.getElementById("hamburger-button")
  const menu = document.getElementById("menu")

  const toggleMenu = () => {
    menu.classList.toggle("slide")

    if(menu.classList.contains("slide")){
      hamburgerButton.innerHTML = "&times;"
    }else {
      hamburgerButton.innerHTML = "&#9776;"
    }
  }

  hamburgerButton.addEventListener("click", toggleMenu)
  menu.addEventListener("click", toggleMenu)

  const sliderFunction = () => {
    const slides = document.querySelectorAll(".news-slide");
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${indx * 150}%)`;
    });
  
    let curSlide = 0;
    let maxSlide = slides.length -1;
  
    const nextSlide = document.querySelector(".btn-next");
    nextSlide.addEventListener("click", function () {
      if ((maxSlide-curSlide) === 0) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${150 * (indx - curSlide)}%)`;
      });
    });

    const prevSlide = document.querySelector(".btn-prev");
    prevSlide.addEventListener("click", function () {
      if (curSlide === 0) {
        curSlide = maxSlide;
      } else {
        curSlide--;
      }
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${150 * (indx - curSlide)}%)`;
      });
    });
  }

  const hideScrollBar = ()=> {
    // "scrollY: ", window.scrollY,
    // " scollTop: ", document.body.scrollTop
    // " scrollHeight: ", document.body.scrollHeight
    // " clientHeight: ", document.body.clientHeight

  }

  sliderFunction()
  hideScrollBar()
}


document.addEventListener("DOMContentLoaded", initApp)
