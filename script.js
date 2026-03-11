const menuBar = document.querySelector(".menu__nav")
const menuIcon = document.querySelector(".header__menu")

    menuIcon.addEventListener("click", () => {
    menuBar.classList.toggle("active")
})