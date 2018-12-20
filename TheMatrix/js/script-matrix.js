// JavaScript source code
var vector = [];

var container = $('.matrix-container');
var rowSelect = $('.m-line');
var n = 10;
var m = 10;
var elemWidth = 50;
var elemHeight = 50;
var elemMarginBottom = 10;
var elemMarginLeft = 10;


//absolute positioning



for (var i = 0; i < n; i++) {
    vector[i] = [];

    for (var j = 0; j < m; j++) {
        var verticalPositioning = i * (elemHeight + elemMarginBottom);
        var horizondalPositioning = j * (elemWidth + elemMarginLeft);
        var item = $('<div class="m-elem"></div>');
        $(item).appendTo(container);

        vector[i][j] = item;
        if (j == 0) {
            item.css('clear', 'both');
        }

        //
        //for absolute positionning only
        //
        item.css('top', verticalPositioning);
        item.css('left', horizondalPositioning);


        //elementele de pe liniile pare
        if (i % 2 == 0) {
            item.addClass('even-numbers');
        }

        //elementele de pe diagonala principala
        if (i == j) {
            item.addClass('main-diagonal');
        }

        //elemente deasupra diagonalei principale
        if (j > i) {
            item.addClass('over-main-diagonal');
        }

        //elemente deasupra diagonalei secundare
        if (i + j < n - 1) {
            item.addClass('above-secondary-diagonal');
        }

        //tabla de sah
        if ((j % 2 == 0) && (i % 2 == 0)) {
            item.addClass('checker-board');
        } else if ((j % 2 > 0) && (i % 2 >0) ) {
            item.addClass('checker-board');
        }
    }
} 

var elem = $('.m-elem');

elem.width(elemWidth);
elem.height(elemHeight);

elem.css('margin-left', elemMarginLeft + 'px');
elem.css('margin-bottom', elemMarginBottom + 'px');


var switchPos = $('.switch-position');

switchPos.click(function () {

    elem.toggleClass('absolute');
});
