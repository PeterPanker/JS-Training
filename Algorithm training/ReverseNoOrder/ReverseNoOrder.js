// JavaScript source code
var numarul = 10203;

var reverseOrder = function (numar) {
    var n = numar;
    var sum = 0;

    while (n > 0) {
        sum = 10 * sum + (n % 10);
        n = Math.floor(n / 10);
    }

    console.log(sum);
}
