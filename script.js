/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
// console.log("hi");


let nombre = document.querySelector("#nombre");
let color = document.querySelector("#color");
let place = document.querySelector("#place");
let number = document.querySelector("#number");
let story = document.querySelector("#story");
let launch = document.querySelector("#launch");
let result = document.querySelector("#result");
launch.addEventListener("click", writeStory, false);

function writeStory() {
  let launchedStory = "";
  launchedStory += "<p>Welcome, " + nombre.value + ".</p>";
  launchedStory += "<p>Your color is: " + color.value + "</p>";
  launchedStory += "<p>Your place is: " + place.value + ".</p>";
  launchedStory += "<p>Your favorite number is: " + number.value + ".</p>";

  story.innerHTML = launchedStory;

  if (color.value == "green") {
    result.innerHTML = "How basic.";
  } 
  else if (color.value == "red"){
    result.innerHTML = "How bold.";
    
  }
  else {
    result.innerHTML = "How wonderful.";
  }
}
