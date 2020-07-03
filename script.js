function getEpisodes() {
  fetch("https://api.tvmaze.com/shows/82/episodes")
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      makePageForEpisodes(data);
      buildSelectOptions(data);
      // createCard();
      filterSearch(data);
    })

    .catch((error) => {
      console.log(error);
    });
}
//const allEpisodes = getAllEpisodes();
let allEpisodes;
const containerEl = document.getElementById("episode-container");
const rootElem = document.getElementById("root");
const searchBar = document.getElementById("search-item");
const displayCount = document.getElementById("search-result");
const selectElement = document.getElementById("select-episode");

function setup() {}

function makePageForEpisodes(episodesList) {
  containerEl.innerHTML = "";
  episodesList.forEach((episode) => createCard(episode));
}

function createCard(episode) {
  const cardEl = document.createElement("div");
  cardEl.classList = "card";
  const titleEl = document.createElement("h3");
  titleEl.classList = "episode-info";
  const summaryEl = document.createElement("p");
  const img = document.createElement("img");
  titleEl.textContent =
    episode.name + getSeasonAndEpisode(episode.season, episode.number);

  img.setAttribute("src", episode.image.medium);
  summaryEl.innerHTML = episode.summary;
  cardEl.append(titleEl, img, summaryEl);
  containerEl.appendChild(cardEl);
}
function getSeasonAndEpisode(season, episode) {
  if (season.toString().length < 2) {
    season = "0" + season;
  }

  if (episode.toString().length < 2) {
    episode = "0" + episode;
  }
  return ` -S${season}E${episode}`;

  //   `${episode.name}` +
  //     ` -S${episode.season
  //       .toString()
  //       .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`;
}
searchBar.addEventListener("keyup", filterSearch);

function filterSearch(allEpisodes) {
  let searchTerm = searchBar.value.toLowerCase();
  console.log(searchTerm);

  let filteredEpisodes = Object.values(allEpisodes).filter((episode) => {
    return (episode.name + episode.summary).toLowerCase().includes(searchTerm);
  });
  displayCount.innerText = `Displaying ${filteredEpisodes.length}/ ${episode.length}`;
}

function buildSelectOptions(allEpisodes) {
  allEpisodes.forEach((episode) => {
    let option = document.createElement("option");
    let episodeName =
      episode.name + getSeasonAndEpisode(episode.season, episode.number);

    option.innerText = episodeName;
    option.value = episodeName;
    selectElement.appendChild(option);
  });
}
selectElement.addEventListener("change", handleSelect);
function handleSelect(event) {
  const cardList = document.querySelectorAll(".card");
  let newList = Array.from(cardList);
  let episodeNumber = event.target.value;
  newList.forEach((episode) => {
    let episodeText = episode.innerText.toLowerCase();

    if (episodeText.indexOf(episodeNumber.toLowerCase()) < 0) {
      episode.style.display = "none";
    } else {
      episode.style.display = "inline-flex";
    }
  });
}

window.onload = getEpisodes();
