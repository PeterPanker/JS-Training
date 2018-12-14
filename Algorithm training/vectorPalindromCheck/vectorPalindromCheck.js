var vector = [2, 5, 2, 6, 9, 12, 7, 7, 8, 7, 1, 7, 1];
// var vector = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 11, 11, 12, 1, 12, 13, 11, 12, 13, 14, 15, 16, 17, 20, 70, 72, 75, 76, 82, 87, 90, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 70, 72, 75, 76, 82, 87, 90];
var maxLength = vector.length;

var checkForPalindrom = function (arr, a, b) {
    var testArray = [];
    var index = 0;
    testArray = arr.slice(a, b +1);
    var length = testArray.length;
    var limit = Math.floor(length / 2);

    for (var k = 0; k < limit; k++) {
        if (testArray[k] == testArray[length - 1 - k]) {
            index++;
            //break;
        } else {
            index = 0;
        }
        if (index == limit) {
            console.log(testArray);
        }
    }

}

for (var i = 0; i < maxLength - 1; i++) {
    for (var j = i + 1; j < maxLength; j++) {
        // fullArray = vector.slice(i,j);
        // console.log(fullArray);
        checkForPalindrom(vector, i, j);
    }
}

//checkForPalindrom(vector, 0,maxLength);


// for (var k = a; k < b; k++) {
    //     testArray = arr.slice(a,k+1);
    //    if ((testArray[k] == testArray[testArray.length - 1 -k]) && (testArray.length > 1)) {
    //        index++;
    //        if (index == testArray.length) {
    //         console.log(testArray);
    //         }
    //    } else {
    //        index = 0;
    //    }
    //    console.log("array length: " + testArray.length +" index: " + index + " k: " + k + " b: " + b );


//for (var k = 0; k < limit; k++) {
//    if (testArray[k] !== testArray[length - 1 - k]) {
//        ++index;
//        //break;
//    } else {
//        if (length > 1) {

//            console.log(testArray);
//        }
//    }
//}