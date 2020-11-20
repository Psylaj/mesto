const PROFILE_NAME = ".profile__title";
const PROFILE_TITLE = ".profile__subtitle";
const FORM_NAME = "#name";
const FORM_TITLE = "#title";
const POPUP = ".popup";
const EDIT_BUTTON = ".profile__edit-button";
const MODAL_CLOSE = ".popup__modal-close";
const MODAL_CONTENT_BUTTON = ".popup__modal-content-button";

function fillModal () {
    const title = document.querySelector(PROFILE_TITLE).innerText
    const name = document.querySelector(PROFILE_NAME).innerText
    document.querySelector(FORM_TITLE).value = title
    document.querySelector(FORM_NAME).value = name
}

function openModal() {
    document.querySelector(POPUP).classList.add("popup_opened")
    fillModal()
}

function closeModal() {
    document.querySelector(POPUP).classList.remove("popup_opened")
}

function saveModal() {
    const name = document.querySelector(FORM_NAME).value
    const title = document.querySelector(FORM_TITLE).value
    document.querySelector(PROFILE_NAME).innerText = name
    document.querySelector(PROFILE_TITLE).innerText = title
    closeModal()
}

document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(EDIT_BUTTON).addEventListener("click", openModal)
        document.querySelector(MODAL_CLOSE).addEventListener("click", closeModal)
        document.querySelector(MODAL_CONTENT_BUTTON).addEventListener("click" , saveModal)
    }
)

