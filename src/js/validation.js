const form = document.querySelector(".js__form");
const successText = document.querySelector(".loading");
const inputs = document.querySelectorAll(".js-input");
const sendButton = document.querySelectorAll(".modal__footer-button")[0];

function inputValidationFunc() {
  const flag = [];
  inputs.forEach((input) => {
    if (input.value.trim().length == 0) {
      input.classList.add("modal__input-error");
      input.nextSibling.classList.add("modal__TextError-allow");
      flag.push(false);
    } else {
      input.classList.remove("modal__input-error");
      input.nextSibling.classList.remove("modal__TextError-allow");
      flag.push(true);
    }
  });
  return flag.every((bool) => bool);
}
console.log(form, "form");

export function Validation() {
  form &&
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      successText.classList.remove("modal__TextError-allow");

      if (inputValidationFunc()) {
        sendButton.textContent = "идет отправка...";
        sendButton.classList.add("modal__footer-greyButton");
        setTimeout(() => {
          successText.classList.add("modal__TextError-allow");
          sendButton.classList.remove("modal__footer-greyButton");
          sendButton.textContent = "Отправить";

          clearInputFunc();
        }, 2000);
      }
    });
}

function clearInputFunc() {
  for (const el of inputs) {
    el.value = null;
  }
}

export function clearAllFunc() {
  clearInputFunc();
  successText.classList.remove("modal__TextError-allow");
  inputs.forEach((input) => {
    input.classList.remove("modal__input-error");
    input.nextSibling.classList.remove("modal__TextError-allow");
  });
}
