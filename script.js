//You can edit ALL of the code here
function setup() {
    const allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);
    selectEpisode(allEpisodes);
}
// converting objects into an
// episodes = Object.entries(getAllEpisodes())
// console.log(episodes);
function makePageForEpisodes(allEpisodes) {
    allEpisodes.forEach((episode, index) => {
        // Create the HTML elements needed for a card
        const div = document.createElement("div");
        const h4TagElem = document.createElement("h3");
        h4TagElem.classList = 'episode-info'
        const img = document.createElement("img");
        const pElem = document.createElement('p');
        // the body element so that the newly created elements
        // can be appended to it
        const rootElem = document.getElementById("root");
        // Append the elements to the DOM
        rootElem.appendChild(div);
        div.append(h4TagElem, img, pElem);
        //const showInfo = allEpisodes[0];
        // Use innerHTML to add text to the anchor tag
        h4TagElem.innerHTML = `${episode.name}`
            + `-S${episode.season.toString().padStart(2, '0')}
E${episode.number.toString().padStart(2, '0')}`
        pElem.innerHTML = episode.summary;
        // use setAttribute to add the card class to the div, etc
        //div.setAttribute("class", "card-group card img card-block card-title ");
        div.setAttribute("class", " main-wrapper card html body main-content card-block img");
        //div.setAttribute("class", "cards")
        img.setAttribute("src", episode.image.medium);
    });
}
//filter episodes
const searchBar = document.querySelector('input');
searchBar.addEventListener('keyup', filterSearch);
let main = document.querySelector('#root')
function filterSearch(event) {
    let firstValue = event.target.value.toLowerCase();
    /* done with Orhan's help*/
    let episodes = [...main.children]  // making episodes into an array
    episodes.forEach(show => {
        const showText = show.innerText.toLowerCase()
        if (showText.indexOf(firstValue) < 0) {
            show.style.display = 'none'
        } else if (showText.indexOf(firstValue.length)) {
            show.style.display = 'inline-flex'
        }
    })
    let filteredSearch = episodes.filter(ep => getComputedStyle(ep).display == "inline-flex")
    // Display search value
    const displayCount = document.getElementById('search-result')
    let results = displayCount.innerText = `Displaying ${filteredSearch.length}/ ${episodes.length}`
}

let episodes = [...main.children]
//Show Episode Selections
const selectElement = document.getElementById('select-episode');
function selectEpisode(episodeList) {
    episodeList.forEach(episode => {
        let option = document.createElement("option")
        let episodeName = `S${episode.season.toString().padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}-${episode.name}`
        option.appendChild(document.createTextNode(episodeName))
        option.appendChild(document.createTextNode('Please Select an Episode'));
        option.value = 'option value';
        selectElement.appendChild(option)
    })
}
selectElement.addEventListener("change", handleSelect)
function handleSelect(e) {
    let episodeNumber = e.target.value.split("-")[0]
    episodes.forEach(episode => {
        let episodeText = episode.innerText
        if (episodeText.indexOf(episodeNumber) < 0) {
            episode.style.display = 'none'
        } else {
            episode.style.display = 'flex'
        }
    })
    let filtered = episodes.filter(ep => getComputedStyle(ep).display == "flex")
}

window.onload = setup;
