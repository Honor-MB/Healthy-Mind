const openBtn = document.querySelector(".toggle__btn--1")
const closeBtn = document.querySelector(".toggle__btn--2")
const sideBar = document.querySelector(".sidebar")
const mainContent = document.querySelector(".main-content")

closeBtn.addEventListener("click", () => 
{
    document.body.style.gridTemplateColumns = "1fr"
    sideBar.style.transition = ".5s linear"
    sideBar.style.display = "none"
    closeBtn.style.display = "none"
    openBtn.style.display = "block"
})

openBtn.addEventListener("click", () => 
{
    document.body.style.gridTemplateColumns = "auto 1fr"
    sideBar.style.display = "block"
    sideBar.style.transition = ".5s linear"
    closeBtn.style.display = "block"
    openBtn.style.display = "none"
})
