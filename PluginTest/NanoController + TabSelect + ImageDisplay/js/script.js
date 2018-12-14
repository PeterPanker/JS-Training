// JavaScript source code
$(document).ready(function () {

    $(".nano").nanoScroller();
    $(".nano").nanoScroller({ flash: true });
    $(".sccroll-to-node").on('click', function() {
    //$(".nano").nanoScroller({ scrollTo: $('#a_node') });
    //$(".nano").nanoScroller({ scrollBottom: 500 });
    //$(".nano").nanoScroller({ scrollTop: 200 });
    //$(".nano").nanoScroller({ destroy: true });
    });
    
//tab element init
    $(".tabElem-1").tabSection(12);

//image display init
    $(".imageDisplay--container").imageDisplay( [
    "https:\/\/static.helpgoabroad.com\/images\/easyblog\_images\/778/clouds\_landscapes\_rocks\_california\_lakes\_skyscapes\_bing\_1920x1080\_65007.jpg",
    "https://i.ytimg.com/vi/zSpyvMdRSlY/maxresdefault.jpg",
    "https://i.pinimg.com/originals/f1/04/83/f10483a79ededaf29a482349f1ec5a2d.jpg",
    "https://i0.wp.com/www.kingtumblr.com/wp-content/uploads/2018/04/Amazing-Landscapes-Mountains-8.jpg",
    "https:\/\/static.helpgoabroad.com\/images\/easyblog\_images\/778/clouds\_landscapes\_rocks\_california\_lakes\_skyscapes\_bing\_1920x1080\_65007.jpg",
    "https://i.ytimg.com/vi/zSpyvMdRSlY/maxresdefault.jpg",
    "https://i.pinimg.com/originals/f1/04/83/f10483a79ededaf29a482349f1ec5a2d.jpg",
    "https://i0.wp.com/www.kingtumblr.com/wp-content/uploads/2018/04/Amazing-Landscapes-Mountains-8.jpg",
    "https:\/\/static.helpgoabroad.com\/images\/easyblog\_images\/778/clouds\_landscapes\_rocks\_california\_lakes\_skyscapes\_bing\_1920x1080\_65007.jpg",
    "https://i.ytimg.com/vi/zSpyvMdRSlY/maxresdefault.jpg",
    "https://i.pinimg.com/originals/f1/04/83/f10483a79ededaf29a482349f1ec5a2d.jpg",
    "https://i0.wp.com/www.kingtumblr.com/wp-content/uploads/2018/04/Amazing-Landscapes-Mountains-8.jpg",
    "https:\/\/static.helpgoabroad.com\/images\/easyblog\_images\/778/clouds\_landscapes\_rocks\_california\_lakes\_skyscapes\_bing\_1920x1080\_65007.jpg",
    "https://i.ytimg.com/vi/zSpyvMdRSlY/maxresdefault.jpg",
    "https://i.pinimg.com/originals/f1/04/83/f10483a79ededaf29a482349f1ec5a2d.jpg",
    "https://i0.wp.com/www.kingtumblr.com/wp-content/uploads/2018/04/Amazing-Landscapes-Mountains-8.jpg"
    ]);

});