/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let myName = document.querySelector("#my-name");
let greeting = document.querySelector("#greeting");
let clickMe = document.querySelector("#click-me");

clickMe.addEventListener("click", writeStory, false);

function writeStory() {
  let launchedStory = "<p>Welcome, " + myName.value + ".</p>";

  greeting.innerHTML = launchedStory;
}
