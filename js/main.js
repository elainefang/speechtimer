$(function() {
    var $light = $('.light');

    $(document).on('click', '.start-timer', function() {
        $light.css('background-color', 'lightskyblue');
        var buttonClicked = $(this).text();
        var minutesArray = buttonClicked.split(' ')[0].split('-');
        var greenSeconds = Number(minutesArray[0])*60;
        var redSeconds = Number(minutesArray[1])*60;
        var yellowSeconds = (greenSeconds + redSeconds) / 2;
        $('h1').text('Speech Timer: ' + buttonClicked);
        startTimer(greenSeconds, yellowSeconds, redSeconds);
    });

    $(document).on('click', '.reset-timer', function() {
        location.reload();
    });

    function startTimer(greenSeconds, yellowSeconds, redSeconds) {
        greenSeconds = 2;
        yellowSeconds = 4;
        redSeconds = 6;

        var seconds = 0;

        setInterval(function() {
            seconds += 1;
            if (seconds == greenSeconds) {
                $light.css('background-color', 'green');
            } else if (seconds == yellowSeconds) {
                $light.css('background-color', 'yellow');
            } else if (seconds == redSeconds) {
                $light.css('background-color', 'crimson');
            }
        }, 1000);
    }
});
