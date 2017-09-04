/**
 * Created by lujunjie on 2017/8/6.
 */

function floatCalculate(x, y) {
    // 1. identify if x, y is float
    var stringX = x + "";
    var stringY = y + "";
    if (stringX.indexOf(".") === -1 || stringY.indexOf(".") === -1) {
        return
    }
    // 2. identify float max length
    var stringXFloat = stringX.split(".")[1];
    var stringXInt = stringX.split(".")[0];
    var stringYFloat = stringY.split(".")[1];
    var stringYInt = stringY.split(".")[0];
    var stringXFloatLength = stringXFloat.length;
    var stringYFloatLength = stringYFloat.length;
    var floatMaxLength = Math.max(stringXFloatLength, stringYFloatLength);
    // 3. add "0" to match max float length
    for (var i = stringXFloatLength; i < floatMaxLength; i++) {
        stringXFloat = stringXFloat + "0";
    }
    for (var i = stringYFloatLength; i < floatMaxLength; i++) {
        stringYFloat = stringXFloat + "0";
    }
    // 4. calculate int and float
    var caledInt =  parseInt(stringXInt) + parseInt(stringYInt);
    var caledFloar = parseInt(stringXFloat) + parseInt(stringYFloat);
    var stringCaledFloat = caledFloar + "";
    var finalFloat ;
    var finalString;
    if ( stringCaledFloat.length > floatMaxLength) {
        finalFloat = stringCaledFloat.replace(stringCaledFloat[0],"");
        caledInt = caledInt + 1;
        finalString = caledInt + "." + finalFloat;
    } else {
        finalString = caledInt + "." + stringCaledFloat;
    }

    return parseFloat(finalString)
}


module.exports = floatCalculate;
