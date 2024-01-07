
let meme = document.getElementById("meme"); 
let getMemeBtn = document.getElementById("get-meme-btn");

let url = "https://meme-api.com/gimme/";

let subreddit = ["catmemes", "wholesomememes", "dogmemes", "me_irl"]; 

let getMeme = () => {
    let randomSubreddit = subreddit[Math.floor(Math.random() * subreddit.length)];

    fetch(url + randomSubreddit)
        .then(resp => resp.json())
        .then(data => {
            meme.src = data.url;
        })
        .catch(error => console.error("Error fetching meme:", error));
};

getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
