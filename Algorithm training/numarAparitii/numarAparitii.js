var numberList42 = [20, 234, 12, 12, 12, 123, 412, 243, 234, 24, 3234, 23, 6, 6, 6, 6, 6];
var m = numberList42.length;
var counter = 0;
// var lookOutNumber = 6;

for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
        if (numberList42[i] == numberList42[j]) {
        //if (lookOutNumber == numberList42[j]) {
            counter++;
        }
    }
    console.log(numberList42[i] + " : " + counter);
    //console.log(lookOutNumber + " : " + counter);
    counter = 0;
}