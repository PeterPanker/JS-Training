var vector = [20, 234, 12, 123, 412, 243, 234, 24, 3234, 23, 6];

var min;
var max = 0;

for (i = 0; i < vector.length; i++) {
    if (max <= vector[i]) {
        max = vector[i];
        maxIndex = vector.indexOf(max);
    } 
    min = vector[0];
    if (min >= vector[i]) {
        min = vector[i];
        minIndex = vector.indexOf(min);
    }
}
console.log(max, maxIndex);
console.log(min, minIndex);