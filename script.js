/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let myName = document.querySelector("#my-name");
let greeting = document.querySelector("#greeting");
let clickMe = document.querySelector("#click-me");

clickMe.addEventListener("click", writeStory, false);

function writeStory() {
  let launchedStory = "<p>Welcome, " + myName.value + ".</p>";
  
 /* 
 launchedStory += "<div><img src='https://cdn.glitch.com/ee45a6b7-03f1-42da-ab47-5ff127acfc62%2F"+myName.value+".png?v=1612468365638'></div>";
*/
  greeting.innerHTML = launchedStory;
}
