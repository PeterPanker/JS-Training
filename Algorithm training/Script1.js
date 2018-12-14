// JavaScript source code
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


var palindrom = 1;
var confirmLimit = 0;
var numberOfPalindromes = 0;
var length = Math.floor((arr.length - 1) / 2);
var tempArray = arr.slice(a, b + 1);

for (var i = a; i < b + 1; i++) {
    if (palindrom == 1 && i < length) {
        if (tempArray[i] == tempArray[tempArray.length - i]) {
            confirmLimit++;
            palindrom = 1;
            if (confirmLimit == tempArray.length) {
                numberOfPalindromes++;
                palindromHolder[numberOfPalindromes] = tempArray;

            }
        } else {
            palindrom = 0;
            confirmLimit = 0;
        }
    }
}

console.log(palindromHolder);
console.log(numberOfPalindromes);