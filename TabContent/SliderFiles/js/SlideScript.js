// JavaScript source code
// $(document).ready(function () {

(function($) {
    $.fn.imageSlider = function(images, comments) {

    // var images = [
    //     "https://img.officetimeline.com/website/Content/images/home/layout-view-otl.png",
    //     "https://img.officetimeline.com/website/Content/images/home/OTL-import-excel.png",
    //     "https://img.officetimeline.com/website/Content/images/features/otl%20hero.png",
    //     "https://img.officetimeline.com/website/Content/images/features/slider/gantt-chart-pert.jpg",
    //     "https://img.officetimeline.com/website/Content/images/features/slider/gantt-chart-powerpoint.jpg",
    //     "https://img.officetimeline.com/website/Content/images/features/slider/gantt-chart-powerpoint.jpg",
    //     "https://img.officetimeline.com/website/Content/images/features/slider/gantt-chart-software.jpg",
    //     "https://img.officetimeline.com/website/Content/images/features/picello/layout%20view.png",
    //     "https://img.officetimeline.com/website/Content/images/features/picello/works%20with%20pptx.png",
    //     "https://img.officetimeline.com/website/Content/images/imageCarouselSlider/slide%201.png"
    // ];

    // var comments = [
    //     "Lorem Ipsum slide 1",
    //     "Dolor sit amet slide 2",
    //     "latin something something slide 3",
    //     "Lorem Ipsum slide 4",
    //     "Dolor sit amet slide 5",
    //     "latin something something slide 6",
    //     "Lorem Ipsum slide 7",
    //     "Dolor sit amet slide 8",
    //     "latin something something slide 9",
    //     "Lorem Ipsum slide 10"
    // ];

    var sliderMasterContainer = this;
    var element;
    var selectors = this.find(".selectors--container");
    var slideContainer = this.find(".slider--limit");
    var currentIndex = 0;

    for (var i = 0; i < images.length; i++) {
        element = `<div data-slide="${i}"></div>`;
        selectors.append($(element));
        imageS = `<div data-position="${i}" class="slide--image"><img src="${images[i]}"/><div class="comment--area">${comments[i]}</div></div>`;
        slideContainer.append($(imageS));
    }

    var slideWidth = this.find(".image--container").width();
    var slideHeight = this.find(".image--container").height();

    this.find(".slide--image").width(slideWidth);
    this.find(".slider--limit").width(slideWidth * images.length).height(slideHeight);

    this.find(".arrow--right").click(function () {
        if (currentIndex > 0) {
            currentIndex--;
        }
        slideContainer[0].style.left = `-${slideWidth * currentIndex}px`;
        syncButtons();
    });

    this.find(".arrow--left").click(function () {
       if (currentIndex < images.length - 1) {
            currentIndex++;
        }

        slideContainer[0].style.left = `-${slideWidth * currentIndex}px`;
        syncButtons();
    });

    //always add the active class to a small circle
    this.find(".selectors--container div[data-slide='" + currentIndex + "']").addClass("active");



    this.find(".selectors--container div").click(function (event) {
        //debugger;
        currentIndex = parseInt(event.target.getAttribute("data-slide"));
        slideContainer[0].style.left = `-${slideWidth * currentIndex}px`;
        syncButtons();
    });

    //hide the right arrow on the slider on load
    this.find(".arrow--right").addClass("hideMe");

    var syncButtons = function () {

        var currentSlide = sliderMasterContainer.find("div[data-slide='" + currentIndex + "']");
        var restOfTabs = currentSlide.siblings();

        if (!$(currentSlide).hasClass("active")) {
            $(currentSlide).addClass("active");
            $(restOfTabs).removeClass("active");
        } else {
            if (!$(restOfTabs).hasClass("active")) {
                $(currentSlide).addClass("active");
            } else {
                $(currentSlide).removeClass("active");
            }
        }

        if (currentIndex === 0) {
            sliderMasterContainer.find(".arrow--right").addClass("hideMe").siblings().removeClass("hideMe");
        } else if (currentIndex === (images.length -1)) {
            sliderMasterContainer.find(".arrow--left").addClass("hideMe").siblings().removeClass("hideMe");
        } else {
            sliderMasterContainer.find(".arrow--right").removeClass("hideMe");
            sliderMasterContainer.find(".arrow--left").removeClass("hideMe");
        }
    };

    this.find(".image--container").hover(
        function (e) {
            sliderMasterContainer.find(".slide--image > .comment--area").addClass("show-comment");
        }, 
        function () {
            sliderMasterContainer.find(".slide--image > .comment--area").removeClass("show-comment");
        }
    );
    }
}(jQuery));

//});