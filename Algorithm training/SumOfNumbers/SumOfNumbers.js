// JavaScript source code
var n = 8759475675;
var sum = 0;

while (n > 0) {
    sum = sum + (n % 10);
    n = Math.floor(n / 10);
}

console.log(sum);