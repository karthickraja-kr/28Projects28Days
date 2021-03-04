const URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.querySelector(".search");
const main = document.getElementById("main");

async function getData(userName) {
  try {
    const { data } = await axios(URL + userName);
    showCard(data);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

async function getRepo(userName) {
  try {
    const { data } = await axios(URL + userName + "/repos?sort=created");
    showRepo(data);
  } catch (err) {
    console.log(err);
  }
}

function createErrorCard(data) {
  const card = `<div class="card"><h1>${data}</h1></div>`;
  main.innerHTML = card;
}

function showCard(data) {
  const card = `
    <div class="card">
        <div class="img">
          <img
            src=${data.avatar_url}
            alt=${data.name}
          />
        </div>
        <div class="content">
          <h1>${data.name}</h1>
          <p>${data.bio}</p>
          <ul>
            <li>${data.followers} <strong>Followers</strong></li>
            <li>${data.following} <strong>Following</strong></li>
            <li>${data.public_repos} <strong>Repos</strong></li>
          </ul>
          <div class="repos">
            </div>
        </div>
      </div>
    `;
  main.innerHTML = card;
}

function showRepo(data) {
  const repos = document.querySelector(".repos");
  repos.innerHTML = "";
  data.slice(0, 5).forEach((element) => {
    const ele = `<div class="repo"><a href="${element.html_url}" target ='_blank' >${element.name}</a></div>`;
    repos.innerHTML += ele;
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = search.value;
  if (userName) {
    getData(userName);
    getRepo(userName);
    search.value = "";
  }
});
