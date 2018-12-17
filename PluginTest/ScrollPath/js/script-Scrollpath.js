$(document).ready(function () {

    var x = 800,//$(window).width(),
        y = 800//$(window).height(),
        radius = 800;

    $.fn.scrollPath("getPath")
        //Start encounter
        .moveTo(x / 2, 0, { name: 'start' })
        //line to the next element
        .lineTo(x / 2, 800, { name: 'elem2' })
        //arc down to the left counterclockwise
        .arc(400, 1600, radius, -Math.PI / 2, Math.PI, true, {
            name: 'elem3',
            rotate: Math.PI / 4
        })
        //arc down to the left lower side clockwise
        .arc(-1200, 1600, radius, 0, Math.PI / 2, false, {
            name: 'elem4',
            rotate: Math.PI / 2
        })
        //arc half a circle on the lower left side counterclockwise
        .arc(-1200, 3200, radius, -Math.PI / 2, 0.5 * Math.PI, true, {
            name: 'elem5',
            rotate: Math.PI
        })
        //line to the right
        .lineTo(400, 4000, {
            name: 'elem6',
        })
        //arc to the right toward the top
        .arc(400, 3200, radius, 0.5 * Math.PI, 0, true, {
            name: 'elem7',
            rotate: Math.PI * 1.5
        })
        //line to the top and arc to the right on the top side counterclockwise
        .lineTo(1200, 1600)
        .arc(2000, 1600, radius, Math.PI, -0.5 * Math.PI, false, {
            name: 'elem8',
            rotate: Math.PI * 1.25
        })
        //line + arc to the left top side, counterclockwise, followed by a line
        .arc(1200, 800, radius, 0, -0.5 * Math.PI, true)
        .lineTo(x / 2, 0, {
            namr: 'end',
            rotate: Math.PI * 2
        });
    $('.canvas-wrapper').scrollPath({
        drawPath: false,
        wrapAround: true,
        scrollBar: true
    });

    //Image Display Tab on Hover Initialization
    $(".tabHoverContainer-1").imageHoverSelection();

    //Initialise the Slide Compare widget
    $(".imageSlideCompare-1").slideCompare();

});
