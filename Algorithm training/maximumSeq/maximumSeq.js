var vector = [20, 234, 12, 12, 12, 123, 412, 243, 234, 24, 3234, 23, 6, 6, 6, 6];

var n = vector.length;

var nrInSecventa = 0;
var startIndex = 0;
var numberRepeat = 1;
var counter = 1;
var numarulMaiMareDeRepetari;

for (var i = 0; i < n - 1; i++) {
    
    if (vector[i] == vector[i + 1]) {
        counter++;
        nrInSecventa = vector[i];
        startIndex = vector.indexOf(nrInSecventa);
        numberRepeat = counter;
       
    } else {
        if (counter > numarulMaiMareDeRepetari) {
            numarulMaiMareDeRepetari = counter;
            counter = 1;
        }
    }

 

    // console.log(startIndex, nrInSecventa, numberRepeat);
    console.log(numarulMaiMareDeRepetari);
}


//&& (vector[i] == vector[i -1])) || (vector[i] == vector[i - 1]) )