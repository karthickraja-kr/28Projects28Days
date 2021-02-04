const images = document.querySelectorAll(".image");

images.forEach((image) => {
  image.addEventListener("click", () => {
    removeActiveClass();
    image.classList.add("active");
  });
});

const removeActiveClass = () => {
  images.forEach((image) => {
    image.classList.remove("active");
  });
};
