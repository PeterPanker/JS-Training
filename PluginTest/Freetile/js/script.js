// JavaScript source code
// Freetile test script
$(document).ready(function () {


    $('.imageDisplay--container2').imageDisplay([, , , , ,]);

    for (var i = 0; i < 50; i++) {

        var w = (20 * (parseInt(Math.random() * 5) + 5) - 1),
            h = (25 * (parseInt(Math.random() * 5) + 5) - 1);
        $('<div class="element" style="max-width:100px;">' + (i + 1) + '</div>').width(w).height(h).appendTo('.root-container');
    };
 

    for (var i = 0; i < 80; i++) {

        var w = (5 * (parseInt(Math.random() * 8) + 5) - 1),
            h = (5 * (parseInt(Math.random() * 8) + 5) - 1);
        $('<div class="other-element" style="visibility:none;">' + (i + 1) + '</div>').width(w).height(h).prependTo('.image--hover');
    };

    //var populateContainers = function () {


        var fillThisUp = $('.image--hover, .root-container');
        fillThisUp.each(function () {
            $(this).freetile({
                animate: true,
                elementDelay: 1,
                customEvents: 'mouseover',
                customEvents: 'mousemove',
                containerResize: true
            });
        });
    //}
    //setTimeout(populateContainers, 100);

    $('.image--hover').click(function () {
        $(this).children('.click-me').remove();
    });
});