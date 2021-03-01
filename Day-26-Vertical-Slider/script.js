const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const slides = right.querySelectorAll("div").length;

upBtn.addEventListener("click", () => {
  change("up");
});
downBtn.addEventListener("click", () => {
  change("down");
});

let active = 0;

left.style.top = `-${(slides - 1) * 100}vh`;

function change(direction) {
  const sliderHeight = container.clientHeight;
  if (direction === "up") {
    active++;
    if (active > slides - 1) {
      active = 0;
    }
  } else {
    active--;
    if (active < 0) {
      active = slides - 1;
    }
  }

  right.style.transform = `translateY(-${active * sliderHeight}px)`;
  left.style.transform = `translateY(${active * sliderHeight}px)`;
}
