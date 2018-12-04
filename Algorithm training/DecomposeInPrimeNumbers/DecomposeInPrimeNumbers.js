// JavaScript source code
//var n = 400;
//var index = 0;

//while (n % 2 == 0) {
//    n = n / 2;
//    index++;
//}
//console.log(2, index);


//for (i = 3; i < n; i += 2) {
//    index = 0;
//    while (n % i == 0) {
//        n = n / i;
//        index++;
//    }
//    console.log(i, index);
//}


//n = 121;
//console.log(n);
//index = 0;
//while (n % 2 == 0) {
//    index++;
//    n = n / 2;
//}
//if (index > 0) {
//    console.log(2, index);
//}
//var div = 3;
//while (n > 1) {
//    index = 0;
//        while (n % div == 0) {
//        index++;
//        n = n / div;
//    }

//    if (index > 0) {
//        console.log(div, index);
//    }
//    div += 2;
//}
//e bine sa ai un index - Alex P.

var decompose = function (n) {
    console.log(n);
    index = 0;
    while (n % 2 == 0) {
        index++;
        n = n / 2;
    }
    if (index > 0) {
        console.log(2, index);
    }
    var div = 3;
    while (n > 1) {
        index = 0;
        while (n % div == 0) {
            index++;
            n = n / div;
        }

        if (index > 0) {
            console.log(div, index);
        }
        div += 2;
    }
};