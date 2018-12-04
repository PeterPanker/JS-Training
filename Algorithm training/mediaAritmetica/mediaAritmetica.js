var vector = [20, 234, 12, 123, 412, 243, 234, 24, 3234, 23, 6];

var sum = 0;
var mean;

for (i = 0; i < vector.length; i++) {
    sum += vector[i];
    mean = sum / (i + 1);

}
console.log(sum);
console.log(mean);