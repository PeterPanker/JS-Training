// JavaScript source code
$(document).ready(function () {
    $(".tab--content:first-child").addClass("active");
    $(".tab--button:first-child").addClass("active");
    
    $(".tab--button").click(function () {
        var displayID = $(this).attr("id");
        var displayItem = $(".tab--content[data-display='" + displayID + "'], .tab--button[id='" + displayID + "']");
        var restOfTabs = $(displayItem).siblings();


        if (!$(displayItem).hasClass("active")) {
            $(displayItem).addClass("active");
            $(restOfTabs).removeClass("active");
        } else {
            if (!$(restOfTabs).hasClass("active")) {
                $(displayItem).addClass("active");
            } else {
                $(displayItem).removeClass("active");
            }
        }
    });
   
});