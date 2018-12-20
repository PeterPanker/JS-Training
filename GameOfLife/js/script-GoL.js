// JavaScript source code

//create canvas
var grid = $('#grid-space');
var canvasWidth = 1000;
var canvasHeight = 1000;
grid.attr('width', canvasWidth);
grid.attr('height', canvasHeight);
var ctx = grid[0].getContext("2d");





//matrix size
var n = 100;
var m = 100;

var pixelSize = 10;

var arr = [];

var alive = 1;
var dead = 0;
var countNeighbours = 0;
var borderSize = 1;
var delay = 50;

//generate array (full of life and death)
for (var i = 0; i < n; i++) {
    arr[i] = [];
    for (var j = 0; j < m; j++) {
        //arr[i][j] = Math.floor(Math.random() * 2);
        //arr[i][j] = 1;
        if (arr[i][j]) {
            ctx.fillStyle = '#32cd32'
        } else {
            ctx.fillStyle = '#3232cd'
        }
        ctx.fillRect(i * (pixelSize + borderSize) + borderSize, j * (pixelSize + borderSize) + borderSize, pixelSize - borderSize, pixelSize - borderSize);
        
    }
}


//function to set visual alive or dead cells
var draw = function (a, x, y) {
    if (a[x][y] !== alive) {
        a[x][y] = alive;
    } else {
        a[x][y] = dead;
    }

    if (a[x][y] == alive) {
        ctx.fillStyle = '#32cd32'
    }
    if (a[x][y] == dead) {
        ctx.fillStyle = '#3232cd'
    }
    ctx.fillRect(x * (pixelSize + borderSize) + borderSize, y * (pixelSize + borderSize) + borderSize, pixelSize - borderSize, pixelSize - borderSize);
}

var drawAll = function () {
    //console.log(JSON.stringify(arr));
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {

            if (arr[i][j] == alive) {
                ctx.fillStyle = '#32cd32'
            } else {
                ctx.fillStyle = '#3232cd'
            }
            ctx.fillRect(i * (pixelSize + borderSize) + borderSize, j * (pixelSize + borderSize) + borderSize, pixelSize - borderSize, pixelSize - borderSize);

        }
    }
}



////check if the cell is eligible for life/reproduction
var checkLife = function () {
    var countNeighbours;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            countNeighbours = 0;
            if (arr[i - 1] != undefined && arr[i - 1][j - 1] != undefined && arr[i - 1][j - 1] == alive) {
                ++countNeighbours;
            }
            if (arr[i - 1] != undefined && arr[i - 1][j] == alive) {
                ++countNeighbours;
            }
            if (arr[i - 1] != undefined && arr[i - 1][j + 1] != undefined && arr[i - 1][j + 1] == alive) {
                ++countNeighbours;
            }
            if (arr[i][j - 1] != undefined && arr[i][j - 1] == alive) {
                ++countNeighbours;
            }
            if (arr[i][j + 1] != undefined && arr[i][j + 1] == alive) {
                ++countNeighbours;
            }
            if (arr[i + 1] != undefined && arr[i + 1][j - 1] && arr[i + 1][j - 1] == alive) {
                ++countNeighbours;
            }
            if (arr[i + 1] != undefined && arr[i + 1][j] == alive) {
                ++countNeighbours;
            }
            if (arr[i + 1] != undefined && arr[i + 1][j + 1] != undefined && arr[i + 1][j + 1] == alive) {
                ++countNeighbours;
            }


            if (arr[i][j] == alive) {
                if (countNeighbours < 2) {
                    arr[i][j] = dead;
                } else if (countNeighbours == 2 || countNeighbours == 3) {
                    arr[i][j] = alive;
                } else if (countNeighbours > 3) {
                    arr[i][j] = dead;
                }
            } else {
                if (countNeighbours == 3) {
                    arr[i][j] = alive;
                }
            }
        }
    }
    drawAll();
   //setTimeout(checkLife, delay);
}
setTimeout(checkLife, delay);


//get grid position on click

grid.click(function (e) {
    var offset = $(this).offset();
    var gridItemX = (e.pageX - offset.left);
    var gridItemY = (e.pageY - offset.top);

    var gridCoordX = Math.ceil(gridItemX / (pixelSize +  borderSize)) - 1;
    var gridCoordY = Math.ceil(gridItemY / (pixelSize +  borderSize)) - 1;

    draw(arr, gridCoordX, gridCoordY);   

    //alert("X: " + gridCoordX + " Y: " + gridCoordY);
});


$('.startLife').click(function () {
    checkLife();
    $(this).val('Stop Life');
});

$('.oneStep').click(checkLife);