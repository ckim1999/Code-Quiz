// select the title and instructions classes and put them into variables to use in the introduction function
var title = document.querySelector(".title");
var intro = document.querySelector(".instructions");
// select the time class and put it into a variable to use in the countdown function
var time = document.querySelector(".time");

// create the starting time value to then decrement down
seconds = 60;

// countdown function
function Countdown () {
    var timedown = setInterval(function() {
        // have the time decrease by 1
        seconds--;
        // show to the user that the time is indeed going down
        time.textContent = "Time Left: " + seconds;

        // a condition which would take place if seconds was to reach zero
        if (seconds === 0) {
            clearInterval(timedown);
            alert("Time is up")
        }
    }, 500);
}

function Introduction () {
    title.textContent = "Welcome to My Code Quiz"
    intro.textContent = "This is my version of a coding quiz, this quiz will test your knowledge of basic HTML, CSS, and JavaScript. There are 7 questions and you will have 60 seconds to complete the quiz. When you are ready to my attempt of a coding quiz press the start button to begin."
}

Introduction();
Countdown();