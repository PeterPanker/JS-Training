// JavaScript source code

//create canvas
var grid = $('#grid-space');
var canvasWidth = 1000;
var canvasHeight = 1000;
grid.attr('width', canvasWidth);
grid.attr('height', canvasHeight);
var ctx = grid[0].getContext("2d");

//knob speed and rgid size selectors
var speedMultiplier = $('input[name="speed"]').val();
var gridMultiplier = $('input[name="gridSize"]').val();

$('input[name="gridSize"]').on("change", function () {
    getGrid();
    console.log(gridMultiplier);
}).on("input", getGrid());

//matrix size
var n = 100 ;
var m = 100;

var pixelSize = 10 ;

var arr = [];
var arr2 = [];
var generation = 1;
var drawingArr = arr;

var alive = 1;
var dead = 0;
var countNeighbours = 0;
var borderSize = 1;
var lifeSpeed = 10;





//generate array (full of life and death)
 function getGrid() {
    for (var i = 0; i < n; i++) {
        arr[i] = [];
        arr2[i] = [];
        for (var j = 0; j < m; j++) {
            //arr[i][j] = Math.floor(Math.random() * 2);
            arr[i][j] = 0;
            arr2[i][j] = 0;
            if (arr[i][j]) {
                ctx.fillStyle = '#32cd32'
            } else {
                ctx.fillStyle = '#3232cd'
            }
            ctx.fillRect(i * (pixelSize + borderSize) + borderSize, j * (pixelSize + borderSize) + borderSize, pixelSize - borderSize, pixelSize - borderSize);

        }
    }
}    
getGrid();


//function to set visual alive or dead cells
var draw = function (a, x, y) {
    if (a[y][x] !== alive) {
        a[y][x] = alive;
    } else {
        a[y][x] = dead;
    }

    if (a[y][x] == alive) {
        ctx.fillStyle = '#32cd32'
    }
    if (a[y][x] == dead) {
        ctx.fillStyle = '#3232cd'
    }
    ctx.fillRect(x * (pixelSize + borderSize) + borderSize, y * (pixelSize + borderSize) + borderSize, pixelSize - borderSize, pixelSize - borderSize);
    console.log(drawingArr);
}

var drawAll = function () {
    //console.log(JSON.stringify(arr));
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {

            if (drawingArr[i][j] == alive) {
                ctx.fillStyle = '#32cd32'
            } else {
                ctx.fillStyle = '#3232cd'
            }
            ctx.fillRect(j * (pixelSize + borderSize) + borderSize, i * (pixelSize + borderSize) + borderSize, pixelSize - borderSize, pixelSize - borderSize);

        }
    }
}



////check if the cell is eligible for life/reproduction
var checkLife = function () {
    var countNeighbours;
    var cuurentGeneration;
    var nextGeneration;
    if (generation % 2 == 0) {
        cuurentGeneration = arr2;
        nextGeneration = arr;
    } else {
        cuurentGeneration = arr;
        nextGeneration = arr2;
    }
    drawingArr = nextGeneration;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            countNeighbours = 0;
            if (cuurentGeneration[i - 1] != undefined && cuurentGeneration[i - 1][j - 1] != undefined && cuurentGeneration[i - 1][j - 1] == alive) {
                ++countNeighbours;
            }
            if (cuurentGeneration[i - 1] != undefined && cuurentGeneration[i - 1][j] == alive) {
                ++countNeighbours;
            }
            if (cuurentGeneration[i - 1] != undefined && cuurentGeneration[i - 1][j + 1] != undefined && cuurentGeneration[i - 1][j + 1] == alive) {
                ++countNeighbours;
            }
            if (cuurentGeneration[i][j - 1] != undefined && cuurentGeneration[i][j - 1] == alive) {
                ++countNeighbours;
            }
            if (cuurentGeneration[i][j + 1] != undefined && cuurentGeneration[i][j + 1] == alive) {
                ++countNeighbours;
            }
            if (cuurentGeneration[i + 1] != undefined && cuurentGeneration[i + 1][j - 1] && cuurentGeneration[i + 1][j - 1] == alive) {
                ++countNeighbours;
            }
            if (cuurentGeneration[i + 1] != undefined && cuurentGeneration[i + 1][j] == alive) {
                ++countNeighbours;
            }
            if (cuurentGeneration[i + 1] != undefined && cuurentGeneration[i + 1][j + 1] != undefined && cuurentGeneration[i + 1][j + 1] == alive) {
                ++countNeighbours;
            }
       
            if (cuurentGeneration[i][j] == alive) {
                if (countNeighbours < 2) {
                    nextGeneration[i][j] = dead;
                } else if (countNeighbours == 2 || countNeighbours == 3) {
                    nextGeneration[i][j] = alive;
                } else if (countNeighbours > 3) {
                    nextGeneration[i][j] = dead;
                } else {
                    nextGeneration[i][j] = dead;
                }
            } else {
                if (countNeighbours == 3) {
                    nextGeneration[i][j] = alive;
                } else {
                    nextGeneration[i][j] = dead;
                }
                
            }

            //console.log(countNeighbours, i, j);
        }
    }
    //console.log(cuurentGeneration, nextGeneration);
    generation++;
    drawAll();
   //setTimeout(checkLife, delay);
 }
