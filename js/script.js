// Store search bar text input element in a variable
let searchBar = document.querySelector("#search-input");
// Store fetch gif button element in a variable
let searchBtn = document.getElementById("fetch-gif-btn");
// Store output container in a variable
let gifContainer = document.getElementById("gif-container");

// Add event listener to searchBtn to make the API call
searchBtn.addEventListener("click", async function() {
    let searchStr = searchBar.value; //Get current text input from search bar
    // If search bar is empty, search for 'Puppy' by default
    if (searchStr == "") {
        searchStr = "Puppy";
    }
    // Call fetchGif function with searchGif as argument
    let gifsJSON = await fetchGifs(searchStr); //Use await so fetchGifs() will perform asynchronously
    // Call displayGifs to output gifs on webpage
    displayGifs(gifsJSON); 
})

// Define fetchGifs as async function
async function fetchGifs(searchString) {
    // Format string containing Giphy API URL including query text from search bar input
    let APIurl = `https://api.giphy.com/v1/gifs/search?api_key=TqpiFQIS5QLzlroUSsLz2vjTZDOFmgzF&q=${searchString}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    
    // Use 'await' operator while calling fetch() to send GET request to API
    const response = await fetch(APIurl);
    // Use 'await' operator while calling json() to convert response to JSON when it is available
    const data = await response.json();
    // Pull only the image data out of the JSON object
    const imgs = data.data;
    return imgs;
}

// Define displayGifs() to display gifs from a JSON returned from Giphy API
function displayGifs(gifsJSON) {
    // Clear previous gifs from output container before displaying gifs from newest search
    gifContainer.innerHTML = "";

    // Display gifs returned from API call
    gifsJSON.forEach(function(gif) {
        gifContainer.innerHTML += `<img src=${gif.images.original.url} class = "col-3 mb-3">`
    })
}