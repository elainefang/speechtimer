$(function() {
    var $light = $('.light');

    $(document).on('click', '.start-timer', function() {
        $light.css('background-color', 'lightskyblue');
        var buttonClicked = $(this).text()
        var minutesArray = buttonClicked.split(' ')[0].split('-');
        var greenMs = Number(minutesArray[0])*60*1000;
        var redMs = Number(minutesArray[1])*60*1000;
        var yellowMs = (greenMs + redMs) / 2;
        $('h1').text('Speech Timer: ' + buttonClicked);
        startTimer(greenMs, yellowMs, redMs);
    });

    $(document).on('click', '.stop-timer', function() {
        location.reload();
    });

    function startTimer(greenMilliseconds, yellowMilliseconds, redMilliseconds) {
        // greenMilliseconds = 2000;
        // yellowMilliseconds = 4000;
        // redMilliseconds = 6000;
        changeLight('green', greenMilliseconds);
        changeLight('yellow', yellowMilliseconds);
        changeLight('crimson', redMilliseconds);

        // Update timer every second with setInterval
        // Check time after every second
    }

    function changeLight(color, milliseconds) {
        setTimeout(function() {
            $light.css('background-color', color);
            var timeRemaining = (milliseconds / 60000).toFixed(1);
            $('.time-remaining').html('Time Reached:' + '<br />' + timeRemaining + ' minutes');
        }, milliseconds);
    }

    // TODO: Start timer starts the setTimeout, receives color times
});
