// JavaScript source code
// $(document).ready(function () {
//         var navButton = $(".nav--item");

//     $(navButton).hover(
//         function (event) {
//             $(this).children("ul").addClass("active");
//             $(event.target).addClass("active");
//         },
//         function (event) {
//             $(event.target).removeClass("active");
//             $(this).children("ul").removeClass("active");
//         }
//     );
// });

(function($) {

    $.fn.navMenu = function() {

        var navMenuContainer = this;
        var navButton = this.find(".nav--item");

    this.find(navButton).hover(
        function (event) {
            $(this).children("ul").addClass("active");
            $(event.target).addClass("active");
        },
        function (event) {
            $(event.target).removeClass("active");
            $(this).children("ul").removeClass("active");
        }
    );
    }

}(jQuery));