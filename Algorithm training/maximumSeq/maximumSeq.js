
var vector = [20, 234, 12, 12, 12, 12, 12, 123, 412, 243, 234, 24, 3234, 23, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12];

var n = vector.length;
var counter = 1;
var maxSequence = 0;

var vector = [20, 234, 12, 12, 12, 123, 412, 243, 234, 24, 3234, 23, 6, 6, 6, 6, 6];

var n = vector.length;
var counter = 1;
var maxSequence;
master
var temporaryHolder;
var currentSeqIndex;

for (var i = 0; i < n; i++) {
    if (vector[i] == vector[i +1]) {
mathTests
        counter ++;
        //temporaryHolder = vector[i];
        //currentSeqIndex = vector.indexOf(temporaryHolder);
        // maxSequence = counter; ;vector.indexOf(temporaryHolder);
    } else if (counter >= maxSequence) {
        maxSequence = counter;
        temporaryHolder = vector[i];
        currentSeqIndex = i - counter +1;

        counter += 1;
        temporaryHolder = vector[i];
        currentSeqIndex = vector.indexOf(temporaryHolder);
        maxSequence = counter;
    } else {
        if (counter > maxSequence) {
            maxSequence = counter;
        }
 master
        counter = 1;
    }
}

console.log("repeated: " + maxSequence + " times, the number " + temporaryHolder + " starting from array index: " + currentSeqIndex);