
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
+  `-S${episode.season.toString().padStart(2,'0')}E${episode.number.toString().padStart(2,'0')}`

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
        } else if (showText.indexOf(firstValue.length)){
          
            show.style.display = 'inline-flex'
        }
    })
  
    let filtered = shows.filter(ep => getComputedStyle(ep).display == "flex")
    displayNumber(filtered, shows)
  
   

  }
 

 window.onload = setup;
