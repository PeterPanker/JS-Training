var n = 87;
var numar = 0;
var test;

var reverseOrder = function (numar) {
    var n = numar;
    var sum = 0;

    while (n > 0) {
        sum = 10 * sum + (n % 10);
        n = Math.floor(n / 10);
    }

    console.log(sum);
}

console.log(n.toString(2));

while (n >= 1) {
    rest = n % 2;
    numar = 10 * numar + Math.floor(rest);
   // console.log(hex);
    n = n / 2;
    //console.log(n);
}

console.log(reverseOrder(numar));