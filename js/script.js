// Store search bar text input element in a variable
let searchBar = document.querySelector("#search-input");
// Store fetch gif button element in a variable
let searchBtn = document.getElementById("fetch-gif-btn");
// Store output container in a variable
let gifContainer = document.getElementById("gif-container");

// Add event listener to searchBtn to make the API call
searchBtn.addEventListener("click", async function() {
    let searchStr = searchBar.value; //Get current text input from search bar
    console.log(searchStr);
    // If search bar is empty, search for 'Puppy' by default
    if (searchStr == "") {
        searchStr = "Puppy"
    }
    console.log(searchStr)
    // Call fetchGif function with searchGif as argument
    // Save returned image in image varaiable
    let image = fetchGif(searchStr);    
})

async function fetchGif(searchString) {
    let APIurl = `https://api.giphy.com/v1/gifs/search?api_key=TqpiFQIS5QLzlroUSsLz2vjTZDOFmgzF&q=${searchString}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(APIurl);
    const data = await response.json();
    const imgs = data.data;
    console.log(imgs);

    // Remove previous gifs from gif container on each new search
    gifContainer.innerHTML = "";

    imgs.forEach(function(gif) {
        gifContainer.innerHTML += `<img src=${gif.images.original.url} class = "col-3 mb-3">`;
    })
}