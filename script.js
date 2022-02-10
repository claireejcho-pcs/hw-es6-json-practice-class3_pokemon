/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let myName = document.querySelector("#my-name"); // input field
let greeting = document.querySelector("#greeting"); // empty div
let clickMe = document.querySelector("#click-me"); // button

clickMe.addEventListener("click", writeStory, false);

function writeStory() {
  let launchedStory = "<p>Welcome, " + myName.value + ".</p>";
  
 
 launchedStory =  launchedStory + "<div><img src='https://cdn.glitch.com/ee45a6b7-03f1-42da-ab47-5ff127acfc62%2F"+myName.value+".png?v=1612468365638'></div>";

  greeting.innerHTML = launchedStory;
}
