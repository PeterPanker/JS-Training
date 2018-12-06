// JavaScript source code
var vectorA = [20, 234, 12, 123, 412, 243, 234, 24, 3234, 23, 6];
var vectorB = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 11, 11, 12, 1, 12, 13, 11, 12, 13, 14, 15, 16, 17, 20, 70, 72, 75, 76, 82, 87, 90, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 70, 72, 75, 76, 82, 87, 90];

var maxLimit = Math.max(vectorA.length, vectorB.length);
var duplicateHolder = {};

for (var i = 0; i < maxLimit; i++) {
    if (duplicateHolder[vectorA[i]]) {
        if (duplicateHolder[vectorA[i]].indexOf("A") == -1 ) {
            duplicateHolder[vectorA[i]] += "A";
     }
    } else {
        duplicateHolder[vectorA[i]] = "A";
    }
}

for (var i = 0; i < maxLimit; i++) {
    if (duplicateHolder[vectorB[i]]) {
        if (duplicateHolder[vectorB[i]].indexOf("B") == -1) {
            duplicateHolder[vectorB[i]] += "B";
        }
    } else {
        duplicateHolder[vectorB[i]] = "B";
    }
}

for (var s in duplicateHolder) {
    if (duplicateHolder[s] == "AB") {
        console.log(s);
    }
    
}
//console.log(duplicateHolder);