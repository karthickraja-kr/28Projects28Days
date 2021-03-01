const toasts = document.querySelector(".toasts");
const button = document.querySelector(".btn");

button.addEventListener("click", msg);

function msg() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = getMsg();
  toasts.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

let message = ["Oops something wrong", "Success", "Failed", "Try Again"];

function getMsg() {
  return `${message[Math.floor(Math.random() * message.length)]}`;
}
