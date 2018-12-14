// JavaScript source code
//$(document).ready(function () {
(function($){

    $.fn.imageDisplay = function ( landscapes ) {
        // var landscapes = [
        //     "https:\/\/static.helpgoabroad.com\/images\/easyblog\_images\/778/clouds\_landscapes\_rocks\_california\_lakes\_skyscapes\_bing\_1920x1080\_65007.jpg",
        //     "https://i.ytimg.com/vi/zSpyvMdRSlY/maxresdefault.jpg",
        //     "https://i.pinimg.com/originals/f1/04/83/f10483a79ededaf29a482349f1ec5a2d.jpg",
        //     "https://i0.wp.com/www.kingtumblr.com/wp-content/uploads/2018/04/Amazing-Landscapes-Mountains-8.jpg"
        // ];

        var divItems;
        var itemContainDisplay = this;//$(".imageDisplay--container");

        for (var i = 0; i < landscapes.length; i++) {
            divItems = "<div class=\"image--hover\" style=\"background-image:url('" + landscapes[i] + "')\" ><div class=\"click-me\"><p>Click Me<p></div><div class=\"image--overlay\"></div></div>";
               // < div class=\"image--overlay\"><div>
           itemContainDisplay.append($(divItems));
        }

        $(".image--hover").hover(
            function () {
                $(this).siblings().addClass("background--overlay");
            }, 
            function () {
                $(this).siblings().removeClass("background--overlay");
            }
        );
    }
})(jQuery);
//});

