const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading");

let count = 0;

setTimeout(function () {
  let init = setInterval(load, 30);
}, 3000);

function load() {
  count++;

  if (count > 99) {
    clearInterval(init);
  }

  loading.innerText = `${count}%`;
  loading.style.opacity = `${(100 - count) / 100}`;
  bg.style.filter = `blur(${100 - count}px)`;
}
