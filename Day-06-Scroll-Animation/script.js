const elements = document.querySelectorAll(".element");

window.addEventListener("scroll", check);

check();

function check() {
  const trigger = window.innerHeight * 0.8;

  elements.forEach((element) => {
    const elementtop = element.getBoundingClientRect().top;

    if (elementtop < trigger) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}
