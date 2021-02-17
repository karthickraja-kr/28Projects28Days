const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const limit = +counter.getAttribute("max-limit");
  const increment = limit / 100;

  let value = 0;

  const update = () => {
    value += increment;
    if (value < limit) {
      counter.innerText = value;
      setTimeout(() => {
        update();
      }, 1);
    } else {
      counter.innerText = limit;
    }
  };

  update();
});
