// select the title and instructions classes and put them into variables to use in the introduction function
var title = document.querySelector(".title");
var intro = document.querySelector(".instructions");
// select the time class and put it into a variable to use in the countdown function
var time = document.querySelector(".time");
// select the start id and convert it to a button
var startBtn = document.getElementById("start");

// create the starting time value to then decrement down
seconds = 60;

// inserted a button action to start the countdown function
startBtn.addEventListener("click", function Countdown () {
    var timedown = setInterval(function() {
        // have the time decrease by 1
        seconds--;
        // show to the user that the time is indeed going down
        time.textContent = "Time Left: " + seconds;
        
        if (seconds !== 0) {
            questions();
        } else if (seconds === 0) {
            // a condition which would take place if seconds was to reach zero
            clearInterval(timedown);
            alert("Time is up")
        }
    }, 1000);
})

// Introduction function
function Introduction () {
    title.textContent = "Welcome to My Code Quiz"
    intro.textContent = "This is my version of a coding quiz, this quiz will test your knowledge of basic HTML, CSS, and JavaScript. There are 7 questions and you will have 60 seconds to complete the quiz. When you are ready to my attempt of a coding quiz press the start button to begin."
}

// change the text
var follow = document.querySelector(".title");
var writing = document.querySelector(".instructions");

// Main function
function questions () {
    // Question 1
    // create a list element
    var list = document.createElement("ol");
    // created variables to put into the list
    var opt1 = document.createElement("li");
    var opt2 = document.createElement("li");
    var opt3 = document.createElement("li");
    var opt4 = document.createElement("li");

    // add new text into the variables
    follow.textContent = "Pick the correct answer";
    writing.textContent = "What are the basic data types used in JavaScript?";
    opt1.textContent = "boolean";
    opt2.textContent = "strings";
    opt3.textContent = "numbers";
    opt4.textContent = "lists";

    // place the list elements in the proper position
    writing.appendChild(list);
    list.appendChild(opt1);
    list.appendChild(opt2);
    list.appendChild(opt3);
    list.appendChild(opt4);
}

Introduction();
Countdown();