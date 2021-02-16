const textArea = document.getElementById("textarea");
const spanArea = document.getElementById("tags");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTags(e) {
  const tags = e
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  spanArea.innerHTML = "";
  tags.forEach((tag) => {
    const choice = document.createElement("span");
    choice.classList.add("choice");
    choice.innerText = tag;
    spanArea.appendChild(choice);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const random = pickrandomTag();

    highlightTag(random);

    setTimeout(() => {
      unHighlightTag(random);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const random = pickrandomTag();

      highlightTag(random);
    }, 100);
  }, times * 100);
}

function pickrandomTag() {
  const tags = document.querySelectorAll(".choice");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
