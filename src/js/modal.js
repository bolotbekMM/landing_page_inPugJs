import { clearAllFunc } from "./validation";
const openModalBtn = document.getElementById("myModal");
const closeModalBtn = document.getElementsByClassName("modal__close-btn")[0];
const modalClass = document.getElementsByClassName("modal")[0];

export function modal() {
  openModalBtn && openModalBtn.addEventListener("click", () => {
    modalClass.classList.add("class", "modal__open");
  });
  closeModalBtn && closeModalBtn.addEventListener("click", () => {
    modalClass.classList.remove("class", "modal__open");
    clearAllFunc();
  });
}
