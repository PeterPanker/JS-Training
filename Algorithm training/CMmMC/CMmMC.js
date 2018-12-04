// JavaScript source code

////Euclid
//var n = 100;
//var m = 200;
//var index = 0;
//var a = n;
//var b = m;


//while (a % b > 0) {
//    rest = a % b;
//    index++;
//    a = b;
//    b = rest;
//}
//console.log(rest);

//var CMmMC = (n * m) / rest;
//console.log(CMmMC);

//cealalta


//NOT YET FINISHED

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

Vn = twoArray(550);
Vm = twoArray(780);
console.log(Vm);
console.log(Vn);
var cmMmcArray = [];

var pushUniqueElementToArray = function (arr, factor, putere) {
    var elementIsPresent = false;
    for (var i = 0; i < arr.length; i++) {

        if (arr[i].factor == factor) {
            elementIsPresent = true;
            break;
        }
    }
    if (elementIsPresent == false) {
        arr.push({ factor: factor, putere: putere });
    }
}


for (var i = 0; i < Vn.length; i++) {

    var elementFound = false;

    for (var j = 0; j < Vm.length; j++) {
        if (Vn[i].factor == Vm[j].factor) {
            elementFound = true;
            pushUniqueElementToArray(cmMmcArray, Vn[i].factor, Math.max(Vn[i].putere, Vm[j].putere));
            break;  
        }
    }
    if (elementFound == false) {
        pushUniqueElementToArray(cmMmcArray, Vn[i].factor, Vn[i].putere);
    }
}

for (var i = 0; i < Vm.length; i++) {

    var elementFound = false;

    for (var j = 0; j < Vn.length; j++) {

        if (Vm[i].factor == Vn[j].factor) {
            elementFound = true;
            pushUniqueElementToArray(cmMmcArray, Vm[i].factor, Math.max(Vn[j].putere, Vm[i].putere));
            break;
        }
    }

    if (elementFound == false) {
        pushUniqueElementToArray(cmMmcArray, Vm[i].factor, Vm[i].putere);
    }
}

console.log(cmMmcArray);

