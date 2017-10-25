// function insertSort(array) {
//     var len = array.length,
//         i, j, tmp, result;
//     result = array.slice(0);
//     for(i=1; i < len; i++){
//         tmp = result[i];
//         j = i - 1;
//         for (;j>=0 && tmp < result[j];j--) {
//             result[j+1] = result[j];
//         }
//         // while(j>=0 && tmp < result[j]){
//         //     result[j+1] = result[j];
//         //     j--;
//         // }
//     }
//     return console.log("ex:"+result);
// }

// var t = 6 ;
// while (t>3){
//     console.log(t);
//     t--;
// }

function sortIN2(arr, insertArr) {
    var result = [];
    if (insertArr) {
        result = insertArr;
    } else {
        result.push(arr[0])
    }
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        var sortIndex = -1;
        for (var j = result.length - 1; j >= 0; j--) {
            if (temp > result[j]) {
                sortIndex = j;
                break
            }
        }
        result.splice(sortIndex + 1, 0, temp)
    }
    console.log("my:" + result);
    return result
}

// sortIN2([33,11,55,22,66],[10,77]);

// sortIN2(sortIN2([33,11,55,22,66],[10,77]), [1,100]);
// sortIN2([33,11,55,22,44]);

function bubbleSort(arr) {
    var length = arr.length;
    for (var i = 1; i <= length; i++) {
        for (var j = i; j >= 1; j--) {
            //123
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1)
            }
        }
    }
}

function insertSort(arr) {
    var asd = 0;
    var s = new Date().getTime()
    var length = arr.length;
    for (var i = 1; i <= length; i++) {
        for (var j = i; j >= 1 && arr[j] < arr[j - 1]; j--) {
            //123
            // console.log(j+':before: '+ arr)
            swap(arr, j, j - 1)
            asd++
            // console.log(j+':after: '+ arr)
        }
    }
    var e = new Date().getTime()
    console.log(asd)
}

function shellSort(arr) {
    var length = arr.length;
    var h = 1;
    while (h < length / 3) {
        h = 3 * h + 1;

    }
    while (h >= 1) {
        for (var i = h; i < length; i++) {
            for (var j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
                // //123\
                console.log(arr[j]);
                console.log(arr[j-h]);
                console.log('j='+j+';i='+i+';h='+h)
                console.log(':before: '+ arr)
                swap(arr, j, j - h)
                console.log(':after: '+ arr)
            }
        }
        h = (h - 1) / 3;
    }
}

function swap(source, index1, index2) {
    var temp = source[index1];
    source[index1] = source[index2];
    source[index2] = temp;
}

// var a = [6, 7, 2, 9, 3, 5, 8, 0, 5, 4, 11];
var b = [6, 0, 2, 9, 3, 5, 8, 0, 5, 4, 11, 15, 33, 77, 88, 99, 111, 123, 12321, 98, 5, 6, 77, 45, 6, 0, 2, 9, 3, 5, 8, 0, 5, 4, 11, 15, 33, 77, 88, 99, 111, 123, 12321, 98, 5, 6, 77, 45];
var a = [6, 0, 2, 9, 3, 5, 8, 0, 5, 4, 11, 15, 33, 77, 88, 99, 111, 123, 12321, 98, 5, 6, 77, 45, 6, 0, 2, 9, 3, 5, 8, 0, 5, 4, 11, 15, 33, 77, 88, 99, 111, 123, 12321, 98, 5, 6, 77, 45];
insertSort(a);
shellSort(b);
// bubbleSort(a);
// console.log(a)