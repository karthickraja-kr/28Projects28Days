const API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG = "https://image.tmdb.org/t/p/w1280";
const Search_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

//Fetch Data
getData(API);

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
  displayCard(data.results);
}

function displayCard(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { overview, poster_path, title, vote_average } = movie;
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="card">
          <img
            src="${IMG + poster_path}"
            alt="${title}"
          />
          <div class="info">
            <h3>${title}</h3>
            <small class="${reviewColor(vote_average)}">${vote_average}</small>
          </div>
          <div class="overview">
            <p>${overview}</p>
          </div>
        </div>      
        `;
    main.appendChild(card);
  });
}

function reviewColor(avg) {
  if (avg >= 8) {
    return "green";
  } else if (avg >= 5) {
    return "yellow";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = search.value;

  if (val && val !== "") {
    getData(Search_API + val);
    search.value = "";
  } else {
    window.location.reload();
  }
});
