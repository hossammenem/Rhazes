export default function initApp() {
  const hamburgerButton: HTMLButtonElement | null =
    document.querySelector("#hamburger-button") ?? null;
  const menu: HTMLElement | null = document.getElementById("menu") ?? null;

  const toggleMenu = () => {
    if (hamburgerButton && menu) {
      menu.classList.toggle("slide");
      hamburgerButton.classList.toggle("toggle-btn");
    }
  };

  const sliderFunction = () => {
    const slides: NodeListOf<HTMLElement> =
      document.querySelectorAll(".news-slide");
    slides.forEach((slide: HTMLElement, indx) => {
      slide.style.transform = `translateX(${indx * 200}%)`;
    });

    let curSlide = 0;
    let maxSlide = slides.length - 1;

    const nextSlide: HTMLButtonElement | null =
      document.querySelector("#btn-next") ?? null;
    if (nextSlide) {
      nextSlide.addEventListener("click", function () {
        if (maxSlide - curSlide === 0) {
          curSlide = 0;
        } else {
          curSlide++;
        }

        slides.forEach((slide, indx) => {
          slide.style.transform = `translateX(${200 * (indx - curSlide)}%)`;
        });
      });
    }

    const prevSlide: HTMLButtonElement | null =
      document.querySelector("#btn-prev") ?? null;
    if (prevSlide) {
      prevSlide.addEventListener("click", function () {
        if (curSlide === 0) {
          curSlide = maxSlide;
        } else {
          curSlide--;
        }

        slides.forEach((slide, indx) => {
          slide.style.transform = `translateX(${200 * (indx - curSlide)}%)`;
        });
      });
    }
  };

  sliderFunction();
  return { hamburgerButton, menu, toggleMenu };
}