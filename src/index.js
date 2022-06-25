(() => {
  "use strict";
  const e = document.querySelector(".menu"),
    t = document.querySelector(".menu-btn"),
    s = document.querySelectorAll(".active-definer a"),
    o = document.querySelector(".js__form"),
    r = document.querySelector(".loading"),
    l = document.querySelectorAll(".js-input"),
    n = document.querySelectorAll(".modal__footer-button")[0];
  function a() {
    for (const e of l) e.value = null;
  }
  console.log(o, "form");
  const i = document.getElementById("myModal"),
    c = document.getElementsByClassName("modal__close-btn")[0],
    u = document.getElementsByClassName("modal")[0],
    d = document.querySelector(".js-form-servises"),
    m = document.querySelector(".servises__loading"),
    _ = document.querySelectorAll(".js-input-servises"),
    v = document.querySelectorAll(".form__button-servises")[0];
  console.log(d, "serviseform"),
    t &&
      t.addEventListener("click", function () {
        t.classList.toggle("active__burger"),
          e.classList.toggle("active__burger");
      }),
    s.forEach((e) => {
      window.location.href == e.href &&
        e.setAttribute("class", "header__active");
    }),
    o &&
      o.addEventListener("submit", function (e) {
        e.preventDefault(),
          r.classList.remove("modal__TextError-allow"),
          (function () {
            const e = [];
            return (
              l.forEach((t) => {
                0 == t.value.trim().length
                  ? (t.classList.add("modal__input-error"),
                    t.nextSibling.classList.add("modal__TextError-allow"),
                    e.push(!1))
                  : (t.classList.remove("modal__input-error"),
                    t.nextSibling.classList.remove("modal__TextError-allow"),
                    e.push(!0));
              }),
              e.every((e) => e)
            );
          })() &&
            ((n.textContent = "идет отправка..."),
            n.classList.add("modal__footer-greyButton"),
            setTimeout(() => {
              r.classList.add("modal__TextError-allow"),
                n.classList.remove("modal__footer-greyButton"),
                (n.textContent = "Отправить"),
                a();
            }, 2e3));
      }),
    i &&
      i.addEventListener("click", () => {
        u.classList.add("class", "modal__open");
      }),
    c &&
      c.addEventListener("click", () => {
        u.classList.remove("class", "modal__open"),
          a(),
          r.classList.remove("modal__TextError-allow"),
          l.forEach((e) => {
            e.classList.remove("modal__input-error"),
              e.nextSibling.classList.remove("modal__TextError-allow");
          });
      }),
    d &&
      d.addEventListener("submit", function (e) {
        e.preventDefault(),
          m.classList.remove("servises__allow-TextError"),
          (function () {
            const e = [];
            return (
              _.forEach((t) => {
                0 == t.value.trim().length
                  ? (t.classList.add("servises__input-error"),
                    t.nextSibling.classList.add("servises__allow-TextError"),
                    e.push(!1))
                  : (t.classList.remove("servises__input-error"),
                    t.nextSibling.classList.remove("servises__allow-TextError"),
                    e.push(!0));
              }),
              e.every((e) => e)
            );
          })() &&
            ((v.textContent = "идет отправка..."),
            v.classList.add("servises__footer-greyButton"),
            setTimeout(() => {
              m.classList.add("servises__allow-TextError"),
                v.classList.remove("servises__footer-greyButton"),
                (v.textContent = "получить консультацию"),
                (function () {
                  for (const e of _) e.value = null;
                })();
            }, 2e3));
      });
})();
