// JavaScript source code
var numarul = 10203;
var n = numarul;
var sum = 0;

while (n > 0)
{
sum = 10*sum + (n % 10);
n = Math.floor(n/10);
}

if (sum == numarul) {
console.log(numarul + " este un palindrom!");
}
 else {
 console.log(`Nu mai incerca! ${numarul} nu este un palindrom`);
 }