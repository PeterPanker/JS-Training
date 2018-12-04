var listaNumere = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 11, 11, 12, 1, 12, 13, 11];

var listLength = listaNumere.length;
var counter = 0;
var crescSeq = [];
var startIndex;

for (i = 0; i < listLength-1; i++) {

    if (listaNumere[i] < listaNumere[i + 1]) {
        counter++;
        //if (listaNumere[i] !== listaNumere[i + 1]) {
        //    startIndex = listaNumere.indexOf(listaNumere[i]);
        //}
       crescSeq.push(listaNumere[i]);
       // console.log(listaNumere[i]);
        // console.log(startIndex);
    } else if (listaNumere[i] >= listaNumere[i + 1]) {
        startIndex = (i - counter);
        crescSeq.push(listaNumere[i]);
        console.log(crescSeq, "starting from index No. " + startIndex);
        crescSeq = [];
        counter = 0;
    }
   // crescSeq = [];
}
console.log(listaNumere);