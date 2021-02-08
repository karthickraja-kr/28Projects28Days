const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading");

let count = 0;

let init = setInterval(load, 30);

function load() {
  count++;

  if (count > 99) {
    clearInterval(init);
  }

  loading.innerText = `${count}%`;
  loading.style.opacity = `${(100 - count) / 100}`;
  bg.style.filter = `blur(${100 - count}px)`;
}
