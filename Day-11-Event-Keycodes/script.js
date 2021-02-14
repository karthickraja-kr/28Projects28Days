const inside = document.querySelector(".inside");
window.addEventListener("keydown", (event) => {
  inside.innerHTML = `
    <div class="key">
    ${event.key === " " ? "Space" : event.key}
    <small>event.key</small>
    </div>
    <div class="key">
    ${event.keyCode}
    <small>event.keycode</small>
    </div>
    <div class="key">
    ${event.code}
    <small>event.code</small>
    </div>
  `;
});
