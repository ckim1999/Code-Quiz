// select the time class
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

Countdown();