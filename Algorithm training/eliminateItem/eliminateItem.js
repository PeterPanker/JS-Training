// var list = [20, 234, 2435, 12, 123, 412, 243, 234, 24, 3234, 23, 6];

var list = [1, 2, 3, 201, 3, 4, 28, 201, 3, 201, 201, 201, 201, 3, 4, 5, 201];
var limit = 200;
// var newList = [];
console.log(list);
for (i = 0; i < list.length; i++) {
    if (list[i] > limit) {
        for (var j = i; j < list.length - 1; j++) {
            list[j] = list[j + 1];
        }
        list.pop();
        i--;
    }
}

var splice2 = function (vect, index, numberOfElements) {
    for (var i = 0; i < numberOfElements; i++) {
            for (var j = index; j < vect.length - 1; j++) {
                vect[j] = vect[j + 1];

            }
        vect.pop();
    }
    return vect;
}

var list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("list 2 : " + list2);

console.log(splice2(list2, 16, 7));

//console.log(list);
//// console.log(newList);
//console.log(list);



//var list = [20, 234, 2435, 12, 123, 412, 243, 234, 24, 3234, 23, 6];
//function checkValue(value) {
//    if (value <= 200) {
//        return value;
//    }
//}

//list.filter(checkValue);

//on hold

//var fakeSplice(index, howMany, arr) {
//    var targetArray = this;
//    for (var i = 0; i < howMany; i++) {
//        for (var j = index; j < targetArray.length; j++) {
//            targetArray[j] = targetArray[j + 1];
//        }
//    }
//}