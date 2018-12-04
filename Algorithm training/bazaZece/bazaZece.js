// JavaScript source code
var n = 1110;
var convertToDeca = n.toString(2);
console.log(convertToDeca);
var reconstructNumber = 0;


var decArray = convertToDeca.split("");
console.log(decArray);
console.log(decArray.length);

for (var i = 0; i < decArray.length - 1; i++) {
    reconstructNumber = Math.pow(2, i) * parseInt(decArray[decArray.length - i]);
    reconstructNumber += reconstructNumber;
    console.log(reconstructNumber + " cand i este " + i);
}
var pas = 0;
var suma = 0;
while (n) {
    var cifra = n % 10;
    n = parseInt(n / 10);
    suma += cifra * Math.pow(2, pas);
    pas++;
}

console.log(suma);
//for (var i = decArray.length - 1 ; i = 0; i--) {
//    reconstructNumber = Math.pow(2, i) * parseInt(decArray[i]);
//    reconstructNumber += reconstructNumber;
//    console.log("is this working?");
//}


//console.log(reconstructNumber);