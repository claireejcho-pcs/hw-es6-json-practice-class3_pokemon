/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
// console.log("hi");

          var nombre = document.querySelector("#nombre");
        var color = document.querySelector("#color");
        var place = document.querySelector("#place");
        var number = document.querySelector("#number");
        var story = document.querySelector("#story")
        var launch = document.querySelector("#launch");
        launch.addEventListener("click", writeStory, false);

        function writeStory(){

          
          if(color =="blue") {
            story.innerHTML = "How basic.";
            
            
          } else {
          
          
          
          var launchedStory = "";
            launchedStory += "<p>Welcome, " + nombre.value + ". ";
            launchedStory += "Only silly people choose " + color.value + " as their favorite color.</p>";
            launchedStory += "<p>Is " + place.value + " your current place or your birth place.</p>";
            launchedStory += "<p>By the way, " + number.value + " is your serial number.</p>";

           story.innerHTML = launchedStory;
          }
        }