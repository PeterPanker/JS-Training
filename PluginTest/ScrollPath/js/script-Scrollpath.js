$(document).ready(function () {

    var x = $(window).width(),
        y = $(window).height(),
        radius = y / 2;

    $.fn.scrollPath("getPath")
        //Start encounter
        .moveTo(x / 2, y / 2, { name: 'start' })
        //line to the next element
        .lineTo(x / 2, y * 1.5, { name: 'elem2' })
        //arc down on the left counterclockwise
        .arc(x/2, 2 * y, radius, -Math.PI / 2, Math.PI, true, { name: 'elem3' })
        //arc down to the left, clockwise
        .arc(1200, 3 * y, radius, 0, Math.PI / 2, false)
        .lineTo(x / 4, 0, { name: 'elem4' })
        //arc down counterclockwise, for half a circle
        .arc(x / 4, y / 2, radius, -Math.PI / 2, Math.PI / 2, true, { name: 'elem5' })
        //line to right for 'x' px
        .lineTo(x, 0, { name: 'elem6' })
        //arc towatrds the top, counterclockwise
        .arc(2 * x, y / 4, radius, 0, -Math.PI / 2, true, { name: 'elem7' })
        //arc towards a right top side point, clockwise
        .arc(1.5 * x, 2 * y, radius, Math.PI, 1.5 * Math.PI, false, { name: 'elem8' })
        //arc and line towards the end/start, counterclockwise
        .arc(1.5 * x, radius, 0, 1.5 * Math.PI, true)
        .lineTo(x / 2, y / 2, { name: 'end' });

    $('.canvas-wrapper').scrollPath({
        drawPath: true,
        wrapAround: true,
        scrollBar: true
    });

});
