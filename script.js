// getting references
const searchBtn = document.querySelector('#search-btn');
const searchBox = document.querySelector('#search-box');
const queryUrl = document.querySelector('#query-url');
const micBtn = document.querySelector('.mic-icon');
const google = "https://www.google.com/search?q=";

let query = "";

// this function will update the button's url according to the user-input
const bthLinkUpdater = () => {
    query = String(searchBox.value).replace(/ /g, "+");
    let url = google.concat(query);
    queryUrl.href = url;
    return true;
}

// by clicking on the search button
searchBtn.addEventListener('click', () => {
    bthLinkUpdater();
})

// by clicking on the search button : keyboard enter key(↩) event
searchBox.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        bthLinkUpdater();
        searchBtn.click();
    }
});

micBtn.addEventListener("click", () => {
    alert("This feature will be available soon!");
})