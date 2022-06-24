const serviseform = document.querySelector(".js-form-servises");
const successText = document.querySelector(".servises__loading");
const inputs = document.querySelectorAll(".js-input-servises");
const sendButton = document.querySelectorAll(".form__button-servises")[0];

function inputValidationFunc() {
  const flag = [];
  inputs.forEach((input) => {
    if (input.value.trim().length == 0) {
      input.classList.add("servises__input-error");
      input.nextSibling.classList.add("servises__allow-TextError");
      flag.push(false);
    } else {
      input.classList.remove("servises__input-error");
      input.nextSibling.classList.remove("servises__allow-TextError");
      flag.push(true);
    }
  });
  return flag.every((bool) => bool);
}

console.log(serviseform, "serviseform");
export function servisesValidation() {
  serviseform &&
    serviseform.addEventListener("submit", function (event) {
      event.preventDefault();
      successText.classList.remove("servises__allow-TextError");

      if (inputValidationFunc()) {
        sendButton.textContent = "идет отправка...";
        sendButton.classList.add("servises__footer-greyButton");
        setTimeout(() => {
          successText.classList.add("servises__allow-TextError");
          sendButton.classList.remove("servises__footer-greyButton");
          sendButton.textContent = "получить консультацию";

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
