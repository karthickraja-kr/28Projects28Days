const btn = document.getElementById("button");
const joke = document.getElementById("joke");

btn.addEventListener("click", getJoke);

getJoke();

async function getJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  joke.innerHTML = data.joke;
}
