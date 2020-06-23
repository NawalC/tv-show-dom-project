//import {getAllEpisodes} from './episodes.js';

//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}


const rootElem = document.getElementById("root");
// const columnElem = document.createElement('column');
// rootElem.appendChild(columnElem);
// const rowElem = document.createElement('row');
// columnElem.appendChild(rowElem);
// const card = document.createElement('card');
// rowElem.appendChild(card);

 const showName = document.getElementsByClassName('.name')
  const showSummary = document.getElementsByClassName('.summary')


function makePageForEpisodes(allEpisodes) {

  
//rootElem.textContent = `Got ${episodeList.length} episode(s)`;
allEpisodes.forEach((show) => {
   
  showName.textContent = `${show.name}`
  showSummary.textContent = `${show.summary}`
})
}

window.onload = setup;
