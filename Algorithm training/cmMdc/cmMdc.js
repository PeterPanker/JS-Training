// JavaScript source code
//var n = 400;
//var m = 250;
//var index = 0;

////Euclid

//    while (n % m > 0) {
//        rest = n % m;
//        index++;
//        n = m;
//        m = rest;
//    }
//    console.log(rest);

//cealalta

//var n = 550;
//var m = 780;

var factoriPrimi = function (n) {
    var vn = [];
    var index = 0;
    while (n % 2 == 0) {
        index++;
        n = n / 2;
    }
    if (index > 0) {
        //console.log(2, index);
        vn.push({
            factor: 2,
            putere: index
        });
    }
    var div = 3;
    while (n > 1) {
        index = 0;
        while (n % div == 0) {
            index++;
            n = n / div;
        }

        if (index > 0) {
            //console.log(div, index);
            vn.push({
                factor: div,
                putere: index
            });
        }
        div += 2;
    }
    return vn;
}

Vn = oneArray(550);
Vm = oneArray(780);

for (var i = 0; i < Vn.length; i++) {
    for (var j = 0; j < Vm.length; j++) {
        if (Vn[i].factor == Vm[j].factor) {
            console.log(Vn[i].factor, Math.min(Vn[i].putere, Vm[j].putere));
        }
    }
}




////console.log(n);
//index = 0;
//while (n % 2 == 0) {
//    index++;
//    n = n / 2;
//}
//if (index > 0) {
//    //console.log(2, index);
//    vn.push({
//        factor: 2,
//        putere: index
//    });
//}
//var div = 3;
//while (n > 1) {
//    index = 0;
//    while (n % div == 0) {
//        index++;
//        n = n / div;
//    }

//    if (index > 0) {
//        //console.log(div, index);
//        vn.push({
//            factor: div,
//            putere: index
//        });
//    }
//    div += 2;
//}


////console.log(m);
//index = 0;
//while (m % 2 == 0) {
//    index++;
//    m = m / 2;
//}
//if (index > 0) {
//    //console.log(2, index);
//    vm.push({
//        factor: 2,
//        putere: index
//    });
//}
//div = 3;
//while (m > 1) {
//    index = 0;
//    while (m % div == 0) {
//        index++;
//        m = m / div;
//    }

//    if (index > 0) {
//        //console.log(div, index);
//        vm.push({
//            factor: div,
//            putere: index
//        });
//    }
//    div += 2;
//}

//console.log(vn);
//console.log(vm);

//for (var i = 0; i < vn.length; i++) {
//    for (var j = 0; j < vm.length; j++) {
//        if (vn[i].factor == vm[j].factor) {
//            console.log(vn[i].factor, Math.min(vn[i].putere, vm[j].putere));
//        }
//    }
//}
