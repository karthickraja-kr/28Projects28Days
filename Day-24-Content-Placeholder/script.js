const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.macrumors.com/t/NzZcN38bZvHxSQWzoCwmKC69gZA=/1600x0/article-new/2020/11/new-m1-chip.jpg" alt="" />';
  title.innerHTML = "Marvalous M1";
  excerpt.innerHTML =
    "Apple is really pushing the chips to next life in every aspect compare to previous gen chips";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />';
  name.innerHTML = "Karthick";
  date.innerHTML = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
