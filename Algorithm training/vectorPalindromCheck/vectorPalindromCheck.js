var checkPalindrom = [1, 2, 1, 3,1, 4,5,6,5,7,8,9];

var isPalindrom = 1;
// var limit = Math.floor((checkPalindrom.length - 1) / 2);
var object = {};

//var palindromFinder = function (arr, a, b) {
//    var testIndex = 0;
//    var numberOfPalindroms = 0;
//    var testArray = arr.slice(a, b + 1);

//    for (var i = a; i < b + 1; i++) {
//        if (testArray[i] == testArray[testArray.length - i - 1]) {
//            testIndex++;
//            if (testIndex == testArray.length) {
//                numberOfPalindroms++;
//                object[numberOfPalindroms] = testArray;
//                console.log(object);
//                console.log(numberOfPalindroms);
//            }
//            // console.log("i: " + testIndex);
//        } else {
//            testIndex = 0;
//        }
//    }
//}


//
var doSlice = function(arr, a, b) {
   
    var testArray = arr.slice(a, b + 1);
    var arrayLimit = testArray.length;
    var testIndex = 0;
    for (var i = a; i < b + 1; i++) {
        var palindrom = 1;
    
        var numberOfPalindroms = 0;
        if (testArray[i] == testArray[arrayLimit - (i + 1)]) {
            testIndex++;
            if (testIndex == arrayLimit) {
                console.log(testIndex, testArray);
            }
           
        } else {
            testIndex = 0;
        }
        
        //console.log("i: " + i + " - " + "arrayI = " + testArray[i] + "  - array(limit - i) =  " + testArray[arrayLimit - i] + " - testIndex = " + testIndex);
    }
    //  console.log(object);

}

for (var i = 0; i < checkPalindrom.length; i++) {
    for (var j = i + 1; j < checkPalindrom.length; j++) {
        doSlice(checkPalindrom, i, j);
    }
}
