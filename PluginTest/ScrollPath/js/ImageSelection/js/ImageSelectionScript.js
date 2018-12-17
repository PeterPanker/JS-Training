// JavaScript source code
// $(document).ready(function () {

//     $(".selection--button:first-child").addClass("active");
//     $(".select--content:first-child").addClass("active");
 

//     $(".selection--button").hover(
//         function (event) {
            
//             var displaySelector = $(this).attr("id");
//             var displaySelectorItem = $(".select--content[data-display='" + displaySelector + "'], .selection--button[id='" + displaySelector + "']");
//             var restOfSiblings = $(displaySelectorItem).siblings();
//     // var displayContainerSiblings = $(".select--content").siblings();

//             if (!$(this).hasClass("active")) {
//                 $(displaySelectorItem).addClass("active");
//                 $(restOfSiblings).removeClass("active");
//             } else {
//                 if (!$(restOfSiblings).hasClass("active")) {
//                       $(displaySelectorItem).addClass("active");
//                 } else {
//                     $(displaySelectorItem).removeClass("active");
        
//                 }
//             }
//         },
//         function (event) {
//                 $(event.target).addclass("active");
//         }
//     );
    
// });

(function($) {

    $.fn.imageHoverSelection = function() {

        var tabHoverMasterContainer = this;
        var slectDisplay = this.find(".select--display");

        this.find(".selection--button:first-child").addClass("active");
        this.find(".select--content:first-child").addClass("active");
    
        this.find(".selection--button").hover(
            function (event) {
                var displaySelector = $(event.target).attr("data-hover-target");
                var displaySelectorItem = slectDisplay.find(".select--content[data-display='" + displaySelector + "']");
                var restOfSiblings = displaySelectorItem.siblings();
            // var displayContainerSiblings = $(".select--content").siblings();
        
                    if (!($(event.target).hasClass("active"))) {
                        $(displaySelectorItem).addClass("active");
                        $(event.target).siblings().removeClass("active");
                        $(restOfSiblings).removeClass("active");
                    } else {
                        if (!($(event.target).siblings().hasClass("active"))) {
                            $(displaySelectorItem).addClass("active");
                        } else {
                            $(displaySelectorItem).removeClass("active");
                
                        }
                    }
            },
            function (event) {
                $(event.target).addClass("active");
                //$(restOfSiblings).removeClass("active");
               $(event.target).siblings().removeClass("active");
            }
        );
    }

}(jQuery));