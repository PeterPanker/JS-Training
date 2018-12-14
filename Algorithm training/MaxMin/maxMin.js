var vector = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 11, 11, 12, 1, 12, 13, 11, 12, 13, 14, 15, 16, 17, 20, 70, 72, 75, 76, 82, 87, 90, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 70, 72, 75, 76, 82, 87, 90];;

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