// JavaScript source code
$(document).ready(function () {

    $(".selection--button:first-child").addClass("active");
    $(".select--content:first-child").addClass("active");
 

    $(".selection--button").hover(
        function (event) {
            
            var displaySelector = $(this).attr("id");
            var displaySelectorItem = $(".select--content[data-display='" + displaySelector + "'], .selection--button[id='" + displaySelector + "']");
            var restOfSiblings = $(displaySelectorItem).siblings();
    // var displayContainerSiblings = $(".select--content").siblings();

            if (!$(this).hasClass("active")) {
                $(displaySelectorItem).addClass("active");
                $(restOfSiblings).removeClass("active");
            } else {
                if (!$(restOfSiblings).hasClass("active")) {
                      $(displaySelectorItem).addClass("active");
                } else {
                    $(displaySelectorItem).removeClass("active");
        
                }
            }
        },
        function (event) {
                $(event.target).addclass("active");
        }
    );
    
});