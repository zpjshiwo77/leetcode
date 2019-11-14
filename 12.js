var intToRoman = function (num) {
    var keyList = [[1000, "M"], [100, "C"], [500, "D"], [100, "C"], [10, "X"], [50, "L"], [10, "X"], [1, "I"], [5, "V"], [1, "I"]];
    var res = "";
    var item = num;
    var itemStr = "";

    for (var i = 0; i < keyList.length; i++) {
        var key = keyList[i][0];
        var val = keyList[i][1];
        var nums = parseInt(item / key);
        // console.log(key);
        // console.log(nums);
        // console.log(item);
        if (nums >= 9) {
            var val2 = keyList[i - 1][1];
            itemStr += val + val2;
            item = item - key * nums;
        }
        else if (nums == 4) {
            var val2 = keyList[i + 1][1];
            itemStr += val + val2;
            item = item - key * nums;
        }
        else if (nums >= 1 && nums < 4) {
            for (var j = 0; j < nums; j++) {
                itemStr += val
            }
            item = item - key * nums;
        }
        // console.log(item);
        // console.log("itemStr:"+itemStr);
        // console.log(res);
        res += itemStr;
        itemStr = "";
        if (item == 0) break;
    }

    // console.log(res);
    return res;
};