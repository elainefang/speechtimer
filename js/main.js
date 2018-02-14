$(function() {
    var symbols = ['%', '%', '@', '@', '$', '$', '#', '#']; // TODO: shuffle this array


    function Card(div, symbol) {
        this.symbol = symbol;
        this.facing_up = false;

        this.flip = function() {
            if (this.facing_up) {
                //flip the div face down
                this.facing_up = false;
                $(this).css('background-color', 'cornflowerblue');
            } else {
                //flip the div face up
                this.facing_up = true;
                $(div).css('background-color', 'white');
                $(div).text(symbol);
            }
        }
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }


    var tested_card = null;

    $(".flip-card").each(function(index, div) {
        var card = new Card(div, symbols[index]);

        $(div).click(function() {
            if (card.facing_up) {
                //TODO: people probably shouldn't click faced up cards?
            } else {
                card.flip();

                if (tested_card === null) {
                    tested_card = card;
                } else {
                    if (tested_card.symbol === card.symbol) {
                        //leave them both up
                        tested_card = null;
                    } else {
                        //TODO: sleep for like 3 seconds
                        tested_card.flip();
                        card.flip();
                        tested_card = null;
                    }
                }
            }
        });
    });

    // $( ".flip-card" ).click(function() {
    //     $(this).css('background-color', 'white');
    // });
});