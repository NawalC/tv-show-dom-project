//import {getAllEpisodes} from './episodes.js';

//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}






 function makePageForEpisodes(allEpisodes) {
  
  allEpisodes.forEach((episode, index) => {
  // Create the HTML elements needed for a card

const div = document.createElement("div");
const h4TagElem = document.createElement("h4");
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
h4TagElem.innerHTML = `${episode.name} `+  ` -S${episode.season}E0${episode.number}`

pElem.innerHTML = episode.summary;
// use setAttribute to add the card class to the div, etc

//div.setAttribute("class", "card-group card img card-block card-title ");
div.setAttribute("class", " main-wrapper card html body main-content card-block img");
//div.setAttribute("class", "cards")
img.setAttribute("src", episode.image.medium);
  
  });
 }

 //showInfo.forEach(allEpisode => showingAllEpisodes(allEpisode));

 window.onload = setup;
