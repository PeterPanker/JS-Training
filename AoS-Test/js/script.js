 //javascript source code

AOS.init({
    offset: 50,
    duration: 600,
    easing: 'ease-in-out'
});

var itemsOnPage = 1;
var mainContainer = document.getElementById('main-container');

//setInterval(addItem, 10);


//var animations = [
//    " ",
//"fade",
//"fade-up",
//"fade-down",
//"fade-left",
//"fade-right",
//"fade-up-right",
//"fade-up-left",
//"fade-down-right",
//"fade-down-left",
//"flip-up",
//"flip-down",
//"flip-left",
//"flip-right",
//"slide-up",
//"slide-down",
//"slide-left",
//"slide-right",
//"zoom-in",
//"zoom-in-up",
//"zoom-in-down",
//"zoom-in-left",
//"zoom-in-right",
//"zoom-out",
//"zoom-out-up",
//"zoom-out-down",
//"zoom-out-left",
//"zoom-out-right"
//]
//var animationLimit = animations.length;

//function addItem() {
//    if (itemsOnPage < animations.length * 3) {

//        var item = document.createElement('div');
//        item.classList.add('aos-item');
//        item.setAttribute('data-aos', animations[itemsOnPage]);
//        item.innerHTML = '<div class="aos-item__count"><h3>' + itemsOnPage + '</h3></div>';
//        mainContainer.appendChild(item);
//        itemsOnPage++;
//    } if (itemsOnPage == animations.length) {
//        itemsOnPage = 1;
//    }
  
//}


