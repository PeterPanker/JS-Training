// var arrayPalindrom = [20, 234, 12, 123, 412, 243, 234, 24, 3234, 23, 6];

 var arrayPalindrom = [6, 12, 5, 12, 6];

var lung = arrayPalindrom.length;
var palindrom = 0;

for (var i = 0; i < lung - 1; i++) {
    if (arrayPalindrom[i] == arrayPalindrom[lung - (i + 1)]) {
        palindrom = 1;
    } else {
        palindrom = 0;
    }
}

if (palindrom) {
    console.log("The vector is a palindrom : " + arrayPalindrom);
} else {
    console.log("The vector is NOT a palindrom!");
}



//palindrom = 1;
//i = 0;
//length = Math.floor((a.length - 1)/2);// # nus cum se scrie sa iei catul impartirii la 2;
//while (palindrom == 1 && i < length ) {
//    if (a[i] === a[a.length - 1 - i]) {
//        i++
//    }
//    else {
//        palindrom = 0;
//    }
//}