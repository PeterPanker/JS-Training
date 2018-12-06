var numberList42 = [20, 234, 12, 12, 12, 123, 412, 243, 234, 24, 3234, 23, 6, 6, 6, 6, 6];
var m = numberList42.length;

// var lookOutNumber = 6;
var holder = {};



//for (var i = 0; i < m; i++) {
//    for (var j = 0; j < m; j++) {
//        if (numberList42[i] == numberList42[j]) {
//        //if (lookOutNumber == numberList42[j]) {
//            counter++;
//        }
//    }
//    console.log(numberList42[i] + " : " + counter);
//    //console.log(lookOutNumber + " : " + counter);
//    counter = 0;
//}

for (var i = 0; i < m; i++) {
    if (!holder[numberList42[i]]) {
        holder[numberList42[i]] = 1;
    } else {
        holder[numberList42[i]]++;
    }
    
}
console.log(holder);

// eu greseam gandind sa instantiez obiecte in obiect, cu key: value pairs fiind  numar: counter 
// solutia: caut daca exista valoarea efectiva in obiect (numarul cautat  este KEY); daca exista, setam counter = 1; daca reapare, ++counter;
