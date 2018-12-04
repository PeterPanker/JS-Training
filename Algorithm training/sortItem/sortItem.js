//bubble sort
var list = [234, 20, 12, 123, 50, 874, 6723, 76, 1];

for (var i = 0; i < list.length - 1; i++) {
    console.log("i: " + i);
    for (var j = 0; j < list.length - i - 1; j++) {
        console.log("j: " + j);
        if (list[j] > list[j + 1]) {
            var temp = list[j];
            list[j] = list[j + 1];
            list[j + 1] = temp;
        } 
    }
}

console.log("bubble sort: " + list);


//insertion sort
list = [234, 20, 12, 123, 50, 874, 6723, 76, 1];
console.log("insertion sort list - before : " + list); 
var j = 0;

for (var i = 1; i < list.length; i++) {
    var key = list[i];
    var j = i - 1;
    while (j >= 0 && list[j] > key) {
        list[j + 1] = list[j];
        j = j - 1;
    }
    list[j + 1] = key;
}

console.log("insertion sort list - after : " + list); 


//selection sort
list = [234, 20, 12, 123, 50, 874, 6723, 76, 1];
console.log("selection sort list - before : " + list);
var j = 0;
var temp = 0;

for (var i = 0; i < list.length - 1; i++) {
    var min_index = i;
    for (var j = i + 1; j < list.length; j++) {
        if (list[j] < list[min_index]) {
            min_index = j;

            temp = list[min_index];
            list[min_index] = list[i];
            list[i] = temp;
        }
    }
}

console.log("selection sort list - after : " + list);