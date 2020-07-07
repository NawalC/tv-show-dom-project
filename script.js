let allEpisodes;
let allShows = getAllShows();
let showId;

function getEpisodes(url) {
  if (showId === undefined) {
    showId = 82;
  }
  fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      allEpisodes = data;
      //allShows = data
      makePageForEpisodes(data);
      buildSelectOptions(data);
      buildSelectAllShows(data);
      filterSearch(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

const containerEl = document.getElementById("episode-container");
const rootElem = document.getElementById("root");
const searchBar = document.getElementById("search-item");
const displayCount = document.getElementById("search-result");
const selectElement = document.getElementById("select-episode");
const showSelector = document.getElementById("select-show");
//let showId = event.target.value;
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
searchBar.addEventListener("keyup", () => filterSearch(allEpisodes));

function filterSearch(allEpisodes) {
  let searchTerm = searchBar.value.toLowerCase();
  let filteredEpisodes = allEpisodes.filter((episode) => {
    return (episode.name + episode.summary).toLowerCase().includes(searchTerm);
  });
  makePageForEpisodes(filteredEpisodes);
  displayCount.innerText = `Displaying ${filteredEpisodes.length}/ ${allEpisodes.length}`;
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

function buildSelectAllShows() {
  allShows.forEach((show) => {
    //selectElement.innerHTML = "";
    let option = document.createElement("option");
    //defaultSelect.textContent = "Select a show";
    option.innerText = show.name;
    option.value = show.id;
    showSelector.appendChild(option);
  });
}

showSelector.addEventListener("change", function (event) {
  let showId = event.target.value;
});

// alphabetical order of shows
allShows.sort((a, b) => {
  let showOne = a.name.toLowerCase();
  let showTwo = b.name.toLowerCase();

  if (showOne < showTwo) return -1;
  if (showOne > showTwo) return 1;
});
// showSelector.addEventListener("change", handleSelect);
// const url = `https://api.tvmaze.com/shows/${showId}/episodes`;
// function handleSelect(event) {
// const cardList = document.querySelectorAll(".card");
// let newList = Array.from(cardList);
// console.log(newList);
// showId = event.target.value;
// newList.forEach((show) => {
//   let episodeText = show.innerText.toLowerCase();

//   if (episodeText.indexOf(showId.toLowerCase()) < 0) {
//     show.style.display = "none";
//   } else {
//     show.style.display = "inline-flex";
//   }
// });

window.onload = getEpisodes();
