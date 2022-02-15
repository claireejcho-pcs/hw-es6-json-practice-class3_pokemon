/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
let greeting = document.querySelector("#greeting"); // empty div
let clickMe = document.querySelector("#click-me"); // button
let myNumber = document.querySelector("#my-number");
clickMe.addEventListener("click", writeStory, false);

function random(number) {
  parseFloat(number);
  return Math.floor(Math.random() * number);
}

//console.log(typeof(rando));
//console.log(rando);

function writeStory() {
  let myName = document.querySelector("#my-name").value; // input field

  //moved this here because myNumber doesn't have a value to read until the button is clicked
  let rando = random(myNumber.value);
  let nameLength = myName.length;
  console.log(nameLength);
  let randoNameNumber = random(nameLength);
  let launchedStory = "<p>Welcome, " + myName + ".</p>";
  launchedStory += `<p>Your favorite number is, ${rando} .</p>
    <p>Or maybe it's ${randoNameNumber}.</p>`;

  greeting.innerHTML = launchedStory;
}