//setTimeout(checkLife, delay);


//get grid position on click

grid.click(function (e) {
    var offset = $(this).offset();
    var gridItemX = (e.pageX - offset.left);
    var gridItemY = (e.pageY - offset.top);

    var gridCoordX = Math.ceil(gridItemX / (pixelSize +  borderSize)) - 1;
    var gridCoordY = Math.ceil(gridItemY / (pixelSize +  borderSize)) - 1;

    draw(drawingArr, gridCoordX, gridCoordY);   

    //alert("X: " + gridCoordX + " Y: " + gridCoordY);
});

//one set button
$('.oneStep').click(function () {
    setTimeout(checkLife, 100);
});

//start/stop button 
//var handle = setInterval(checkLife, lifeSpeed);

$('.startStopLife').click(function () {
    if ($(this).text() == "Stop") {
        clearInterval(handle);
        $(this).text("Start");
    } else {
        handle = setInterval(checkLife, lifeSpeed);
        $(this).text("Stop");
    }
});

//range sliders
var moveKnob = $('.selector-knob');
var knobContainer = $('.rangeSelector');
var mainContainer = $('.range-contianer');
var rangeWidth = knobContainer.outerWidth();
moveKnob.css("left", 0);

//function getRangeSlide() {
//    var knob = this.find(moveKnob);
//    knob.on("mousedown", function (event) {
//        $("body").on("mousemove", function (event) {
//            var edgeLimit = event.pageX - knobContainer.offset().left;

//            if (edgeLimit < 0) {
//                edgeLimit = 0;
//            }
//            else if (edgeLimit > rangeWidth - 8) {
//                edgeLimit = rangeWidth - 8;
//            }

//            knob.css("left", edgeLimit + "px");
//            $("body").on("mouseup", function () {
//                // console.log("mouse up");
//                $("body").off("mouseup");
//                $("body").off("mousemove");
//            });
//        });
//    });
//}

(function ($) {

    $.fn.getRangeSlide = function (segments) {
        var knob = this.find(moveKnob);
        var stepDisplay = this.find($('.step-display'));
        var step;
        knob.on("mousedown", function (event) {
            $("body").on("mousemove", function (event) {
                var edgeLimit = event.pageX - knobContainer.offset().left;

                if (edgeLimit < 0) {
                    edgeLimit = 0;
                }
                else if (edgeLimit > rangeWidth - 8) {
                    edgeLimit = rangeWidth - 8;
                }

                knob.css("left", edgeLimit + "px");
                step = Math.ceil(rangeWidth / segments);
                stepDisplay.text(step);
                console.log(step);
                $("body").on("mouseup", function () {
                    // console.log("mouse up");
                    $("body").off("mouseup");
                    $("body").off("mousemove");
                });
            });
        });
    }
}(jQuery));

$('.speed').getRangeSlide(10);
$('.gridSize').getRangeSlide(100);