let allEpisodes;
let allShows = getAllShows();
let showId;
let unfoundImgSrc =
  "data:image/png;base64,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";

const containerEl = document.getElementById("episode-container");
const rootElem = document.getElementById("root");
const searchBar = document.getElementById("search-item");
const displayCount = document.getElementById("search-result");
const selectElement = document.getElementById("select-episode");
const showSelector = document.getElementById("select-show");
let showSearchBar = document.getElementById("search-show");
showSearchBar.addEventListener("keyup", searchShows);

showSelector.addEventListener("change", getEpisodes);

// alphabetical order of shows
allShows.sort((a, b) => {
  let showOne = a.name.toLowerCase();
  let showTwo = b.name.toLowerCase();

  if (showOne < showTwo) return -1;
  if (showOne > showTwo) return 1;
});
//---Getting Show page
/* 
  In this section you're trying to get all shows page, or home page
  setup is called on load
  getShows is called on search
  */
function setup() {
  hideEpisdoesRelatedParts();
  allShows.forEach((show) => createCardForShow(show));
  buildShowOptions(allShows);
}

function getShows(arrayOfShows) {
  hideEpisdoesRelatedParts();
  arrayOfShows.forEach((show) => createCardForShow(show));
  buildShowOptions(arrayOfShows);
}

function hideEpisdoesRelatedParts() {
  containerEl.innerHTML = "";
  searchBar.style.display = "none";
  showSearchBar.style.display = "";
  selectElement.style.display = "none";
}
function createCardForShow(show) {
  const cardEl = document.createElement("div");
  cardEl.classList = "card";
  const titleEl = document.createElement("h3");
  titleEl.classList = "episode-info";
  const summaryEl = document.createElement("p");
  const img = document.createElement("img");
  titleEl.textContent = show.name;
  if (show.image != undefined) {
    img.setAttribute("src", show.image.medium);
  } else {
    img.setAttribute("src", unfoundImgSrc);
  }

  summaryEl.innerHTML = show.summary;
  cardEl.append(titleEl, img, summaryEl);
  containerEl.appendChild(cardEl);
}
function buildShowOptions(allShows) {
  showSelector.innerHTML = "";
  let ShowAlloption = document.createElement("option");
  ShowAlloption.innerText = "select a show";
  ShowAlloption.value = "all";
  showSelector.appendChild(ShowAlloption);
  allShows.forEach((show) => {
    let option = document.createElement("option");
    option.innerText = show.name;
    option.value = show.id;
    showSelector.appendChild(option);
  });
}

//Search shows
function searchShows() {
  let searchTerm = event.target.value.toLowerCase();
  filteredShows = allShows.filter((show) => {
    return (show.name + show.summary).toLowerCase().includes(searchTerm);
  });

  displayCount.innerText = `Displaying ${filteredShows.length}/ ${allShows.length}`;

  getShows(filteredShows);
}

//-----Getting Episodes Page

/* 
  In this section you're trying to get all episodes page
  getEpisodes is called when a show is selected
  makePageForEpisodes is called in different places to create the html page for episodes*/

searchBar.addEventListener("keyup", () => searchEpisodes(allEpisodes));
selectElement.addEventListener("change", handleSelect);
//whenever a show is selected, we are converting to episodes page and hide any show parts
function hideShowRelatedParts() {
  selectElement.style.display = "";
  searchBar.style.display = "";
  showSearchBar.style.display = "none";
}

function getEpisodes() {
  showId = event.target.value;
  if (showId === "all") {
    setup();
  } else {
    //hiding other show parts
    hideShowRelatedParts();

    fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        makePageForEpisodes(data);
        buildEpisodeOptions(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function makePageForEpisodes(episodesList) {
  containerEl.innerHTML = "";
  episodesList.forEach((episode) => createCardForEpisodes(episode));
}

function createCardForEpisodes(episode) {
  const cardEl = document.createElement("div");
  cardEl.classList = "card";
  const titleEl = document.createElement("h3");
  titleEl.classList = "episode-info";
  const summaryEl = document.createElement("p");
  const img = document.createElement("img");
  titleEl.textContent =
    episode.name + getSeasonAndEpisode(episode.season, episode.number);

  img.setAttribute("src", episode.image ? episode.image.medium : unfoundImgSrc);
  summaryEl.innerHTML = episode.summary;
  cardEl.append(titleEl, img, summaryEl);
  containerEl.appendChild(cardEl);
}

//formating eposide name
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

function searchEpisodes(allEpisodes) {
  let searchTerm = event.target.value.toLowerCase();
  let filteredEpisodes = allEpisodes.filter((episode) => {
    console.log(filteredEpisodes);
    return (episode.name + episode.summary).toLowerCase().includes(searchTerm);
  });

  makePageForEpisodes(filteredEpisodes);
  displayCount.innerText = `Displaying ${filteredEpisodes.length}/ ${allEpisodes.length}`;
}

function buildEpisodeOptions(allEpisodes) {
  selectElement.innerHTML = "";
  let ShowAlloptions = document.createElement("option");
  ShowAlloptions.innerText = "select an episode";
  ShowAlloptions.value = "all";
  selectElement.appendChild(ShowAlloptions);
  allEpisodes.forEach((episode) => {
    let option = document.createElement("option");
    let episodeName =
      episode.name + getSeasonAndEpisode(episode.season, episode.number);

    option.innerText = episodeName;
    option.value = episodeName;
    selectElement.appendChild(option);
  });
}

function handleSelect() {
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

window.onload = setup;
/*
The code can be refactored more and made more compact */
