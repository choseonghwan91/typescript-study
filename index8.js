// function 함수(a: string): number {}
var cutZero = function (str) {
    var result;
    if (str[0] === "0") {
        result = str.replace(/^./, "");
    }
    else {
        result = str;
    }
    return result;
};
var removeDash = function (str) {
    var result;
    result = str.replace(/\-/g, "");
    return Number(result);
};
var func = function (str, cut, remove) {
    var result;
    result = cut(str);
    result = remove(result);
    return result;
};
console.log(func("010-1111-2222", cutZero, removeDash));
