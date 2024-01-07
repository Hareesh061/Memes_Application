let meme = document.getElementById("memes");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

let url="https://meme-api.com/gimme/";

let subreddit = ["catmemes","wholesomemes","dogmemes","me_irl"];


//function to get random meme

let getMeme = () =>{
    let randomSubreddit = subreddit[Math.floor(Math.random() * subreddit.length )];

    fetch(url+randomSubreddit)
        .then(resp =>resp.json())
        .then(data => {
        let memeImg = new Image();

        
        memeImg.onload = () =>{
            meme.src = data.url;
            title.innerHTML = data.title;
        }
        memeImg.src = data.url;
    });
 
};

getMemeBtn.addEventListener("click",getMeme);
window.addEventListener("load",getMeme);