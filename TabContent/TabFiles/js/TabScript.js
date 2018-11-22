// JavaScript source code
// $(document).ready(function () {
//     $(".tab--content:first-child").addClass("active");
//     $(".tab--button:first-child").addClass("active");
    
//     $(".tab--button").click(function () {
//         var displayID = $(this).attr("id");
//         var displayItem = $(".tab--content[data-display='" + displayID + "'], .tab--button[id='" + displayID + "']");
//         var restOfTabs = $(displayItem).siblings();


//         if (!$(displayItem).hasClass("active")) {
//             $(displayItem).addClass("active");
//             $(restOfTabs).removeClass("active");
//         } else {
//             if (!$(restOfTabs).hasClass("active")) {
//                 $(displayItem).addClass("active");
//             } else {
//                 $(displayItem).removeClass("active");
//             }
//         }
//     });
   
// });

(function($) {

    $.fn.tabSection = function(tabs) {

        var tabContainer = this;
        var tabButtons;
        var tabSections;
        var tabButCont = $("ul.tab--list");
        var tabSectCont = $(".tab--display");
        
        for (var i = 1; i <= tabs; i++ ){
            tabButtons = `<li id="tab-${i}" class="tab--button">Tab ${i}</li>`;
            tabSections = `<div class="tab--content tab-${i}" data-display="tab-${i}">Content for Tab ${i}</div>`;
            $(tabButtons).appendTo(tabButCont);
            $(tabSections).appendTo(tabSectCont);    
        }

       

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
    }

   
}(jQuery));