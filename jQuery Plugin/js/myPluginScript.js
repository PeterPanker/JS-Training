// JavaScript source code
$(document).ready(function () {


function hex(num) {
    var hexStr = num.toString(16);
    return hexStr.length === 1 ? "0" + hexStr : hexStr;
}

    function log(msg) {
        $("<div>", { text: msg }).prependTo("#log");
    }


(function ($) {

    //*********************************************
    // plugin tips - color changing tutorial
    //*********************************************

    //$.fn.componentTemplate = function ( options ) {

    //    options = $.extend( {}, $.fn.componentTemplate.defaults, options);

    //    var color = "#" +
    //        hex(options.red) +
    //        hex(options.green) +
    //        hex(options.blue);

    //    return this.css({
    //        "color": color,
    //        "backgroundColor": "#000",
    //        "border": "10px solid orange"
    //     });
    //};

    //$.fn.componentTemplate.defaults = {
    //    red: 123,
    //    green: 123,
    //    blue: 123
    //};


     //*********************************************
    // extending plugins
    //*********************************************

   // var _color = $.fn.color;

    // edited and explained by Alex
   // $.fn.color = function (options) {
   //     if (options === "random") {
   //         options = {
   //             red: Math.floor(Math.random() * 256),
   //             green: Math.floor(Math.random() * 256),
   //             blue: Math.floor(Math.random() * 256)
   //         };
   //     }
   //     //return options;
   //// };
        
   //     this.css("background-color", `rgb(${options.red}, ${options.green}, ${options.blue})`);
   // };

   // $("#elem").color("random");


    //$("#elem").draggable({
    //    axis: "y"
    //});

    //returns object Object cause it's a setter (without the last parameter, it's a getter) but it also sets the axis to X from Y
   // alert( $("#elem").draggable("option", "axis", "x") );

    //$("#elem").draggable({
    //    //helper: function () {
    //    //    return $("<div>helper</div>").css("background-color", "green");
    //    //}
    //    handle: ".handler"
    //});

   // $("#elem").draggable("option", "disabled", true);

    //drag the element anywhere on the page; current status: drag element on the x axis only
    //$("#elem").bind("drag", function (event, ui) {
        
    //        ui.position.top = ui.originalPosition.top;
    //});

    $("#elem").draggable({
    });

    $("#drop").droppable({
        activeClass: "green",
        hoverClass: "blue"
    });


}(jQuery));

});

// Math.floor(Math.random() * (255 * 255 * 255)) // I
