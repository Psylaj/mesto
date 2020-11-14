const PROFILE_NAME = "#profile-name";
const PROFILE_TITLE = "#profile-title";
const FORM_NAME = "#name";
const FORM_TITLE = "#title";

function fillModal () {
    const title = document.querySelector(PROFILE_TITLE).innerText
    const name = document.querySelector(PROFILE_NAME).innerText
    document.querySelector(FORM_TITLE).value = title
    document.querySelector(FORM_NAME).value = name
}

function openModal() {
    document.querySelector(".overlay-container").classList.add("popup_opened")
    fillModal()
}

function closeModal() {
    document.querySelector(".overlay-container").classList.remove("popup_opened")
}

function saveModal() {
    const name = document.querySelector(FORM_NAME).value
    const title = document.querySelector(FORM_TITLE).value
    document.querySelector(PROFILE_NAME).innerText = name
    document.querySelector(PROFILE_TITLE).innerText = title
    closeModal()
}

document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".profile__icon").addEventListener("click", openModal)
        document.querySelector(".modal-close").addEventListener("click", closeModal)
        document.querySelector(".modal-content__button").addEventListener("click" , saveModal)
    }
)

