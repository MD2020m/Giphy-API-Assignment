//let url = "https://api.giphy.com/v1/gifs/search?api_key=TqpiFQIS5QLzlroUSsLz2vjTZDOFmgzF&q=Puppy&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

let searchBar = document.querySelector("#search-input")

let searchBtn = document.getElementById("fetch-gif-btn")

// Add event listener to searchBtn to make the API call
searchBtn.addEventListener("click", function() {
    let searchStr = searchBar.value; //Get current text input from search bar
    if (searchStr = null) {
        searchStr = "Puppy"
    }

    
})

async function fetchGif(searchString) {
    let url = ("https://api.giphy.com/v1/gifs/search?api_key=TqpiFQIS5QLzlroUSsLz2vjTZDOFmgzF&q=" 
                + searchString + "&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
}




/*searchBar.addEventListener("keyup", function(srchEvnt) {
    const searchStr = srchEvnt.target.value;
    console.log("The current value of the search bar is " + searchStr)
})*/