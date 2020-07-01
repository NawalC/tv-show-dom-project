//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();
const containerEl = document.getElementById("episode-container");
const rootElem = document.getElementById("root");
const searchBar = document.getElementById("search-item");
const displayCount = document.getElementById("search-result");
const selectElement = document.getElementById("select-episode");

function setup() {
  makePageForEpisodes(allEpisodes);
  //selectEpisode(allEpisodes);
}

function makePageForEpisodes(episodesList) {
  containerEl.innerHTML = "";
  episodesList.forEach((episode) => createCard(episode));
  displayCount.innerText = `Displaying ${episodesList.length}/ ${allEpisodes.length}`;
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
function filterSearch() {
  let searchTerm = searchBar.value.toLowerCase();
  let filteredEpisodes = allEpisodes.filter((episode) => {
    return (episode.name + episode.summary).toLowerCase().includes(searchTerm);
  });
  makePageForEpisodes(filteredEpisodes);
}

function buildSelectOptions() {}
// let episodes = [...main.children];
// //Show Episode Selections
// const selectElement = document.getElementById("select-episode");
// function selectEpisode(episodeList) {
//   episodeList.forEach((episode) => {
//     let option = document.createElement("option");
//     let episodeName = `S${episode.season
//       .toString()
//       .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}-${
//       episode.name
//     }`;
//     option.appendChild(document.createTextNode(episodeName));
//     option.appendChild(document.createTextNode("Please Select an Episode"));
//     option.value = "option value";
//     selectElement.appendChild(option);
//   });
// }
// selectElement.addEventListener("change", handleSelect);
// function handleSelect(event) {
//   let episodeNumber = event.target[0].textContent.split("-");

//   //console.log(e.target[0].textContent);
//   let episodes = [...main.children];
//   console.log(episodes[0].textContent);
//   episodes.forEach((episode) => {
//     let episodeText = episode.innerText.toLowerCase();
//     if (episodeText.indexOf(episodeNumber) < 0) {
//       episode[0].style.display = "none";
//     } else if (episodeText.indexOf(episodeNumber)) {
//       episode.style.display = "inline-flex";

//       let selectedEpisode = episode.filter(
//         (ep) => getComputedStyle(ep).display == "inline-flex"
//       );
//       console.log(selectedEpisode);
//     }
//   });

//   console.log(episodes[0]);
// }

window.onload = setup;
