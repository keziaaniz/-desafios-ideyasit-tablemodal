const buttonOpen = document.querySelector(".addNewLine")
const modalContainer = document.querySelector(".modal-container")
const buttonClose = document.querySelector(".close")


buttonOpen.addEventListener("click", () => {
    modalContainer.classList.add("show")
})

buttonClose.addEventListener("click", () => {
    modalContainer.classList.remove("show")
})
