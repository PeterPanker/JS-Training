var celDintaiVector = [20, 234, 12, 123, 412, 243, 234, 24, 3234, 23, 6];
var celDeDupaVector = [20, 234, 12, 12, 12, 123, 412, 243, 234, 24, 3234, 23, 6, 6, 6, 6, 6, 20];

var n = celDintaiVector.length;
var m = celDeDupaVector.length;

var counter = 0;
var iThinkIveBeenHereBefore = 0;

for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
        if (celDintaiVector[i] == celDeDupaVector[j]) {
 
            counter++;
            iThinkIveBeenHereBefore = celDintaiVector[i];
        }
        if ((celDintaiVector[i] == celDeDupaVector[j]) && (counter < 2)) {
            console.log("Unul din elementele comune este: " + celDintaiVector[i]);
        }

    }
    counter = 0;
    if (celDintaiVector[i] == iThinkIveBeenHereBefore) {

    }
}

console.log(celDintaiVector);
console.log(celDeDupaVector);