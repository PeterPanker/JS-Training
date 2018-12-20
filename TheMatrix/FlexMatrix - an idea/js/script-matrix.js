// JavaScript source code
var vector = [];

var container = $('.matrix-container');
var rowSelect = $('.m-line');
var n = 10;
var m = 10;
var elemWidth = 20;
var elemHeight = 20;
var elemMarginBottom = 20;
var elemMarginLeft = 20;


//absolute positioning
var verticalPositioning = i * (elemHeight + elemMarginBottom);
var horizondalPositioning = j * (elemWidth + elemMarginLeft);


for (var i = 0; i < n; i++) {
    vector[i] = [];

    var row = $('<div class="m-line"></div>');
    $(row).appendTo(container);
    
    for (var j = 0; j < m; j++) {
        
        var item = $('<div class="m-elem">' + (i + 1) + ' - ' + (j + 1) + '</div>');
        $(item).appendTo($('.m-line')[i]);

        vector[i][j] = item;

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
