// JavaScript source code
 $(document).ready(function() {
     var moveCircle = $(".dragable--circle"),
         moveLine = $(".dragable--element"),
         container = $(".compareImage--block"),
         visibleElement = $(".image--overlay"),
         elemWidth = container.outerWidth();
         moveCircle.css("left", container.width() / 2 - moveCircle.width() / 2);
    moveLine.css({ "height": container.height() + "px", "top": -(container.height() / 2 - moveCircle.height() / 2) + "px" });
    visibleElement.width(container.width() / 2  + "px");


     moveCircle.on("mousedown", function (event) {
         console.log("mouse down")
         $("body").on("mousemove", function (event) {
             var edgeLimit = event.pageX - container.offset().left - moveCircle.width() / 2;

             if (edgeLimit < 15) {
                 edgeLimit = 15;
             } else if (edgeLimit > elemWidth-100) {
                 edgeLimit = elemWidth - 100;
             }

              
             $("#log").text("pageX: " + (event.pageX - container.offset().left - moveCircle.width() / 2) + ", pageY: " + (event.pageY - container.offset().top));
               moveCircle.css("left", edgeLimit + "px");
              //moveCircle.css("left", edgeLimit + "px");

             //visibleElement.css("width", elemWidth + (container.offset().left - event.pageX) + "px");
             visibleElement.css("width", elemWidth - edgeLimit - moveCircle.width() / 2 + "px");
           
         });

         $("body").on("mouseup", function () {
             console.log("mouse up");
             $("body").off("mouseup");
             $("body").off("mousemove");
         });
     });
     

  });