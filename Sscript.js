//window.addEventListener('DOMContentLoaded', function () {//is often used to ensure that your JavaScript code runs after the HTML document's structure has been fully loaded and is ready for manipulation. 
    //JavaScript code that manipulates elements should generally be placed at the end of the HTML body or within a DOMContentLoaded event handler to ensure that the elements are available when the script runs.
 var hole = document.getElementById("hole");
 var game = document.getElementById("game");
 var result = document.getElementById("result");
 var text = document.getElementById("text");
 var score = 0;
 var jumping = 0;

 hole.addEventListener("animationiteration", RanHole)
 function RanHole() {
    var random = -((Math.random() * 350) + 150)
        /*Math.random() generates a random decimal number between 0 and 1.
        Math.random() * 350 multiplies that random decimal by 350, giving you a random number between 0 and 350.
        Finally, Math.random() * 350 + 150 further adds 150 to that result, giving you a random number between -500 and -150.
        So, in this context, the asterisk (*) is used for mathematical multiplication.*/
    hole.style.top = random + "px";
    score++;
}
    /*Game Development: In game development or interactive web applications, negative values are often used to control the movement of game characters, objects, or elements within the game's environment.*/

 var fall = setInterval(function () {
     var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if (jumping == 0) {
            bird.style.top = (birdTop+2)+"px";
           }
     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("Left"));
     var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
     var hTop = (500+holeTop);
        if((birdTop>450)||((blockLeft<50)&&(blockLeft>-50)&&(birdTop<hTop)||(birdTop>hTop+100)))
        {
             result.style.display = "block";
             text.innerText = `Your final score is : ${score}`;
             game.style.display = "none";
             score = 0;
        }
        }, 1007)

 window.addEventListener("keydown",hop)

   function hop()
    {
       jumping = 1;
       var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
       if (birdTop>6)
        {
           bird.style.top = (birdTop - 60) +"px"
        }
        setTimeout(function(){
         jumping = 0;
        },10000)
    }
