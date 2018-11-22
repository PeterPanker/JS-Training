// JavaScript source code
$(document).ready(function () {
        var navButton = $(".nav--item");

    $(navButton).hover(
        function (event) {
            $(this).children("ul").addClass("active");
            $(event.target).addClass("active");
        },
        function (event) {
            $(event.target).removeClass("active");
            $(this).children("ul").removeClass("active");
        }
    );
});