const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelectorAll(".active-definer a");

export function header() {
  menuBtn &&
    menuBtn.addEventListener("click", function () {
      menuBtn.classList.toggle("active__burger");
      menu.classList.toggle("active__burger");
    });

  navMenu.forEach((el) => {
    if (window.location.href == el.href) {
      el.setAttribute("class", "header__active");
    }
  });
}
