var listaNumere = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 11, 11, 12, 1, 12, 13, 11, 12, 13, 14, 15, 16, 17, 20, 70, 72, 75, 76, 82, 87, 90, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 70, 72, 75, 76, 82, 87, 90];

var listLength = listaNumere.length;
var counter = 0;
var crescSeq = [];
var maxNumbSeq = 0;
var startIndex;

for (i = 0; i < listLength -1; i++) {

    if (listaNumere[i] < listaNumere[i + 1]) {
        counter++;
        //crescSeq.push(listaNumere[i]);
    } else {
        maxNumbSeq = counter;
        counter = 0;
    }
    if(counter > maxNumbSeq) {
        maxNumbSeq = counter;
        startIndex = (i - maxNumbSeq + 1 );

    }
}

for (var j = startIndex ; j < startIndex + maxNumbSeq+1; j++) {
    crescSeq.push(listaNumere[j]);
}


console.log(listaNumere);
console.log(crescSeq, "starting from index No. " + startIndex);