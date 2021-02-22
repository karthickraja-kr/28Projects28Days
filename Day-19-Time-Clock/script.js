const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
let mode = "lightMode";

toggle.addEventListener("click", () => {
  if (mode === "lightMode") {
    mode = "darkMode";
    body.classList.add("dark");
    toggle.innerText = "Dark Mode";
  } else {
    mode = "lightMode";
    body.classList.remove("dark");
    toggle.innerText = "Light Mode";
  }
});

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const time = document.querySelector(".time");
const date = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function setTime() {
  const Time = new Date();
  const hourData = Time.getHours();
  const hourFormat = hourData >= 13 ? hourData % 12 : hourData;
  const minuteData = Time.getMinutes();
  const secondData = Time.getSeconds();
  const dayData = Time.getDay();
  const monthData = Time.getMonth();
  const dateData = Time.getDate();
  const AmPm = hourData < 10 ? "AM" : "PM";

  hour.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourFormat,
    0,
    11,
    0,
    360
  )}deg)`;
  minute.style.transform = `translate(-50%, -100%) rotate(${scale(
    minuteData,
    0,
    59,
    0,
    360
  )}deg)`;
  second.style.transform = `translate(-50%, -100%) rotate(${scale(
    secondData,
    0,
    59,
    0,
    360
  )}deg)`;
  time.innerText = `${hourData}:${minuteData}  ${AmPm}`;
  date.innerHTML = `${days[dayData]}, ${months[monthData]} <span class="span">${dateData}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(() => {
  setTime();
}, 1000);
