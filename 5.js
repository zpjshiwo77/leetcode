var longestPalindrome = function (s) {
    var sArr = s.split("");
    var len = sArr.length;
    var res = "";
    if (len == 1) res = s;
    else if (len == 2) {
        if (sArr[0] == sArr[1]) res = s;
        else res = sArr[0];
    }

    for (let i = 0; i <= len - 2; i++) {
        var item = "";
        if (sArr[i] == sArr[i + 1]) {
            item = findA(i);
            res = item.length > res.length ? item : res;
        }
        if (sArr[i] == sArr[i + 2]) {
            item = findB(i + 1);
            res = item.length > res.length ? item : res;
        }
    }

    function findA(index) {
        var str = "";
        var times = index < len / 2 ? index : len - index - 2;
        for (let i = 0; i <= times; i++) {
            if (sArr[index - i] == sArr[index + i + 1]) {
                str = sArr[index - i] + str + sArr[index + i + 1];
            }
            else return str;
        }

        return str;
    }

    function findB(index) {
        var str = sArr[index];
        var times = index < len / 2 ? index : len - index - 1;

        for (let i = 1; i <= times; i++) {
            if (sArr[index - i] == sArr[index + i]) {
                str = sArr[index - i] + str + sArr[index + i];
            }
            else return str;
        }

        return str;
    }

    if (len >= 1 && res == "") res = sArr[0];

    return res;
};