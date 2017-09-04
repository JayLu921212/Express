function insertSort(array) {
    var len = array.length,
        i, j, tmp, result;
    result = array.slice(0);
    for(i=1; i < len; i++){
        tmp = result[i];
        j = i - 1;
        for (;j>=0 && tmp < result[j];j--) {
            result[j+1] = result[j];
        }
        // while(j>=0 && tmp < result[j]){
        //     result[j+1] = result[j];
        //     j--;
        // }
        result[j+1] = tmp;
    }
    return console.log("ex:"+result);
}

// var t = 6 ;
// while (t>3){
//     console.log(t);
//     t--;
// }

function sortIN2 (arr, insertArr) {
    var result = [];
    if (insertArr) {
        result = insertArr;
    } else {
        result.push(arr[0])
    }
    for (var i = 0; i< arr.length; i++) {
        var temp = arr[i];
        var sortIndex = -1;
        for (var j = result.length-1 ; j>=0 ; j--) {
            if (temp > result[j]){
                sortIndex = j;
                break
            }
        }
        result.splice(sortIndex+1,0,temp)
    }
    console.log("my:"+result);
    return result
}
// sortIN2([33,11,55,22,66],[10,77]);

sortIN2(sortIN2([33,11,55,22,66],[10,77]), [1,100]);
// insertSort([33,11,55,22,66]);
sortIN2([33,11,55,22,44]);
