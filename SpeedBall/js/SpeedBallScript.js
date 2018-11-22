// JavaScript source code
$(document).ready(function () {
    var direction = 0;
    var pos = 10;
    
    var speed = parseInt($("input.animation-speed").val()),
        startGame = parseInt($("input.left-margin").val()),
        stopGame = parseInt($("input.right-margin").val()),
        playArea = $(".playing-area"),
        inputField1 = $(".left-margin"),
        inputField2 = $(".animation-speed"),
        inputField3 = $(".right-margin"),
        barLeft = $(".bar-1"),
        barRight = $(".bar-2"),
        ball = $(".ball"),
        inputFields = $(".animation-speed, .left-margin, .right-margin");
    var leftLimit = startGame,
        rightLimit = stopGame;
    barLeft.css("left", startGame + "px");
    barRight.css("left", startGame + stopGame + "px");
    ball.css("left", barLeft.position().left + ball.width() / 2 - 5 + "px");
    requestAnimationFrame(startTheGame);

    inputFields.on("blur", function (event) {
        if ($(this).is(inputField1)) {
            barLeft.css("left", event.target.value + "px");
        } if ($(this).is(inputField3)) {
            barRight.css("left", event.target.value + "px");
        } if ($(this).is(inputField2)) {
            speed = event.target.value;
        };

        leftLimit = barLeft.position().left;
        rightLimit = barRight.position().left;
        //speed = ball.position().left;
    });

    function startTheGame() {
        pos += direction * speed;
        //console.log(pos, rightLimit);
        if (pos >= rightLimit - 15) {
            pos = rightLimit - 15;
            direction *= -1;
        } if (pos < leftLimit + 5) {
            pos = leftLimit + 5;
            direction *= -1;
        }
        ball.css("left", pos + "px"); //move right

        requestAnimationFrame(startTheGame);
    }
    requestAnimationFrame(startTheGame);
   
    $(".slow-cancel").on("click", function(e) {
        e.preventDefault();
        cancelAnimationFrame(startTheGame);
        direction = 0;
    });

    $(".start-animation").on("click", function (e) {
        e.preventDefault();
        requestAnimationFrame(startTheGame);
        direction = 1;
    });
});

