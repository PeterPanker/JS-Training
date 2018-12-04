// JavaScript source code
var n = 100;
var index =2;
var pp = 1;


var limit = Math.sqrt(n);
for (var i = 1; i < limit; i++) {
    pp = i * i;
    console.log("i: ", i);
    if (n > pp) {
        console.log(pp);
    }
}

pp = 1;
console.log('/////////////////////////');
while (pp < n) {
    console.log(pp);
    pp = index * index;
    index++;

}
