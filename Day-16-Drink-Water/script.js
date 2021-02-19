const cups = document.querySelectorAll(".cup-small");
const total = cups.length;
const remainder = document.getElementById("remained");
const remainVal = document.getElementById("id");
const percentage = document.getElementById("percentage");

let currentCup = null;
cups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    update(index);
  });
});

function update(index) {
  if (currentCup === index) {
    cups[index].classList.remove("fill");
    currentCup = index - 1;
  } else {
    currentCup = index;
    cups.forEach((cup, idx) => {
      if (index >= idx) {
        cup.classList.add("fill");
      } else {
        cup.classList.remove("fill");
      }
    });
  }
  updateContainer();
}

function updateContainer() {
  const fill = document.querySelectorAll(".fill").length;
  if (fill === 0) {
    percentage.style.height = 0;
    percentage.style.visibility = "hidden";
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fill / total) * 300}px`;
    percentage.innerText = `${(fill / total) * 100}%`;
  }

  if (fill === total) {
    remainder.style.height = "0px";
    remainder.style.visibility = "hidden";
  } else {
    remainder.style.visibility = "visible";
    remainder.style.height = `${300 - (fill / total) * 300}px`;
    remainVal.innerText = `${2 - (250 * fill) / 1000}L`;
  }
}
