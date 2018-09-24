$(function() {
    var $light = $('.light');
    var $timeDisplay = $('.time-elapsed');
    var intervalId = '';

    $(document).on('click', '.start-timer', function() {
        $light.css('background-color', 'lightskyblue');
        var buttonClicked = $(this).text();
        var minutesArray = buttonClicked.split(' ');
        var greenSeconds = Number(minutesArray[0])*60;
        var redSeconds = Number(minutesArray[2])*60;
        var yellowSeconds = (greenSeconds + redSeconds) / 2;
        $(this).blur();
        $('h1').text('Speech Timer: ' + buttonClicked);
        startTimer(greenSeconds, yellowSeconds, redSeconds);
    });

    // Stop timer on spacebar press
    $(window).keypress(function(e) {
        if (e.which === 32) {
            stopTimer();
        }
    });

    $(document).on('click', '.stop-timer', function() {
        stopTimer();
    });

    $(document).on('click', '.reset-timer', function() {
        location.reload();
    });

    function startTimer(greenSeconds, yellowSeconds, redSeconds) {
        // greenSeconds = 2;
        // yellowSeconds = 4;
        // redSeconds = 6;

        var seconds = 0;

        intervalId = setInterval(function() {
            seconds += 1;
            updateDisplay(seconds);
            if (seconds == greenSeconds) {
                $light.css('background-color', 'green');
            } else if (seconds == yellowSeconds) {
                $light.css('background-color', 'yellow');
            } else if (seconds == redSeconds) {
                $light.css('background-color', 'crimson');
            }
        }, 1000);
    }

    function updateDisplay(seconds) {
        var date = new Date(null);
        date.setSeconds(seconds);
        var timeString = date.toISOString().substr(11, 8);
        $timeDisplay.text(timeString);
    }

    function stopTimer() {
        clearInterval(intervalId);
        $('.time-elapsed').css('visibility', 'visible');
    }
});
