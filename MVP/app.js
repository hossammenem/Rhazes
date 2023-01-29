const initApp = ()=> {
  const hamburgerButton = document.getElementById("hamburger-button")
  const menu = document.getElementById("menu")
  const navbar = document.getElementById("navbar")

  const toggleMenu = () => {
    menu.classList.toggle("hidden")
    menu.classList.toggle("flex")
    navbar.classList.toggle("border-b-2")
    navbar.classList.toggle("border-b-green-100")

    if(menu.classList.contains("hidden")){
      hamburgerButton.innerHTML = "&#9776;"
    }else {
      hamburgerButton.innerHTML = "&times;"
    }
  }

  hamburgerButton.addEventListener("click", toggleMenu)
  menu.addEventListener("click", toggleMenu)
}

document.addEventListener("DOMContentLoaded", initApp)
